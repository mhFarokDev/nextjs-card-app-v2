import axios from "axios"

// get all user
export async function getUserData() {
    const response = await axios.get(`api/users`)
    if (response) {
        return response.data
    }else{
        throw new Error("Userdata get faild")
    }
}


// add new user
export async function createUser(data){
    const response = await axios.post(`api/users`, data)
    return response.data;
}

// delete user
export async function deleteUser(id) {

    try {
        const response = await axios.delete(`api/users?id=${id}`)
        return response.data
    } catch (error) {
        throw new Error("delete Invalid!")
    }
}


// find fingle user
export async function findSingleUser(id){
    try {
        const response = await axios.get(`api/users?id=${id}`)
        return response.data;
    } catch (error) {
        throw new Error("single data not found!")
    }
}


// update user
export async function updateUser(data) {
    try {
        const response = await axios.put(`api/users`, data)
        return response.data
    } catch (error) {
        throw new Error("user data not updated.")
    }
}