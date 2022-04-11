import axios from "axios"

export const getUsers = async () => {
    let response = await axios.get('/users');
    let users = response.data.users;
    return users;
}

export const insertUser = async (user) => {
    let response = await axios.post('/users/insert', { user });
    let update = response.data.update;
    return update;
}
