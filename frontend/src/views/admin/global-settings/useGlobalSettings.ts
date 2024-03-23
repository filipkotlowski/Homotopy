import useLanguageApi from "@/composable/api/http/useLanguageApi";
import { TLanguage } from "@/const/types/Languages";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

const { displayLanguages, updateLanguage } = useLanguageApi();

const useGlobalSettings = () => {
    const t = useI18n();
    const languages = ref<TLanguage[]>([]);
    const newLanguage = ref("");

    const getAllLanguages = async () => {
        languages.value = await displayLanguages({});
    };

    const setNewLanguage = async () => {
        t.locale.value = newLanguage.value;
        await updateLanguage({
            value: newLanguage.value,
            active: 1,
        });
        getAllLanguages();
    };

    const currentLanguage = computed(() => {
        const language = languages.value
            ?.filter((item) => item.active === 1)
            .map((item) => item.value);

        if (language.length > 0) {
            t.locale.value = language[0];
        }
        return language;
    });
    getAllLanguages();
    return {
        languages,
        newLanguage,
        currentLanguage,
        setNewLanguage,
        getAllLanguages,
    };
};

export default useGlobalSettings;
