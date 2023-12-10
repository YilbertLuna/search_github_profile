const API_URL = "https://api.github.com/users"

export async function getDataIndoUsera(user) {
    try {
        const res = await fetch(`${API_URL}/${user}`)
        const data = await res.json()
        console.log(res.status)
        console.log(data)
        if(res.status === 200) return data
        // return data
    } catch (error) {
        console.log(error)
    }
}