import api from "./api";

export const getOutfits = () => api.get("/outfits").then(r => r.data)

export const getOutfitById = (id) => api.get(`/outfit/${id}`).then(r => r.data)

export const addOutfit = (data) => api.post("/outfits", data).then(r => r.data)

export const updateOutfit = (id, data) => api.put(`/outfits/${id}`, data).then(r => r.data)

export const deleteById = (id) => api.delete(`/outfits/${id}`).then(r => r.data)

