import { BASE_URL } from '@/constants'
/**
 * 获取分类列表
 */
export const getCategories = async () => { 
  console.log(BASE_URL)
  const result = await fetch(`${BASE_URL}/catagories`)
  const data = result.json()
  return data
}