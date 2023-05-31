import axios from 'axios';

const client=axios.create({
    baseURL:`http://jsonplaceholder.typicode.com/`,
})
client.interceptors.request.use((req)=>{
    console.log(`${req.url} started at ${new Date().toLocaleTimeString()}`);
    return req;
})
export default client