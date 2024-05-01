import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import Select from "../../ui/Select";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useCreateAuthor } from "./useCreateAuthor";
import { useEditAuthor } from "./useEditAuthor";

function CreateAuthorForm({ authorToEdit = {}, onCloseModal }) {
    const { isCreating, createAuthor } = useCreateAuthor();
    const { isEditing, editAuthor } = useEditAuthor();
    const isWorking = isCreating || isEditing;

    const { id: editId, ...editValues } = authorToEdit;
    const isEditSession = Boolean(editId);

    const convertEditValues = {
        ...editValues,
        gender: editValues.gender ? "male" : "female",
        alive: editValues.alive ? "alive" : "dead",
    };

    const { register, handleSubmit, formState, reset } = useForm({
        defaultValues: isEditSession ? convertEditValues : {},
    });
    const { errors } = formState;

    function onSubmit(data) {
        const image =
            typeof data.image === "string" ? data.image : data.image[0];

        if (isEditSession) {
            const authorEdit = {
                ...data,
                image,
                alive: data.alive === "alive",
                gender: data.gender === "male",
                birthYear: Number(data.birthYear),
            };
            editAuthor(
                { authorToEdit: authorEdit, id: editId },
                {
                    onSuccess: () => {
                        reset();
                        onCloseModal?.();
                    },
                }
            );
        } else {
            const newAuthor = {
                ...data,
                alive: data.alive === "alive",
                gender: data.gender === "male",
                image,
                birthYear: Number(data.birthYear),
                flagCountry: `https://flagcdn.com/${data.flagCountry}.svg`,
            };
            createAuthor(newAuthor, {
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
            <FormRow label="Author's Name" error={errors?.name?.message}>
                <Input
                    type="text"
                    id="name"
                    placeholder="Ex: Stephen King"
                    {...register("name", {
                        required: "What's the name of author?",
                    })}
                />
            </FormRow>
            <FormRow label="Author's Image" error={errors?.image?.message}>
                <FileInput id="image" accept="image/*" {...register("image")} />
            </FormRow>
            <FormRow label="Country" error={errors?.country?.message}>
                <Input
                    type="text"
                    id="country"
                    placeholder="Ex: America"
                    {...register("country", {
                        required: "What's the nationality of the author",
                    })}
                />
            </FormRow>
            <FormRow label="Country Code" error={errors?.flagCountry?.message}>
                <Input
                    type="text"
                    id="flagCountry"
                    placeholder="Ex: us (america), vn (VietNam)"
                    {...register("flagCountry", {
                        required: "This field can not be empty",
                    })}
                />
            </FormRow>
            <FormRow label="Birth Year" error={errors?.birthYear?.message}>
                <Input
                    type="number"
                    id="birthYear"
                    placeholder="Ex: 1945"
                    {...register("birthYear", {
                        required: "When was the author born?",
                    })}
                />
            </FormRow>
            <FormRow label="Gender" error={errors?.gender?.message}>
                <Select id="gender" {...register("gender")}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </Select>
            </FormRow>
            <FormRow label="Is Alive?" error={errors?.alive?.message}>
                <Select id="alive" {...register("alive")}>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                </Select>
            </FormRow>
            <FormRow label="Description" error={errors?.story?.message}>
                <Textarea
                    id="story"
                    type="text"
                    placeholder="Write short brief about author"
                    {...register("story", {
                        required: "Write a short description about the author",
                    })}
                />
            </FormRow>
            <FormRow>
                <Button
                    variation="danger"
                    size="medium"
                    type="reset"
                    onClick={() => onCloseModal?.()}
                >
                    Cancel
                </Button>
                <Button variation="primary" size="medium" disabled={isWorking}>
                    {isEditSession ? "Update Author" : "Add Author"}
                </Button>
            </FormRow>
        </Form>
    );
}

export default CreateAuthorForm;
