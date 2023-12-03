"use client"

import React, { useRef, useState } from "react"
import { v4 as uuidv4 } from "uuid"

import {
  Popover,
  PopoverTrigger,
  PopoverPortal,
  PopoverContent,
} from "@/ui/ds/Popover"
import Reactor from "@/ui/components/reactor/Reactor"
import ReactorAvatar from "@/ui/components/reactor/ReactorAvatar"

import { useOnClickOutside } from "usehooks-ts"

type Comment = {
  userName: string
  avatarUrl: string
  text: string
  date: string
}

type Position = {
  x: number
  y: number
}

type Reactor = {
  position: Position
  comments: Comment[]
  emojis: {
    [key: string]: string
  }
}

type Reactors = {
  [key: string]: Reactor
}

export default function ReactorWrapper() {
  const [reactors, setReactors] = useState<Reactors>({})
  const [isOpen, setOpen] = useState(false)

  const ref = useRef(null)

  const handleOpen = () => {
    // setOpen(true)
  }

  const handleClickOutside = (event) => {
    if (!isOpen) {
      setReactors((prevReactors) => ({
        ...prevReactors,
        [uuidv4()]: {
          position: { x: event.x, y: event.y },
          comments: [],
          emojis: {},
        },
      }))
    }
  }

  useOnClickOutside(ref, handleClickOutside)

  const addComment = (reactorId: string) => (comment: Comment) => {
    setReactors((prevReactors) => ({
      ...prevReactors,
      [reactorId]: {
        ...prevReactors[reactorId],
        comments: [...prevReactors[reactorId].comments, comment],
      },
    }))
  }

  return (
    <div ref={ref} className="pt-5 overflow-x-auto shadow-md">
      <div className="w-fit text-sm text-gray-400">
        {Object.entries(reactors).map(([reactorId, reactor]) => (
          <Popover key={reactorId}>
            <PopoverTrigger className="w-full text-left" onClick={handleOpen}>
              <ReactorAvatar position={reactor.position} />
            </PopoverTrigger>
            <PopoverPortal>
              <PopoverContent
                style={{
                  top: reactor.position.y - 60,
                  left: reactor.position.x - 60,
                }}
              >
                <Reactor
                  comments={reactor.comments}
                  leaveComment={addComment(reactorId)}
                />
              </PopoverContent>
            </PopoverPortal>
          </Popover>
        ))}
      </div>
    </div>
  )
}
