import { useEffect, useState } from "react";

export function useFetch(url, deps = []) {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true)
                const res = await fetch(url);
                const data = await res.json();
                setData(data)
            } catch (err) {
                setError(err.message)
                console.error(error.message);
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [...deps])

    return { data: data, error: error, isLoading: isLoading }
}