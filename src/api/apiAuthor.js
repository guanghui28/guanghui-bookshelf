import { supabase, supabaseUrl } from "./supabase";
import { AUTHOR_PER_PAGE } from "../utils/constants";

export async function getAllAuthors({ page = 1, filter, sortBy }) {
	let query = supabase.from("authors").select("*", { count: "exact" });

	// 1. filter
	if (filter) {
		const compare = filter.value === "male" ? true : false;
		query = query.eq(filter.field, compare);
	}

	// 2. sortby
	if (sortBy) {
		query = query.order(sortBy.field, {
			ascending: sortBy.direction === "asc",
		});
	}

	// 3. page
	const from = (page - 1) * AUTHOR_PER_PAGE;
	const to = page * AUTHOR_PER_PAGE - 1;

	const { data, error, count } = await query.range(from, to);

	if (error) {
		console.log(error.message);
		throw new Error("The author data could not be loaded");
	}
	return { data, count };
}

export async function getAllAuthorNames() {
	const { data, error } = await supabase.from("authors").select("id, name");
	if (error) {
		console.log(error.message);
		throw new Error("The author names data could not be loaded");
	}
	return data;
}

export async function createEditAuthor(newAuthor, id) {
	const hasImagePath = newAuthor.image?.startsWith?.(supabaseUrl);
	const imageName = `${Math.random()}-${newAuthor.image.name}`.replaceAll(
		"/",
		""
	);

	const imagePath = hasImagePath
		? newAuthor.image
		: `${supabaseUrl}/storage/v1/object/public/author-images/${imageName}`;

	let query = supabase.from("authors");

	if (!id) {
		// Create
		query = query.insert([{ ...newAuthor, image: imagePath }]);
	} else {
		//Edit
		query = query.update({ ...newAuthor, image: imagePath }).eq("id", id);
	}

	const { data, error } = await query.select().single();

	if (error) {
		console.log(error.message);
		throw new Error("Author could not be created");
	}

	// upload Image

	if (hasImagePath) return data;

	const { _, error: storageError } = await supabase.storage
		.from("author-images")
		.upload(imageName, newAuthor.image);

	if (storageError) {
		await supabase.from("authors").delete().eq("id", data.id);
		console.log(storageError.message);
		throw new Error("Author image could note be uploaded");
	}

	return data;
}

export async function getAuthorById(authorId) {
	const { error, data } = await supabase
		.from("authors")
		.select("*")
		.eq("id", authorId)
		.single();

	if (error) {
		console.log(error.message);
		throw new Error("Could not get author");
	}

	return data;
}
