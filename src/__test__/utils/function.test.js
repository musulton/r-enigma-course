import {onChangeData, onChangeText, onChangeFile} from "../../utils/function";

describe("function utils", () => {
    const mockEvent = {
        target: {
            files: [
                { filename: "filename" }
            ],
            value: "value"
        }
    }

    test("onChangeText", () => {
        const mockSetState = jest.fn()

        onChangeText(mockSetState)(mockEvent)

        expect(mockSetState).toHaveBeenCalledWith(mockEvent.target.value)
    })

    test("onChangeFile", () => {
        const mockSetState = jest.fn()

        onChangeFile(mockSetState)(mockEvent)

        expect(mockSetState).toHaveBeenCalledWith(mockEvent.target.files[0])
    })

    test("onChangeData", () => {
        const mockSetState = jest.fn()

        onChangeData("name", mockSetState)(mockEvent)

        expect(mockSetState).toHaveBeenCalledWith(expect.any(Function))
    })
})
