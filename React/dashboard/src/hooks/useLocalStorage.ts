import { useCallback, useEffect, useState } from "react"

export const useLocalStorage = (key: string) => {
    const [localStorageData, setLocalStorageData] = useState(JSON.parse(localStorage.getItem(key) || 'null'));

    const setLocalStorageItem = useCallback((data: any) => {
        localStorage.setItem(key, JSON.stringify(data))
    }, [key]);

    useEffect(() => {
        console.log("effect")
        setLocalStorageItem(localStorageData);
    }, [localStorageData, setLocalStorageItem]);

    return [localStorageData, setLocalStorageData, setLocalStorageItem];
}