import { useEffect, useState } from "react";

const useQuery = (query, opts) => {
    const [data, setData] = useState([])
    const [reload, setReload] = useState(true)
    const [error, setError] = useState(false)

    const refetch = () => {
        setReload(true)
    }

    useEffect(() => {
        refetch()
    }, [opts?.params])

    useEffect(() => {
        const fetchQuery = async () => {
            try {
                setReload(true)
                const response = await query(opts?.params)
                setData(response.data)
                opts?.onSuccess(response.data)
            } catch (error) {
                setError(true)
            } finally {
                setReload(false)
            }
        }

        if (reload) {
            fetchQuery()
        }
    }, [reload]);

    return {
        data, loading: reload, error, refetch
    }
}

export default useQuery
