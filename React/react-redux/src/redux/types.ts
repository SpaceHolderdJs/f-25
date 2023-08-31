import { store } from "./store";

export interface ReduxActionInterface {
    type: string; // describes action (what happenned)
    payload: any; // anything (could be passed as action data)
}

export type ReduxStoreType = typeof store;

export interface TodoInteface {
    id: number,
    title: string,
    isDone: boolean
}