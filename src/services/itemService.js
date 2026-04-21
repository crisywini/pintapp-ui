import api from "./api";


export const getItems = () => api.get("/items").then(r => r.data.items)

export const addItem = (data) => api.post("/items", data).then(r => r.data)

export const getItemById = (id) => api.get(`/items/${id}`).then(r => r.data)

export const deleteItemById = (id) => api.delete(`/items/${id}`).then(r => r.data)

export const updateItem = (id, data) => api.put(`/items/${id}`, data).then(r => r.data)