import {renderHook, waitFor} from "@testing-library/react";

import useQuery from "../../hooks/useQuery";

describe("useQuery", () => {
    const mockParams = { page: 1, onSuccess: jest.fn() }

    it("should return initial value", () => {
        const { result } = renderHook(() => useQuery(jest.fn(), mockParams))
        const {loading, error, data, refetch} = result.current

        expect(loading).toBe(true)
        expect(error).toBe(false)
        expect(data).toStrictEqual([])
        expect(refetch).toStrictEqual(expect.any(Function))
    })

    it("should initially return true then false", async () => {
        const { result } = renderHook(() => useQuery(jest.fn(), mockParams))
        const { loading } = result.current

        expect(loading).toBe(true)

        await waitFor(() => {
            const {loading} = result.current

            expect(loading).toBe(false)
        })
    })

    it("should return data", async () => {
        const mockedData = [{ title: "test" }]
        const mockQuery = jest.fn().mockResolvedValue({data: mockedData})
        const { result } = renderHook(() => useQuery(mockQuery, mockParams))

        await waitFor(() => {
            expect(result.current).toEqual({
                error: false,
                loading: false,
                data: mockedData,
                refetch: expect.any(Function)
            })
        })

        expect(mockParams.onSuccess).toHaveBeenCalledWith(result.current.data)
    })

    it("should return true on error state when fail fetch data", async () => {
        const mockedError = new Error("mocked error");
        const mockQuery = jest.fn().mockRejectedValue(mockedError)
        const { result } = renderHook(() => useQuery(mockQuery, mockParams));

        await waitFor(() => {
            const { error } = result.current;
            expect(error).toBe(true);
        });
    });
})
