export const createFees = async (fees) => {
    return await fetch(`/api/create/fees`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            // Authorization:`Bearer ${token}`
        },
        body: JSON.stringify(fees)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};