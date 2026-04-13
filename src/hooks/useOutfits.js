import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addOutfit, getOutfits, getOutfitById, updateOutfit, deleteOutfitById } from "../services/outfitService";

export function useOutfits() {
    return useQuery({
        queryKey: ["outfits"], 
        queryFn: getOutfits,
    })
}

export function useAddOutfit() {
    const qc = useQueryClient()
    return useMutation({
        mutationFn: addOutfit, 
        onSuccess: () => qc.invalidateQueries({queryKey: ["outfits"]}), 
        onError: (error) => console.error("Error while adding a new outfit", error.message),
    })
}

export function useUpdateOutfit() {
    const qc = useQueryClient()
    return useMutation({
        mutationFn: ({id, data}) => updateOutfit(id, data), 
        onSuccess: () => qc.invalidateQueries({queryKey: ["outfits"]}), 
        onError: (error) => console.error("Error while updating an outfit", error.message)
    })
}


export function useDeleteOutfitById() {
    const qc = useQueryClient()
    return useMutation({
        mutationFn: deleteOutfitById, 
        onSuccess: () => qc.invalidateQueries({queryKey: ["outfits"]}), 
        onError: (error) => console.error("Error while deleting an outfit", error.message)
    })
}

export function useOutfit(id) {
    return useQuery({
        queryKey: ["outfits", id], 
        queryFn: getOutfitById, 
        enabled: !!id
    })

}