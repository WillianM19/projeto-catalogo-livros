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

export async function getBookDetail(bookId: number) {
  try {
    const res = await apiRequest.get(
      `api/books/${bookId}/`,
    )
    return res.data
  } catch (error) {
    return error
  }
}

export async function deleteBook(bookId: number) {
  try {
    const res = await apiRequest.delete(
      `api/books/${bookId}/`,
    )
    return res.data
  } catch (error) {
    return error
  }
}