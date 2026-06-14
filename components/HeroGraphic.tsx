'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'

export function HeroGraphic() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    const updateSize = () => {
      if (!containerRef.current) return
      const width = Math.min(window.innerWidth - 32, 400)
      renderer.setSize(width, width)
      camera.aspect = 1
      camera.updateProjectionMatrix()
    }

    updateSize()
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)

    // Geometry
    const geometry = new THREE.IcosahedronGeometry(1.5, 1)
    const material = new THREE.MeshPhongMaterial({
      color: 0x22d3ee,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    })
    const icosahedron = new THREE.Mesh(geometry, material)
    scene.add(icosahedron)

    const coreGeometry = new THREE.IcosahedronGeometry(0.8, 0)
    const coreMaterial = new THREE.MeshPhongMaterial({
      color: 0xd946ef,
      emissive: 0xd946ef,
      emissiveIntensity: 0.5,
    })
    const core = new THREE.Mesh(coreGeometry, coreMaterial)
    scene.add(core)

    // Lights
    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(5, 5, 5)
    scene.add(light)
    const ambientLight = new THREE.AmbientLight(0x404040)
    scene.add(ambientLight)

    camera.position.z = 4

    // GSAP Animation
    gsap.to(icosahedron.rotation, {
      y: Math.PI * 2,
      duration: 10,
      repeat: -1,
      ease: "none",
    })

    gsap.to(icosahedron.scale, {
      x: 1.2,
      y: 1.2,
      z: 1.2,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    })

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate)
      core.rotation.x += 0.01
      core.rotation.z += 0.01
      renderer.render(scene, camera)
    }
    animate()

    // Handle Resize
    window.addEventListener('resize', updateSize)

    return () => {
      window.removeEventListener('resize', updateSize)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      geometry.dispose()
      material.dispose()
      coreGeometry.dispose()
      coreMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div className="relative flex h-[320px] w-[320px] items-center justify-center sm:h-[400px] sm:w-[400px]">
      <div ref={containerRef} className="z-10 h-full w-full" />
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="h-[250px] w-[250px] animate-pulse rounded-full bg-cyan-500/10 blur-[80px]" />
      </div>
    </div>
  )
}
