import { render, screen } from "@testing-library/react"

import SiveNav from "./SideNav"
import "@testing-library/jest-dom"

describe("SiveNav", () => {
  it("contains a link to the home page", () => {
    render(<SiveNav />)
    const link = screen.getByRole("link", {
      name: "logo",
    })
    expect(link).toBeInTheDocument()
  })
})
