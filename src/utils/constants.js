export const GENRES = [
	"Science Fiction",
	"Action and Adventure",
	"Horror",
	"Mystery or Suspense",
	"Young Adult",
	"Romance",
	"Literacy Fiction",
	"Historical Fiction",
	"Fantasy",
	"Thriller",
	"History",
	"Self Help",
	"Poetry",
	"Art or Music",
	"General Science",
	"Religion or Mythology",
];

export const GENERATE_FILTER_BOOK_OPTIONS = [
	{ value: "all", label: "All" },
	...GENRES.map((genre) => {
		const split = genre.toLowerCase().split(" ");
		const label = genre;
		const value = split.join("-");
		return { value, label };
	}),
];

export const GENERATE_SORT_BY_BOOK_OPTIONS = [
	{
		value: "title-asc",
		label: "Sort by title alphabetically (A-Z)",
	},
	{
		value: "title-desc",
		label: "Sort by title alphabetically (Z-A)",
	},
	{
		value: "year-asc",
		label: "Sort by year (earlier first)",
	},
	{
		value: "year-desc",
		label: "Sort by year (recent first)",
	},
	{
		value: "pages-asc",
		label: "Sort by total pages (less first)",
	},
	{
		value: "pages-desc",
		label: "Sort by total pages (more first)",
	},
];

export const GENERATE_FILTER_AUTHOR_OPTIONS = [
	{
		value: "all",
		label: "All",
	},
	{
		value: "male",
		label: "Male",
	},
	{
		value: "female",
		label: "Female",
	},
];

export const GENERATE_SORT_BY_AUTHOR_OPTIONS = [
	{
		value: "name-asc",
		label: "Sort by name alphabetically (A-Z)",
	},
	{
		value: "name-desc",
		label: "Sort by name alphabetically (Z-A)",
	},
	{
		value: "country-asc",
		label: "Sort by country alphabetically (A-Z)",
	},
	{
		value: "country-desc",
		label: "Sort by country alphabetically (Z-A)",
	},
	{
		value: "birthYear-desc",
		label: "Sort by age (younger first)",
	},
	{
		value: "birthYear-asc",
		label: "Sort by age (older first)",
	},
];

export const AUTHOR_PER_PAGE = 2;
export const BOOK_PER_PAGE = 4;
