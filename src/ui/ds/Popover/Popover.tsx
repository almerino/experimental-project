"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import Image from "next/image"

import { type PopoverProps } from "./Popover.types"

const Popover = PopoverPrimitive.Root
const PopoverTrigger = PopoverPrimitive.Trigger
const PopoverPortal = PopoverPrimitive.Portal
const PopoverArrow = PopoverPrimitive.Arrow
const PopoverClose = PopoverPrimitive.Close

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverProps
>(
  (
    {
      className,
      align = "center",
      title = "",
      sideOffset = 4,
      style = {},
      children,
      ...props
    },
    ref
  ) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className="text-sm text-gray-400 bg-gray-700 border border-gray-500 rounded-lg"
        style={style}
        {...props}
      >
        {title && (
          <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
          </div>
        )}
        <div className="px-3 py-2">{children}</div>

        <PopoverPrimitive.Arrow className="fill-gray-700 border-gray-500" />
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  )
)

PopoverContent.displayName = PopoverPrimitive.Content.displayName

export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverPortal,
  PopoverArrow,
  PopoverClose,
}
