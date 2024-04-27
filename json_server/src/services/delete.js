import axios from "axios"
const API_URL = import.meta.env.VITE_API_URL;

export const deleteData = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`)
    return response.data
}