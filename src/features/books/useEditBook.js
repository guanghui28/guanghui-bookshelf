import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditBook as createEditBookApi } from "../../api/apiBook";
import toast from "react-hot-toast";

export function useEditBook() {
    const queryClient = useQueryClient();
    const { mutate: editBook, isLoading: isEditing } = useMutation({
        mutationFn: ({ bookToEdit, id }) => createEditBookApi(bookToEdit, id),
        onSuccess: () => {
            toast.success("Book has been edited successfully");
            queryClient.invalidateQueries({
                queryKey: ["books"],
            });
        },
        onError: (err) => toast.error(err.message),
    });
    return { editBook, isEditing };
}
