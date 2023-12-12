import { BASE_URL } from '@/constants'

export const getMoviesList = async ({page, size, catagory}) => {
  const res = await fetch(catagory
    ?`${BASE_URL}/movie/?page=${page}&limit=${size}&catagory=${catagory}`
    :`${BASE_URL}/movie?page=${page}&limit=${size}`)
  const result = await res.json()
  return result
}

export const getHint = async (searchText) => {
  const result = await fetch(`${BASE_URL}/movie/hint?${searchText}`)
  const data = await result.json()
  return data
}