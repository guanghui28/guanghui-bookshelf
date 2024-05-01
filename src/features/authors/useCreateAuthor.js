import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditAuthor as createEditAuthorApi } from "../../api/apiAuthor";
import toast from "react-hot-toast";

export function useCreateAuthor() {
    const queryClient = useQueryClient();
    const { isPending: isCreating, mutate: createAuthor } = useMutation({
        mutationFn: createEditAuthorApi,
        onSuccess: () => {
            toast.success("Create new author successfully");
            queryClient.invalidateQueries({
                queryKey: ["authors"],
            });
        },
        onError: (err) => toast.error(err.message),
    });
    return { isCreating, createAuthor };
}
