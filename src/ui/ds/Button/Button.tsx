import { ButtonProps } from "./Button.types"

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="mt-5 text-bg-blue-600 hover:text-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      {...props}
    >
      {children}
    </button>
  )
}
