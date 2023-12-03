import Image from "next/image"

export default function ReactorAvatar({ position }) {
  const left = position.x - 60
  const top = position.y - 60

  return (
    <div
      className="absolute px-6 py-4 min-w-[60px] min-h-[60px]"
      style={{ top, left }}
    >
      <Image
        width="60"
        height="60"
        src="https://i.pravatar.cc/150?img=22"
        alt="avatar"
        className="rounded-full w-10 h-10 min-w-[60px] min-h-[60px]"
      />
    </div>
  )
}
