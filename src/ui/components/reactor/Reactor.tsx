import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

import Button from "@/ui/ds/Button/Button"
import Divider from "@/ui/ds/Divider/Divider"

const Emojis = ["👍", "👎", "👌", "❔"]

export default function Reactor({ comments, leaveComment }) {
  const [comment, setComment] = useState({
    id: uuidv4(),
    userName: "Alban Merino",
    avatarURL: "https://i.pravatar.cc/150?img=22",
    text: "",
  })

  function handleTextareaChange(
    event: Event & {
      target: HTMLTextAreaElement
    }
  ) {
    setComment((previousComment) => ({
      ...previousComment,
      date: new Date().toDateString(),
      text: event.target.value,
    }))
  }

  function handleEmojiClick(event, emoji) {
    event.preventDefault()

    leaveComment({
      ...comment,
      id: uuidv4(),
      date: new Date().toDateString(),
      text: emoji,
    })
  }

  function handleSubmit(event: Event) {
    event.preventDefault()

    leaveComment(comment)
    setComment({
      id: uuidv4(),
      userName: "Alban Merino",
      avatarURL: "https://i.pravatar.cc/150?img=22",
      text: "",
    })
  }

  return (
    <div className="min-w-[400px]">
      <div>Reactor</div>
      <Divider />

      {comments.map((comment, index) => (
        <div key={`${comment.text}-${index}`} className="p-2">
          <div className="flex">
            <div>
              <img
                width="30"
                height="30"
                src={comment.avatarURL}
                alt="avatar"
                className="rounded-full w-6 h-6 min-w-[30px] min-h-[30px]"
              />
            </div>
            <div className="flex flex-col ml-2 w-full">
              <div className="flex justify-between">
                <div>{comment.userName}</div>
                <div className="text-grey-200">{comment.date}</div>
              </div>
              <div className="pt-2">{comment.text}</div>
            </div>
          </div>
        </div>
      ))}

      <Divider />

      <form>
        {Emojis.map((emoji) => (
          <Button key={emoji} onClick={(e) => handleEmojiClick(e, emoji)}>
            <span>{emoji}</span>
          </Button>
        ))}

        <div className="flex justify-between mt-5 ">
          <img
            width="30"
            height="30"
            src="https://i.pravatar.cc/150?img=22"
            alt="avatar"
            className="rounded-full w-6 h-6 min-w-[30px] min-h-[30px]"
          />
          <textarea
            className="w-full inline-flex items-center justify-center rounded text-white bg-blue-500 ml-2"
            rows={4}
            value={comment?.text}
            onChange={handleTextareaChange}
          />
        </div>

        <button
          className="w-full p-3 mt-2 bg-white rounded text-violet-500"
          type="submit"
          onClick={handleSubmit}
        >
          Leave your comment
        </button>
      </form>
    </div>
  )
}
