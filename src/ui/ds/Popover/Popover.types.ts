import { PopoverProps as PopoverRadixProps } from "@radix-ui/react-popover"

export type PopoverProps = {
  align?: "center" | "start" | "end" | undefined
  className?: string
  sideOffset?: number
  title?: string
  style?: object
} & PopoverRadixProps
