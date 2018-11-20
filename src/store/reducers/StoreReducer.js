import { SAVE_NUMBER, DELETE_NUMBER } from '../actions/types';

const INITIAL_STATE = {
    results: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SAVE_NUMBER:
            const uniqueID = Date.now();
            return {
                ...state,
                results: state.results.concat({ id: uniqueID, val: action.payload })
            };
        case DELETE_NUMBER:
            const updatedArray = state.results.filter(result => result.id !== action.payload)
            return {
                ...state,
                results: updatedArray
            };

        default:
            return state;
    }
}

