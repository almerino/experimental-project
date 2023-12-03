import { render, screen } from "@testing-library/react"

import Page from "./page"
import "@testing-library/jest-dom"

describe("Home Page", () => {
  it("renders a title", () => {
    render(<Page />)
    const heading = screen.getByRole("heading", {
      name: "Welcome to this fun experience!",
    })
    expect(heading).toBeInTheDocument()
  })
})
