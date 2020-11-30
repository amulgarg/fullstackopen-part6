import axios from 'axios'

const baseUrl = 'http://localhost:3003/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const createNew = async (anectode) => {
  const response = await axios.post(baseUrl, asObject(anectode));
  return response.data
}

const update = async (anectode) => {
  const response = await axios.put(`${baseUrl}/${anectode.id}`, anectode);
  return response.data
}

export default { getAll, createNew, update }