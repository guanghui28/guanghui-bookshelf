import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import { useForm } from "react-hook-form";
import { useCreateBook } from "./useCreateBook";
import Select from "../../ui/Select";
import { GENRES } from "../../utils/constants";
import { useAuthorNames } from "../authors/useAuthorNames";
import SpinnerMini from "../../ui/SpinnerMini";
import { useEditBook } from "./useEditBook";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function CreateBookForm({ bookToEdit = {}, onCloseModal }) {
    const { createBook, isCreating } = useCreateBook();
    const { editBook, isEditing } = useEditBook();
    const { isLoading: isLoadingAuthorNames, authors } = useAuthorNames();

    const { id: editId, ...bookValues } = bookToEdit;
    const isEditSession = Boolean(editId);

    const { register, handleSubmit, formState, reset } = useForm({
        defaultValues: isEditSession ? bookValues : {},
    });
    const { errors } = formState;

    const isWorking = isLoadingAuthorNames || isCreating || isEditing;

    function onSubmit(data) {
        const image =
            typeof data.image === "string" ? data.image : data.image[0];
        const newBook = {
            ...data,
            image,
            price: Number(data.price),
            authorId: Number(data.authorId),
            year: Number(data.year),
            pages: Number(data.pages),
            rating: Number(data.rating),
        };
        if (isEditSession) {
            const bookToEdit = { ...newBook };
            delete bookToEdit.authors;
            editBook(
                {
                    bookToEdit,
                    id: editId,
                },
                {
                    onSuccess: () => {
                        reset();
                        onCloseModal?.();
                    },
                }
            );
        } else {
            createBook(newBook, {
                onSuccess: () => {
                    reset();
                    onCloseModal?.();
                },
            });
        }
    }

    return (
        <Form
            onSubmit={handleSubmit(onSubmit)}
            type={onCloseModal ? "modal" : "regular"}
        >
            <FormRow label="Title book" error={errors?.title?.message}>
                <Input
                    type="text"
                    placeholder="Ex: Norwegian Wood"
                    id="title"
                    {...register("title", {
                        required: "The book need a title!",
                    })}
                />
            </FormRow>
            <FormRow label="Author" error={errors?.author?.message}>
                {isLoadingAuthorNames ? (
                    <SpinnerMini />
                ) : (
                    <Select id="authorId" {...register("authorId")}>
                        {authors.map((author) => (
                            <option value={author.id} key={author.id}>
                                {author.name}
                            </option>
                        ))}
                    </Select>
                )}
            </FormRow>
            <FormRow label="Genre" error={errors?.genre?.message}>
                <Select
                    id="genre"
                    {...register("genre", {
                        required: "Which genre is this book?",
                    })}
                >
                    {GENRES.map((genre) => (
                        <option value={genre} key={genre}>
                            {genre}
                        </option>
                    ))}
                </Select>
            </FormRow>
            <FormRow label="Total pages" error={errors?.pages?.message}>
                <Input
                    type="number"
                    placeholder="Ex: 300"
                    id="pages"
                    {...register("pages", {
                        required: "This book has how many pages?",
                    })}
                />
            </FormRow>
            <FormRow label="Image" error={errors?.image?.message}>
                <FileInput id="image" accept="image/*" {...register("image")} />
            </FormRow>
            <FormRow label="Year" error={errors?.year?.message}>
                <Input
                    type="number"
                    placeholder="YYYY"
                    id="year"
                    {...register("year", {
                        required: "When was the book written?",
                    })}
                />
            </FormRow>
            <FormRow label="Price" error={errors?.price?.message}>
                <Input
                    type="number"
                    placeholder="Ex: 200,000 VND"
                    id="price"
                    {...register("price", {
                        required: "How much is it?",
                    })}
                />
            </FormRow>
            <FormRow label="Summary" error={errors?.summary?.message}>
                <Textarea
                    placeholder="Write a brief about 20-30 words"
                    type="text"
                    id="summary"
                    {...register("summary", {
                        required: "Write a short description.",
                    })}
                />
            </FormRow>
            <FormRow label="Rating" error={errors?.rating?.message}>
                <Select
                    id="rating"
                    {...register("rating", {
                        required: "How do you like this book?",
                    })}
                >
                    {array.map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </Select>
            </FormRow>
            <FormRow>
                <Button
                    variation="danger"
                    size="medium"
                    type="reset"
                    disabled={isWorking}
                    onClick={() => onCloseModal?.()}
                >
                    Cancel
                </Button>
                <Button variation="primary" size="medium" disabled={isWorking}>
                    {isEditSession ? "Update book" : "Add new book"}
                </Button>
            </FormRow>
        </Form>
    );
}

export default CreateBookForm;
