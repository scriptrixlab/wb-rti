import { API } from "../../../../config";
export const createCaseNo = (userId=1,token,caseno) => {
    return fetch(`/api/create/caseno`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            // Authorization:`Bearer ${token}`
        },
        body: JSON.stringify(caseno)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};