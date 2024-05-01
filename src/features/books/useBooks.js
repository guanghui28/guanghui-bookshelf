import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllBooks } from "../../api/apiBook";
import { useSearchParams } from "react-router-dom";

export function useBooks() {
    const queryClient = useQueryClient();
    const [searchParams] = useSearchParams();

    // 1. filter
    const filterValues = searchParams.get("genres");
    const filter =
        !filterValues || filterValues === "all"
            ? null
            : { field: "genre", value: filterValues };

    // 2. sort
    const sortByRaw = searchParams.get("SortBy") || "title-asc";
    const [field, direction] = sortByRaw.split("-");
    const sortBy = { field, direction };

    // 3. page
    const page = !searchParams.get("page")
        ? 1
        : Number(searchParams.get("page"));

    // QUERY
    const {
        isLoading,
        data: { data: books, count } = {},
        error,
    } = useQuery({
        queryKey: ["books", page, filter, sortBy],
        queryFn: () => getAllBooks({ page, filter, sortBy }),
    });

    // PRE-FETCHING
    if (page + 1 <= count) {
        queryClient.prefetchQuery({
            queryKey: ["books", page + 1, filter, sortBy],
            queryFn: () => getAllBooks({ page: page + 1, filter, sortBy }),
        });
    }

    if (page - 1 >= count) {
        queryClient.prefetchQuery({
            queryKey: ["books", page - 1, filter, sortBy],
            queryFn: () => getAllBooks({ page: page - 1, filter, sortBy }),
        });
    }

    return { isLoading, books, count, error };
}
