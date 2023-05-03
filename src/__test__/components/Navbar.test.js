import Navbar from "../../components/Navbar";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { removeToken } from "../../utils/token";
import { BrowserRouter } from "react-router-dom";

jest.mock("../../utils/token", () => ({
  removeToken: jest.fn()
}))

describe("Navbar component", () => {
  test("should render correctly", () => {
    const {asFragment} = render(<Navbar />, {wrapper: BrowserRouter})

    expect(asFragment()).toMatchSnapshot()
  })

  test("should call remove token when onLogout is clicked", () => {
    render(<Navbar />, {wrapper: BrowserRouter})

    const logoutBtn = screen.getByText("Logout")
    userEvent.click(logoutBtn)

    expect(removeToken).toBeCalled()
  })
})
