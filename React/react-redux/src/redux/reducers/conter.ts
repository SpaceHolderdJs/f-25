import { ReduxActionInterface } from "../types";

export const counterReducer = (counter: number = 0, action: ReduxActionInterface): number => {
    switch (action.type) {
        case "INCREMENT_COUNTER":
            return counter + 1; // immutable

        case "DECREMENT_COUNTER":
            return counter - 1;

        case "UPDATE_COUNTER":
            return action.payload;

        default:
            return counter;
    }
}

