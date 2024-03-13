import axios from 'axios';
import { ref } from 'vue';
export default function useLanguage() {
    const languages = ref();
    const getLanguages = () => {
        axios
            .get("/api/languages")
            .then(({data}) => {
                languages.value = data;
            })
            .catch((error) => {
                toast.error(error);
            });
    };
    getLanguages();
    return {
        languages,
    };
}
