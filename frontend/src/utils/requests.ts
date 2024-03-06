import { apiRequest } from "./api"

//Requests
export async function getBooks() {
    try {
      const res = await apiRequest.get(
        `api/books/`,
      )
      return res.data
    } catch (error) {
      return error
    }
  }