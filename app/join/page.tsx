'use client'

import Link from 'next/link'

const SERVERS = [
    {
        slug: 'junction',
        name: 'OB Junction',
        tag: 'Start Here',
        tagColor: '#E8FF47',
        description: 'The front door. General chat, announcements, introductions, and community-wide conversation. Join this one first.',
        invite: 'https://discord.gg/7ZWckKU89J',
        id: '1509116735259672668',
        status: null,
        featured: true,
    },
    {
        slug: 'dev',
        name: 'OB Dev',
        tag: 'Development',
        tagColor: '#7EB8FF',
        description: 'For builders and developers. Code help, project sharing, reviews, and collaboration.',
        invite: 'https://discord.gg/7ZWckKU89J',
        id: '1407362277631463435',
        status: null,
        featured: false,
    },
    {
        slug: 'gg',
        name: 'OB GG',
        tag: 'Gaming',
        tagColor: '#FF7E7E',
        description: 'Gaming chat, find players, share clips, and join community tournaments.',
        invite: 'https://discord.gg/7ZWckKU89J',
        id: '1508522092478337034',
        status: 'Beta',
        featured: false,
    },
    {
        slug: 'study',
        name: 'OB Study',
        tag: 'Learning',
        tagColor: '#B97EFF',
        description: 'Study sessions, accountability, and focused learning with others.',
        invite: 'https://discord.gg/7ZWckKU89J',
        id: null,
        status: 'Alpha',
        featured: false,
    },
    {
        slug: 'connect',
        name: 'OB Connect',
        tag: 'Networking',
        tagColor: '#FF9F4A',
        description: 'Opportunities, collaborators, and career growth for students and early-career folks.',
        invite: 'https://discord.gg/7ZWckKU89J',
        id: null,
        status: null,
        featured: false,
    },
]

function DiscordIcon({ size = 20 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.033.054a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
        </svg>
    )
}

function ArrowIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function MemberCount({ id }: { id: string | null }) {
    if (!id) return null
    return (
        <span className="ob-member-count" data-server-id={id}>
            <span className="ob-pulse-dot" />
            <span className="ob-member-text">— members</span>
        </span>
    )
}

