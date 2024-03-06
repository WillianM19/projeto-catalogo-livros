import axios from "axios"

const apiRoute = 'http://localhost:8000'


export const apiRequest = axios.create({
    baseURL: apiRoute,
})



