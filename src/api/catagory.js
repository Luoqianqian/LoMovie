import { BASE_URL } from '@/constants'
/**
 * 获取分类列表
 */
export const getCatagories = async () => { 
  const result = await fetch(`${BASE_URL}/catagories`)
  const data = result.json()
  return data
}