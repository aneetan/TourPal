import axios from "axios"

// --------------------------------- Place ---------------------------------
export const addPlace = async (data) => {
    await axios.post(`http://localhost:3000/places`, data)
}

export const getAllPlaces = () => {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:3000/places')
        .then(function (response) {
            resolve(response.data);
        })
        .catch(function (error) {
            reject(error);
        });
    })
}

export const updatePlace = async (id, data) => {
    await axios.patch(`http://localhost:3000/places/${id}`, data)
}

export const deletePlace = async (id, data) => {
    await axios.delete(`http://localhost:3000/places/${id}`, data)  
}

export const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        axios.get("http://localhost:3000/users")
        .then(function (response){
            resolve(response.data)
        })
        .catch(function (error){
            reject(error)
        })
    })
}

export const deleteUser = async(id, data) => {
    await axios.delete(`http://localhost:3000/users/${id}`, data)
}

export const getAllGuides = () => {
    return new Promise((resolve, reject) => {
        axios.get("http://localhost:3000/guides")
        .then(function (response){
            resolve(response.data)
        })
        .catch(function (error){
            reject(error)
        })
    })
}

export const deleteGuide = async(id, data) => {
    await axios.delete(`http://localhost:3000/guides/${id}`, data)
}

// ------------------------- Authenticate ------------------------------
export const authenticateUser = async (email, password) => {
    const response= await axios.get(`http://localhost:3000/users/?email=${email}&password=${password}`)
    if (response.data.length === 0) {
        return null;
      }
    return response.data[0];
}

export const authenticateGuide = async(email, password) => {
    const response = await axios.get(`http://localhost:3000/guides/?personalDetails.email=${email}&personalDetails.password=${password}`);
     
    return response.data[0] || null;
}

export const addMessages = async(data) => {
    await axios.post("http://localhost:3000/messages", data)
}

export const getAllMessages = () => {
    return new Promise((resolve, reject) => {
        axios.get("http://localhost:3000/messages")
        .then(function (response){
            resolve(response.data)
        })
        .catch(function (error){
            reject(error)
        })
    })
}

export const addReview = async(data) => {
    await axios.post("http://localhost:3000/reviews", data)
}

export const deleteReview = async(id, data) => {
    await axios.delete(`http://localhost:3000/reviews/${id}`, data)
}

export const getAllReviews = () => {
    return new Promise((resolve, reject) => {
        axios.get("http://localhost:3000/reviews")
        .then(function (response){
            resolve(response.data)
        })
        .catch(function (error){
            reject(error)
        })
    })
}

