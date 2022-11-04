import { useState, useEffect } from "react"
import axios from "axios"
import { API } from "../config"

export default function useGetCategories() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    async function getCategories() {
      let response = await axios.get(`${API}/categories`)
      setCategories(response.data)
    }
    getCategories()
  }, [])
  return categories
}
