import Link from "next/link"
import Image from "next/image"

import Divider from "@/ui/ds/Divider/Divider"

export default function SideNav() {
  return (
    <div className="bg-slate-700 flex md:h-full flex-col px-3 py-4 md:px-2">
      <Link className="mb-2 flex" href="/">
        <div className="w-32 text-white">
          <Image
            width="120"
            height="40"
            src="logo.svg"
            alt="logo"
            className="fill-white"
          />
        </div>
      </Link>

      <Divider />
    </div>
  )
}
