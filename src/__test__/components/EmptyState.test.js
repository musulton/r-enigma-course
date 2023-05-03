import EmptyState from "../../components/EmptyState";
import {render} from "@testing-library/react";

describe("EmptyState component", () => {
  test("should render correctly", () => {
    const {asFragment} = render(<EmptyState text="Data is empty" />)

    expect(asFragment()).toMatchSnapshot()
  })
})