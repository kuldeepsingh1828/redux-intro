const intialState = 12
const reducer = (state = intialState, action) => {
    console.log(action.type)
    if (action.type === "UP") {
        state = state + 1;
    } else if (action.type == "DOWN") {
        state = state - 1;
    }
    return state;
}
export default reducer;