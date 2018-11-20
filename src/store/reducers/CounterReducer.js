import { INCREMENT, DECREMENT, ADD, SUBTRACT, RESET } from '../actions/types';

const INITIAL_STATE = {
    counter: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, counter: state.counter + 1 };
        case DECREMENT:
            return { ...state, counter: state.counter - 1 };
        case ADD:
            return { ...state, counter: state.counter + +action.payload };
        case SUBTRACT:
            return { ...state, counter: state.counter - +action.payload };
        case RESET:
            return { ...state, counter: 0 };
        default:
            return state;
    }
}

