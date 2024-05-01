import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditBook as createEditBookApi } from "../../api/apiBook";
import toast from "react-hot-toast";

export function useCreateBook() {
    const queryClient = useQueryClient();

    const { mutate: createBook, isPending: isCreating } = useMutation({
        mutationFn: createEditBookApi,
        onSuccess: () => {
            toast.success("New book successfully created");
            queryClient.invalidateQueries({
                queryKey: ["books"],
            });
        },
        onError: (err) => toast.error(err.message),
    });
    return { createBook, isCreating };
}
