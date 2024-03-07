import { BookElementProps } from "@/components/molecules/BookElement"
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

export async function createBook(bookData: BookElementProps) {
  try {
    const res = await apiRequest.post(
      `api/books/`,
      {...bookData}
    )
    return res.data
  } catch (error) {
    return error
  }
}

export async function editBook(bookData: BookElementProps) {
  try {
    const res = await apiRequest.put(
      `api/books/${bookData.id}/`,
      {...bookData}
    )
    return res.data
  } catch (error) {
    return error
  }
}