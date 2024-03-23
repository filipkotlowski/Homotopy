import { TLanguage } from "@/const/types/Languages";
import axios from "axios";
import { ref } from "vue";
import { useToast } from "vue-toastification";

export default function useInternalization() {
    const languages = ref<TLanguage>();
    const toast = useToast();

    /**
     * GET /languages - get all available page languages
     */
    const getLanguages = async () => {
        const { data } = await axios.get("/api/languages");
        languages.value = data;
    };

    /**
     * PUT /languages - updates an existing language with the provided body.
     * @param {Body} body - The body of the request containing updated data for the row.
     */
    const updateLanguages = async (body: any) => {
        await axios
            .put("/api/languages", body)
            .then(() => {
                toast.success("Pomyślnie zmieniono język w aplikacji!");
            })
            .catch((error) => {
                return console.error(error);
            });
    };

    return {
        actions: {
            getLanguages,
            updateLanguages,
        },
        languages,
    };
}
