"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Server {
  label: string;
  sub: string;
  color: string;
  r: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  emoji: string;
}

const EDGES: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [0, 4],
  [1, 2], [3, 4], [1, 3], [2, 4],
];

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

export default function ServerNodeGraph() {
  const { theme, resolvedTheme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);
  const tipNameRef = useRef<HTMLSpanElement>(null);
  const tipSubRef = useRef<HTMLSpanElement>(null);

  const themeRef = useRef(resolvedTheme || theme || "dark");

  useEffect(() => {
    themeRef.current = resolvedTheme || theme || "dark";
  }, [theme, resolvedTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const tip = tipRef.current;
    const tipName = tipNameRef.current;
    const tipSub = tipSubRef.current;
    if (!canvas || !tip || !tipName || !tipSub) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;

    const rnd = (min: number, max: number) => Math.random() * (max - min) + min;
    const vRnd = () => (Math.random() - 0.5) * 0.65;

    const servers: Server[] = [
      { label: "Junction", sub: "Hub · Front door",  color: "#1D9E75", r: 34, x: W / 2,    y: H / 2,    vx: 0,     vy: 0,     emoji: "🔗" },
      { label: "Dev",      sub: "Developers · Code",   color: "#7F77DD", r: 24, x: rnd(50, W-50), y: rnd(50, H-50), vx: vRnd(), vy: vRnd(), emoji: "💻" },
      { label: "GG",       sub: "Gaming · Compete",  color: "#378ADD", r: 24, x: rnd(50, W-50), y: rnd(50, H-50), vx: vRnd(), vy: vRnd(), emoji: "🎮" },
      { label: "Study",    sub: "Learn · Grind",     color: "#639922", r: 22, x: rnd(50, W-50), y: rnd(50, H-50), vx: vRnd(), vy: vRnd(), emoji: "📚" },
      { label: "Connect",  sub: "Meet · Collab",     color: "#D85A30", r: 22, x: rnd(50, W-50), y: rnd(50, H-50), vx: vRnd(), vy: vRnd(), emoji: "🌐" },
    ];

    const mouse = { x: -999, y: -999 };
    let hovered: Server | null = null;
    let t = 0;
    const hubOffX = Math.random() * 10;
    const hubOffY = Math.random() * 10;
    const edgeOffsets = EDGES.map(() => Math.random());
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) * (W / rect.width);
      mouse.y = (e.clientY - rect.top) * (H / rect.height);

      if (hovered) {
        tip.style.display = "block";
        tip.style.left = `${e.clientX + 14}px`;
        tip.style.top = `${e.clientY - 10}px`;
        tipName.textContent = "OB " + hovered.label;
        tipSub.textContent = hovered.sub;
      } else {
        tip.style.display = "none";
      }
    };

    const onMouseLeave = () => {
      mouse.x = -999;
      mouse.y = -999;
      tip.style.display = "none";
    };

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    function draw() {
      ctx.clearRect(0, 0, W, H);
      t += 0.012;

      // move satellites
      servers.forEach((s, i) => {
        if (i === 0) return;
        s.x += s.vx;
        s.y += s.vy;
        const pad = s.r + 14;
        if (s.x < pad || s.x > W - pad) s.vx *= -1;
        if (s.y < pad || s.y > H - pad) s.vy *= -1;
      });

      // hub gentle drift
      servers[0].x = W / 2 + Math.sin(t * 0.5 + hubOffX) * 7;
      servers[0].y = H / 2 + Math.cos(t * 0.4 + hubOffY) * 5;

      // edges + pulse dots
      EDGES.forEach(([a, b], idx) => {
        const sa = servers[a];
        const sb = servers[b];
        const dx = sb.x - sa.x;
        const dy = sb.y - sa.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const alpha = Math.max(0, 0.2 - dist / 2000);

        const grad = ctx.createLinearGradient(sa.x, sa.y, sb.x, sb.y);
        grad.addColorStop(0, `rgba(${hexToRgb(sa.color)},${alpha + 0.1})`);
        grad.addColorStop(1, `rgba(${hexToRgb(sb.color)},${alpha + 0.1})`);
        ctx.beginPath();
        ctx.moveTo(sa.x, sa.y);
        ctx.lineTo(sb.x, sb.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        const pulse = (t * 0.55 + edgeOffsets[idx]) % 1;
        const px = sa.x + dx * pulse;
        const py = sa.y + dy * pulse;
        ctx.beginPath();
        ctx.arc(px, py, 2.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${hexToRgb(sa.color)},0.75)`;
        ctx.fill();
      });

      // nodes
      hovered = null;
      servers.forEach((s, i) => {
        const dx = mouse.x - s.x;
        const dy = mouse.y - s.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const isHover = dist < s.r + 10;
        if (isHover) hovered = s;

        // outer glow
        const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 2.4);
        glow.addColorStop(0, `rgba(${hexToRgb(s.color)},${isHover ? 0.26 : 0.12})`);
        glow.addColorStop(1, `rgba(${hexToRgb(s.color)},0)`);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 2.4, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // hover ring
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r + (isHover ? 5 : 0), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${hexToRgb(s.color)},${isHover ? 0.5 : 0.2})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // fill + border
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${hexToRgb(s.color)},${isHover ? 0.32 : 0.18})`;
        ctx.fill();
        ctx.strokeStyle = s.color;
        ctx.lineWidth = isHover ? 2.2 : 1.4;
        ctx.stroke();

        // emoji
        ctx.font = `${i === 0 ? 20 : 16}px serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(s.emoji, s.x, s.y);

        // label
        ctx.font = `500 ${i === 0 ? 12 : 10}px system-ui, sans-serif`;
        ctx.fillStyle = themeRef.current === "light" ? "rgba(0,0,0,0.65)" : "rgba(255,255,255,0.65)";
        ctx.fillText(s.label, s.x, s.y + s.r + 14);
      });

      canvas.style.cursor = hovered ? "pointer" : "default";
      if (!hovered) tip.style.display = "none";

      rafId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        width={560}
        height={380}
        className="block rounded-2xl w-full max-w-[560px]"
        aria-label="Live node graph showing OpenBox servers connected to the Junction hub"
      />

      {/* Tooltip — rendered outside canvas, fixed positioned */}
      <div
        ref={tipRef}
        style={{ display: "none", position: "fixed", zIndex: 100, pointerEvents: "none" }}
        className="bg-surface/90 backdrop-blur-md border border-border rounded-xl px-3.5 py-2 shadow-xl"
      >
        <span ref={tipNameRef} className="block text-[13px] font-semibold text-foreground" />
        <span ref={tipSubRef}  className="block text-[11px] text-muted-foreground mt-0.5" />
      </div>
    </>
  );
}