export default function JoinPage() {
    const featured = SERVERS.find(s => s.featured)!
    const rest = SERVERS.filter(s => !s.featured)

    return (
        <>
            <style>{`
        :root {
          --accent: #E8FF47;
          --bg: #0A0A0A;
          --surface: #111111;
          --surface-hover: #181818;
          --border: #222222;
          --text: #F0F0F0;
          --text-muted: #666666;
          --text-dim: #444444;
          --radius: 12px;
        }

        .ob-join-page {
          background: var(--bg);
          min-height: 100vh;
          color: var(--text);
          font-family: 'Inter', sans-serif;
        }

        /* ── Hero ── */
        .ob-hero {
          padding: 96px 24px 64px;
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
        }

        .ob-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 24px;
        }

        .ob-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
        }

        .ob-hero-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(40px, 7vw, 72px);
          font-weight: 800;
          line-height: 1.0;
          letter-spacing: -0.03em;
          color: var(--text);
          margin: 0 0 20px;
        }

        .ob-hero-title span {
          color: var(--accent);
        }

        .ob-hero-sub {
          font-size: 17px;
          line-height: 1.6;
          color: var(--text-muted);
          max-width: 480px;
          margin: 0 auto 40px;
        }

        .ob-hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--accent);
          color: #0A0A0A;
          font-weight: 700;
          font-size: 15px;
          padding: 14px 28px;
          border-radius: 8px;
          text-decoration: none;
          transition: opacity 0.15s, transform 0.15s;
        }

        .ob-hero-cta:hover {
          opacity: 0.88;
          transform: translateY(-1px);
        }

        /* ── Server grid ── */
        .ob-servers {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 24px 80px;
        }

        .ob-section-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-dim);
          margin-bottom: 20px;
        }

        /* Featured card */
        .ob-featured-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 36px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: 16px;
          text-decoration: none;
          color: inherit;
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
          position: relative;
          overflow: hidden;
        }

        .ob-featured-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(232,255,71,0.04) 0%, transparent 60%);
          pointer-events: none;
        }

        .ob-featured-card:hover {
          border-color: rgba(232,255,71,0.3);
          background: var(--surface-hover);
          transform: translateY(-2px);
        }

        .ob-featured-left {
          flex: 1;
          min-width: 0;
        }

        .ob-featured-right {
          flex-shrink: 0;
        }

        /* Small cards grid */
        .ob-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .ob-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 28px 28px 24px;
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
          position: relative;
        }

        .ob-card:hover {
          background: var(--surface-hover);
          transform: translateY(-2px);
        }

        /* Tag */
        .ob-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 4px;
          width: fit-content;
        }

        .ob-tag-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: currentColor;
        }

        /* Status badge */
        .ob-status {
          position: absolute;
          top: 16px;
          right: 16px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 3px 8px;
        }

        /* Server name */
        .ob-server-name {
          font-family: 'Syne', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: var(--text);
          margin: 4px 0 0;
        }

        .ob-featured-card .ob-server-name {
          font-size: 28px;
        }

        /* Description */
        .ob-server-desc {
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-muted);
          margin: 0;
        }

        .ob-featured-card .ob-server-desc {
          font-size: 15px;
          max-width: 420px;
        }

        /* Member count */
        .ob-member-count {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          color: var(--text-dim);
          margin-top: 4px;
        }

        .ob-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #4ade80;
          flex-shrink: 0;
          animation: ob-pulse 2.4s ease-in-out infinite;
        }

        @keyframes ob-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }

        /* Join button */
        .ob-join-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--accent);
          color: #0A0A0A;
          font-weight: 700;
          font-size: 14px;
          padding: 12px 22px;
          border-radius: 8px;
          text-decoration: none;
          transition: opacity 0.15s;
          white-space: nowrap;
        }

        .ob-join-btn:hover {
          opacity: 0.85;
        }

        .ob-card-join-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--accent);
          text-decoration: none;
          margin-top: auto;
          padding-top: 4px;
          transition: gap 0.15s;
        }

        .ob-card-join-btn:hover {
          gap: 10px;
        }

        /* ── Bottom strip ── */
        .ob-bottom {
          border-top: 1px solid var(--border);
          max-width: 960px;
          margin: 0 auto;
          padding: 40px 24px 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .ob-bottom-note {
          font-size: 14px;
          color: var(--text-muted);
        }

        .ob-bottom-note a {
          color: var(--accent);
          text-decoration: none;
          font-weight: 500;
        }

        .ob-bottom-note a:hover {
          text-decoration: underline;
        }

        .ob-social-links {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .ob-social-link {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--text-dim);
          text-decoration: none;
          transition: color 0.15s;
        }

        .ob-social-link:hover {
          color: var(--text-muted);
        }

        /* ── Responsive ── */
        @media (max-width: 640px) {
          .ob-hero {
            padding: 64px 20px 48px;
          }

          .ob-featured-card {
            flex-direction: column;
            align-items: flex-start;
            padding: 28px 24px;
          }

          .ob-cards-grid {
            grid-template-columns: 1fr;
          }

          .ob-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ob-pulse-dot {
            animation: none;
          }
          .ob-featured-card,
          .ob-card,
          .ob-hero-cta,
          .ob-join-btn {
            transition: none;
          }
        }
      `}</style>

            <main className="ob-join-page">

                {/* ── Hero ── */}
                <section className="ob-hero">
                    <div className="ob-eyebrow">
                        <span className="ob-eyebrow-dot" />
                        Free community
                    </div>
                    <h1 className="ob-hero-title">
                        Find your<br />
                        <span>people.</span>
                    </h1>
                    <p className="ob-hero-sub">
                        Open Box is a free Discord community for developers, builders, gamers, and students. Pick a server and jump in.
                    </p>
                    <a
                        href={featured.invite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ob-hero-cta"
                    >
                        <DiscordIcon size={18} />
                        Join Open Box
                    </a>
                </section>

                {/* ── Servers ── */}
                <section className="ob-servers">
                    <p className="ob-section-label">Choose your server</p>

                    {/* Featured — Junction */}
                    <a
                        href={featured.invite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ob-featured-card"
                    >
                        <div className="ob-featured-left">
                            <div
                                className="ob-tag"
                                style={{
                                    backgroundColor: `${featured.tagColor}15`,
                                    color: featured.tagColor,
                                }}
                            >
                                <span className="ob-tag-dot" />
                                {featured.tag}
                            </div>
                            <div className="ob-server-name">{featured.name}</div>
                            <p className="ob-server-desc">{featured.description}</p>
                            {featured.id && (
                                <div style={{ marginTop: '12px' }}>
                                    <MemberCount id={featured.id} />
                                </div>
                            )}
                        </div>
                        <div className="ob-featured-right">
                            <span className="ob-join-btn">
                                <DiscordIcon size={16} />
                                Join server
                            </span>
                        </div>
                    </a>

                    {/* Rest — 2x2 grid */}
                    <div className="ob-cards-grid">
                        {rest.map(server => (
                            <a
                                key={server.slug}
                                href={server.invite}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ob-card"
                                style={{
                                    borderColor: server.status ? '#2a2a2a' : undefined,
                                }}
                            >
                                {server.status && (
                                    <span className="ob-status">{server.status}</span>
                                )}
                                <div
                                    className="ob-tag"
                                    style={{
                                        backgroundColor: `${server.tagColor}15`,
                                        color: server.tagColor,
                                    }}
                                >
                                    <span className="ob-tag-dot" />
                                    {server.tag}
                                </div>
                                <div className="ob-server-name">{server.name}</div>
                                <p className="ob-server-desc">{server.description}</p>
                                {server.id && <MemberCount id={server.id} />}
                                <span className="ob-card-join-btn">
                                    Join server <ArrowIcon />
                                </span>
                            </a>
                        ))}
                    </div>
                </section>

                {/* ── Bottom strip ── */}
                <div className="ob-bottom">
                    <p className="ob-bottom-note">
                        Not sure where to start? Join{' '}
                        <a href={featured.invite} target="_blank" rel="noopener noreferrer">
                            OB Junction
                        </a>{' '}
                        first. Or{' '}
                        <Link href="/docs/getting-started">
                            read the getting started guide.
                        </Link>
                    </p>
                    <div className="ob-social-links">
                        <a
                            href="https://instagram.com/openboxcomm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ob-social-link"
                        >
                            Instagram
                        </a>
                        <a
                            href="https://youtube.com/@openboxcomm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ob-social-link"
                        >
                            YouTube
                        </a>
                        <a
                            href="https://x.com/openboxcomm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ob-social-link"
                        >
                            X
                        </a>
                    </div>
                </div>

            </main>
        </>
    )
}
