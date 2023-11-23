import axios from "axios"

export async function getUserData() {
    const response = await axios.get(`http://localhost:3000/api/users`)
    if (response) {
        return response.data
    }else{
        throw new Error("Userdata get faild")
    }
}
