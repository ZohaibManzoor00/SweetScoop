import { fetchHandler, getPostOptions, getPatchOptions } from "../utils/fetchUtils";

const baseUrl = '/api/users';

export const createUser = async ({ username, password }) => (
  fetchHandler(baseUrl, getPostOptions({ username, password }))
);

// eating errors here for simplicity
export const getAllUsers = async () => {
  const [users] = await fetchHandler(baseUrl);
  return users || [];
};

export const getUser = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const updateUsername = async ({ id, username }) => (
  fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, username }))
);

export const getUsers = async () => {
  const [users] = await fetchHandler(baseUrl)
  return users 
}

export const getFeed = async () => {
  const res = fetchHandler(`/api/posts?page=1&limit=2`)
  return res
}
