import { BASE_URL } from '@/constants'

export const getMoviesList = async ({page, size, catagory, searchText}) => {
  console.log(page, size, catagory, searchText)
  const res = await fetch(`${BASE_URL}/movie/?page=${page}&limit=${size}&catagory=${catagory}&searchText=${searchText}`)
  const result = await res.json()
  console.log(result)
  return result
}

export const getHint = async (searchText) => {
  const result = await fetch(`${BASE_URL}/movie/hint?searchText=${searchText}`)
  const data = await result.json()
  return data
}

export const getMovieScore = async () => {
  
}
