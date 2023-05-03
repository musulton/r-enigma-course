import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Pagination from "../../components/Pagination";

describe("Pagination component", () => {
    it("should render Pagination correctly", () => {
        const mockProps = {
            currentPage: 1,
            totalPage: 10,
            onChangeCurrentPage: jest.fn()
        }

        const {asFragment} = render(<Pagination {...mockProps} />)

        expect(asFragment()).toMatchSnapshot();
    })

    it("should call onChangeCurrentPage with params when prev button is click and current page is not first page", () => {
        const mockOnChangeCurrentPage = jest.fn()
        const mockProps = {
            currentPage: 2,
            totalPage: 10,
            onChangeCurrentPage: mockOnChangeCurrentPage,
        }

        render(<Pagination {...mockProps} />)
        userEvent.click(screen.getByText("Prev"))

        expect(mockOnChangeCurrentPage).toBeCalledWith(mockProps.currentPage - 1)
    })

    it("should not call onChangeCurrentPage when prev button clicked and current page is first page", () => {
        const mockOnChangeCurrentPage = jest.fn()
        const mockProps = {
            currentPage: 1,
            totalPage: 10,
            onChangeCurrentPage: mockOnChangeCurrentPage,
        }

        render(<Pagination {...mockProps} />)
        userEvent.click(screen.getByText("Prev"))

        expect(mockOnChangeCurrentPage).not.toBeCalled()
    })

    it("should call onChangeCurrentPage with params when next button is click and current page is not last page", () => {
        const mockOnChangeCurrentPage = jest.fn()
        const mockProps = {
            currentPage: 1,
            totalPage: 10,
            onChangeCurrentPage: mockOnChangeCurrentPage,
        }

        render(<Pagination {...mockProps} />)
        userEvent.click(screen.getByText("Next"))

        expect(mockOnChangeCurrentPage).toBeCalledWith(mockProps.currentPage + 1)
    })

    it("should not call onChangeCurrentPage with params when prev button is click and current page is last page", () => {
        const mockOnChangeCurrentPage = jest.fn()
        const mockProps = {
            currentPage: 2,
            totalPage: 2,
            onChangeCurrentPage: mockOnChangeCurrentPage,
        }

        render(<Pagination {...mockProps} />)
        userEvent.click(screen.getByText("Next"))

        expect(mockOnChangeCurrentPage).not.toBeCalled()
    })
})
