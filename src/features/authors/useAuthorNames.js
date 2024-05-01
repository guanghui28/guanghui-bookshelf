import { useQuery } from "@tanstack/react-query";
import { getAllAuthorNames } from "../../api/apiAuthor";

export function useAuthorNames() {
    const { data: authors, isLoading } = useQuery({
        queryKey: ["Author's name"],
        queryFn: getAllAuthorNames,
    });

    return { isLoading, authors };
}
