import { useParams } from "react-router-dom";
import { getBookById } from "../../api/apiBook";
import { useQuery } from "@tanstack/react-query";

export function useBook() {
    const { bookId } = useParams();
    const {
        isLoading,
        data: book,
        error,
    } = useQuery({
        queryKey: ["book"],
        queryFn: () => getBookById(bookId),
    });

    return { isLoading, book, error };
}
