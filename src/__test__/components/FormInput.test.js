import FormInput from "../../components/FormInput";
import {render} from "@testing-library/react";

describe("FormInput component", () => {
    const mockProps = {
        label: "Label",
        placeholder: "Placeholder",
        value: "value",
        onChange: jest.fn(),
        disabled: false
    }

    test("should render textarea type correctly", () => {
        const {asFragment} = render(<FormInput {...mockProps} type="textarea" />)

        expect(asFragment()).toMatchSnapshot()
    })

    test("should render file type correctly", () => {
        const {asFragment} = render(<FormInput {...mockProps} type="file" />)

        expect(asFragment()).toMatchSnapshot()
    })

    test("should render text type correctly", () => {
        const {asFragment} = render(<FormInput {...mockProps} type="text" />)

        expect(asFragment()).toMatchSnapshot()
    })
})
