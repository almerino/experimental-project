"use client"

import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"

import Reactor from "@/ui/components/reactor/Reactor"

type Comment = {
  avatarUrl: string
  date: string
  text: string
  userName: string
}

type Position = {
  x: number
  y: number
}

type Reactor = {
  comments: Comment[]
  id: string
  path: Path2D
  position: Position
}

type Reactors = {
  [key: string]: Reactor
}

const ReactorWrapper = React.forwardRef((props, ref) => {
  const [reactors, setReactors] = useState<Reactors>({})
  const [reactor, setReactor] = useState(false)
  const [isOpen, setOpen] = useState(false)

  const handleClickInside = (event: MouseEvent) => {
    if (isOpen) {
      setOpen(false)
      return
    }
    const ctx = ref?.current.getContext("2d")

    if (ctx) {
      const x = event.pageX - 20
      const y = event.pageY - 20
      const width = 40
      const height = 40
      const path = new Path2D()
      path.rect(x, y, width, height)

      const reactor = Object.values(reactors).find((reactor) =>
        ctx.isPointInPath(reactor.path, event.pageX, event.pageY)
      )

      if (reactor) {
        setOpen(true)
        setReactor(reactor)
      } else {
        const reactorId = uuidv4()
        const newReactor = {
          id: reactorId,
          path,
          x,
          y,
          comments: [],
        }

        setReactors((prevReactors) => ({
          ...prevReactors,
          [reactorId]: newReactor,
        }))

        requestAnimationFrame(() => {
          const img = new Image(40, 40) // Create new img element

          img.src = "https://ui-avatars.com/api/?rounded=true"
          img.onload = () => {
            ctx.drawImage(img, x, y, 40, 40)
          }

          setReactor(newReactor)
          setOpen(true)
        })
      }
    }
  }

  const addComment = (reactorId: string) => (comment: Comment) => {
    setReactors((prevReactors) => ({
      ...prevReactors,
      [reactorId]: {
        ...prevReactors[reactorId],
        comments: [...prevReactors[reactorId].comments, comment],
      },
    }))

    setReactor((prevReactor) => ({
      ...prevReactor,
      comments: [...prevReactor.comments, comment],
    }))
  }

  return (
    <div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-slate-700 text-center text-3xl">
        <h1>Welcome to this wonderful experiment!</h1>
        <h2>Click anywhere to add your comments</h2>
      </div>
      <canvas ref={ref} onClick={handleClickInside}></canvas>
      {isOpen && (
        <div
          className="absolute"
          style={{ top: reactor.y + 20, left: reactor.x + 20 }}
        >
          <Reactor
            comments={reactor.comments}
            leaveComment={addComment(reactor.id)}
          />
        </div>
      )}
    </div>
  )
})

ReactorWrapper.displayName = "ReactorWrapper"

export default ReactorWrapper
