export const createOthers = async (others) => {
    return await fetch(`/api/create/others`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            // Authorization:`Bearer ${token}`
        },
        body: JSON.stringify(others)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};