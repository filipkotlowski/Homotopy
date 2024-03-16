import useLanguageApi from "@/composable/api/http/useLanguageApi";
import { TLanguage } from "@/const/types/Languages";
import { computed, ref } from "vue";


const { displayLanguages, updateLanguage } = useLanguageApi();

const useGlobalSettings = () => {
    const languages = ref<TLanguage[]>([]);
    const newLanguage = ref("");

    const getAllLanguages = async () => {
        languages.value = await displayLanguages({});
    };

    const setNewLanguage = async () => {
        console.log(newLanguage.value);
        await updateLanguage({
            value: newLanguage.value,
            active: 1,
        });
    };

    const currentLanguage = computed(() => {
        return (
            languages.value
            ?.filter((item) => item.active === 1)
                .map((item) => item.value)
        );
    });

    getAllLanguages();
    return {
        languages,
        newLanguage,
        currentLanguage,
        setNewLanguage,
    };
};

export default useGlobalSettings;
