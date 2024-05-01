import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditAuthor as createEditAuthorApi } from "../../api/apiAuthor";
import toast from "react-hot-toast";

export function useEditAuthor() {
    const queryClient = useQueryClient();

    const { mutate: editAuthor, isLoading: isEditing } = useMutation({
        mutationFn: ({ authorToEdit, id }) =>
            createEditAuthorApi(authorToEdit, id),
        onSuccess: () => {
            toast.success("Update author successfully");
            queryClient.invalidateQueries({
                queryKey: ["authors"],
            });
        },
        onError: (err) => toast.error(err.message),
    });

    return { editAuthor, isEditing };
}
