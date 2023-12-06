

export const useData = (id = null) => {

    const additionalData = fetch('./data.json', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }).then(res => res.json())
    return additionalData
}
