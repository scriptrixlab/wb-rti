import axios from "axios";

export const createQuery = async (query) => {
    try {
        const res = await axios.post('/api/create/query', query)
        return res.data
    } catch (error) {
        return error.response?.data
    }


    // return await fetch(`/api/create/query`, {
    //     method: 'POST',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type' : 'multipart/form-data'
    //         // Authorization:`Bearer ${token}`
    //     },
    //     body: query
    // })
    //     .then(response => {
    //         return response.json();
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
};