import axios from 'axios';
const users = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com" ,
  });
export default users;