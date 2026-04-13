import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getItemById, addItem, getItems, updateItem, deleteItemById } from "../services/itemService";
import { deleteOutfitById } from "../services/outfitService";

export function useItems() {
    return useQuery({
        queryKey: ["items"], 
        queryFn: getItems,
    })
}


export function useItem(id) {
    return useQuery({
        queryKey: ["items", id], 
        queryFn: () => getItemById(id), 
        enabled: !!id,
    })
}


export function useAddItem() {
    const qc = useQueryClient()
    return useMutation({
        mutationFn: addItem, 
        onSuccess: () => {
            qc.invalidateQueries({queryKey: ["items"]})
        }, 
        onError: (error) => {
            console.error("Error while adding an item", error.message)
        }
    })
}

export function useUpdateItem(){
    const qc = useQueryClient()
    return useMutation({
        mutationFn: ({id, data}) => updateItem(id, data), 
        onSuccess: () => {
            qc.invalidateQueries({
                queryKey: ["items"],
            })
        },
        onError: (error) => {
            console.error("Error while updating an item", error.message)
        }
    })
}

export function useDeleteItem() {
    const qc = useQueryClient()
    return useMutation({
        mutationFn: deleteOutfitById, 
        onSuccess: () => {
            qc.invalidateQueries({
                queryKey: ["items"],
            })
        }, 
        onError: (error) => {
            console.error("Error while deleting an item", error.message)
        }
    })
}