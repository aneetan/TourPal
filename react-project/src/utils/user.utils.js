import axios from "axios"

export const addPlace = async (data) => {
    await axios.post(`http://localhost:3000/places`, data)
}

export const updatePlace = async (id, data) => {
    await axios.patch(`http://localhost:3000/places/${id}`, data)
}

export const deletePlace = async (id, data) => {
    await axios.delete(`http://localhost:3000/places/${id}`, data)
}

// export const authenticateUser = async (email, password) => {
//     const response= await axios.get(`http://localhost:3000/users/?email=${email}&password=${password}`)
//     if (response.data.length === 0) {
//         return null;
//       }
//     return response.data[0];
// }

