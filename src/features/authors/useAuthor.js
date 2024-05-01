import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getAuthorById } from "../../api/apiAuthor";

export function useAuthor() {
    const { authorId } = useParams();

    const {
        isLoading,
        error,
        data: author,
    } = useQuery({
        queryKey: ["author"],
        queryFn: () => getAuthorById(authorId),
    });

    return { isLoading, error, author };
}
