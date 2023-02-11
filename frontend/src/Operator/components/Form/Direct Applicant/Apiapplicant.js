export const createApplicant = async (applicant) => {
    return await fetch(`/api/create/applicant`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            // Authorization:`Bearer ${token}`
        },
        body: JSON.stringify(applicant)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const getCaseno = () => {
    return fetch(`api/caseno/list`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};