"use client"

import { useEffect, useRef } from "react"

import ReactorWrapper from "@/ui/components/reactor/ReactorWrapper"

function draw(ctx) {
  const canvas = ctx.canvas

  const r = 2
  const cw = 20
  const ch = 20

  for (let x = 20; x < canvas.width; x += cw) {
    for (let y = 20; y < canvas.height; y += ch) {
      ctx.fillStyle = "#ddd"
      ctx.fillRect(x - r / 2, y - r / 2, r, 0.5)
    }
  }

  requestAnimationFrame(() => draw(ctx))
}

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>()

  useEffect(() => {
    const ctx = canvasRef?.current.getContext("2d")
    requestAnimationFrame(() => draw(ctx))

    const handleResize = (e) => {
      ctx.canvas.height = window.innerHeight
      ctx.canvas.width = window.innerWidth
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <main className="h-screen w-screen bg-white">
      <ReactorWrapper ref={canvasRef} />
    </main>
  )
}
