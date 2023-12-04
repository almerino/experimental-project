import Image from "next/image"

export default function ReactorAvatar({ position }) {
  const left = position.x - 60
  const top = position.y - 60

  return (
    <div className="absolute min-w-[60px] min-h-[60px]" style={{ top, left }}>
      <Image
        width="60"
        height="60"
        src="https://ui-avatars.com/api/?rounded=true"
        alt="avatar"
        className="rounded-full w-10 h-10 min-w-[60px] min-h-[60px]"
      />
    </div>
  )
}
