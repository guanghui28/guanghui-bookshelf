import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllAuthors } from "../../api/apiAuthor";
import { useSearchParams } from "react-router-dom";
import { AUTHOR_PER_PAGE } from "../../utils/constants";

export function useAuthors() {
	const [searchParams] = useSearchParams();
	const queryClient = useQueryClient();
	// 1. filter
	const filterValues = searchParams.get("gender");
	const filter =
		!filterValues || filterValues === "all"
			? null
			: { field: "gender", value: filterValues };

	// 2. sortby
	const sortByRaw = searchParams.get("SortBy") || "name-asc";
	const [field, direction] = sortByRaw.split("-");
	const sortBy = { field, direction };

	// 3. page
	const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

	// QUERY
	const {
		isLoading,
		data: { data: authors, count } = {},
		error,
	} = useQuery({
		queryKey: ["authors", page, filter, sortBy],
		queryFn: () => getAllAuthors({ page, filter, sortBy }),
	});

	//PRE FETCHING
	const pageCount = Math.ceil(count / AUTHOR_PER_PAGE);
	if (page + 1 <= pageCount) {
		queryClient.prefetchQuery({
			queryKey: ["authors", page + 1, filter, sortBy],
			queryFn: () => getAllAuthors({ page: page + 1, filter, sortBy }),
		});
	}

	if (page - 1 >= pageCount) {
		queryClient.prefetchQuery({
			queryKey: ["authors", page - 1, filter, sortBy],
			queryFn: () => getAllAuthors({ page: page - 1, filter, sortBy }),
		});
	}

	return { isLoading, error, authors, count };
}
