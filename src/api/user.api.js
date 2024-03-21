async function getUsers(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users/")
    const data = await res.json()
    return data;
}
export default getUsers;