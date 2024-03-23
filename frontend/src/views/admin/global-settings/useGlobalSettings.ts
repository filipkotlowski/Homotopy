import useInternalization from "@/composable/api/useInternalization";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
const { actions: interializationActions, languages } = useInternalization();

const useGlobalSettings = () => {
    const t = useI18n();
    const newLanguage = ref("");

    const setNewLanguage = async () => {
        t.locale.value = newLanguage.value;
        await interializationActions.updateLanguages({
            value: newLanguage.value.toString(),
            active: 1,
        });

        interializationActions.getLanguages();
    };

    const currentLanguage = computed(() => {
        const language = (languages.value ?? [])
            ?.filter((item) => item.active === 1)
            .map((item) => item.value);

        if (language.length > 0) {
            t.locale.value = language[0];
        }
        return language;
    });
    interializationActions.getLanguages();
    return {
        languages,
        newLanguage,
        currentLanguage,
        setNewLanguage,
    };
};

export default useGlobalSettings;
