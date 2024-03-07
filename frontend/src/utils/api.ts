import axios from "axios"

export const apiRoute = 'https://cd73-2804-29b8-5006-1d3d-9a83-89ff-fece-cccb.ngrok-free.app/'


export const apiRequest = axios.create({
    baseURL: apiRoute,
    headers: {'ngrok-skip-browser-warning': '48373'}
})




