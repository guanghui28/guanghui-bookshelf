import { supabase, supabaseUrl } from "./supabase";
import { BOOK_PER_PAGE } from "../utils/constants";

export async function getAllBooks({ page = 1, filter, sortBy }) {
    let query = supabase
        .from("books")
        .select("*, authors(name)", { count: "exact" });

    // 1. filter
    if (filter) {
        // Ex: filter.value: science-fiction --> Science Fiction
        const compare = filter.value
            .split("-")
            .map((word) => word[0].toUpperCase() + word.slice(1))
            .join(" ");
        query = query.eq(filter.field, compare);
    }

    // 2. sort
    if (sortBy) {
        query = query.order(sortBy.field, {
            ascending: sortBy.direction === "asc",
        });
    }

    // 3.page
    const from = (page - 1) * BOOK_PER_PAGE;
    const to = page * BOOK_PER_PAGE - 1;
    query = query.range(from, to);

    const { data, error, count } = await query;

    if (error) {
        throw new Error(error.message);
    }

    return { data, count };
}

export async function createEditBook(newBook, id) {
    const hasImagePath = newBook.image?.startsWith?.(supabaseUrl);

    const imageName = `${Math.random()}-${newBook.image?.name}`.replaceAll(
        "/",
        ""
    );

    const imagePath = hasImagePath
        ? newBook.image
        : `${supabaseUrl}/storage/v1/object/public/book-images/${imageName}`;

    //https://nscquxpozufcweswzuob.supabase.co/storage/v1/object/public/cabin_images/cabin-001.jpg

    let query = supabase.from("books");

    if (!id) {
        // create
        query = query.insert([{ ...newBook, image: imagePath }]);
    } else {
        // edit
        query = query.update({ ...newBook, image: imagePath }).eq("id", id);
    }

    const { data, error } = await query.select().single();

    if (error) {
        console.log(error.message);
        throw new Error("Book could not be created");
    }

    // upload image
    if (hasImagePath) return data;

    const { _, error: storageError } = await supabase.storage
        .from("book-images")
        .upload(imageName, newBook.image);

    if (storageError) {
        await supabase.from("books").delete().eq("id", data.id);
        console.log(storageError.message);
        throw new Error("Book image could not be uploaded");
    }
    return data;
}

export async function getBookById(bookId) {
    const { data, error } = await supabase
        .from("books")
        .select("*, authors(name, flagCountry)")
        .eq("id", bookId)
        .single();

    if (error) {
        console.log(error.message);
        throw new Error("Could not get Book");
    }

    return data;
}
