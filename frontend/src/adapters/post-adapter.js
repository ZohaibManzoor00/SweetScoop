import useFetch from "../hooks/useFetch"
import useInfiniteScroll from "../hooks/useInfiniteScroll"

const baseUrl = "/api/posts"

export const loadFeed = page => useFetch(`${baseUrl}?page=${page}&limit=${4}`)
export const loadInfiniteFeed = page => useInfiniteScroll(`${baseUrl}?page=${page}&limit=${4}`)
