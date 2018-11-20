import { INCREMENT, DECREMENT, ADD, SUBTRACT, RESET } from './types'

export const increment = () => {
    return {
        type: INCREMENT
    };
};

export const decrement = () => {

    return {
        type: DECREMENT
    };
};

export const add = (num) => {

    return {
        type: ADD,
        payload: num
    };
};

export const subtract = (num) => {

    return {
        type: SUBTRACT,
        payload: num
    };
};

export const reset = () => {

    return {
        type: RESET
    };
};