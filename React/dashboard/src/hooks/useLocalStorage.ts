import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react"

export const useLocalStorage = <TLSData>(key: string) => {
    const [localStorageData, setLocalStorageData] = useState<TLSData>(JSON.parse(localStorage.getItem(key) || 'null'));

    const setLocalStorageItem = useCallback((data: TLSData) => {
        localStorage.setItem(key, JSON.stringify(data))
    }, [key]);

    useEffect(() => {
        console.log("effect")
        setLocalStorageItem(localStorageData);
    }, [localStorageData, setLocalStorageItem]);

    return [localStorageData, setLocalStorageData, setLocalStorageItem] as [TLSData, Dispatch<SetStateAction<TLSData>>, (data: TLSData) => void];
}