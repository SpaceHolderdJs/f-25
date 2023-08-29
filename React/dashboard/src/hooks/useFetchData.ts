import { useState, useEffect } from "react";

export const useFetchData = <TData>(url: string, options?: RequestInit) => {
    const [data, setData] = useState<TData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(url, options)
            .then(response => response.json())
            .then(responseData => {
                setData(responseData)
            })
            .catch(() => {
                setIsLoading(false)
                setData(null)
            })
    }, [url, options])

    return { data, isLoading };
}