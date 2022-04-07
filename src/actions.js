export function Add(data) {
    return { type: "ADD", payload: data }
}

export function Delete(id) {
    return { type: "DELETE", payload: id }
}