import { SAVE_NUMBER, DELETE_NUMBER } from '../actions/types'

export const saveNumber = (num) => {
    return {
        type: SAVE_NUMBER,
        payload: num
    };
};

export const deleteNumber = (id) => {
    return {
        type: DELETE_NUMBER,
        payload: id
    };
};