import StyledContainer from "../../components/StyledContainer";
import {render} from "@testing-library/react";

describe("StyledContainer component", () => {
  test("should render correctly", () => {
    const {asFragment} = render(<StyledContainer />)

    expect(asFragment()).toMatchSnapshot()
  })
})