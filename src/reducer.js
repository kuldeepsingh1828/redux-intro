import { users } from './users'
const intialState = users
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case 'ADD': state = [...state, action.payload]; break;
        case 'DELETE': state = state - 1; break;
    }
    return state;
}
export default reducer;