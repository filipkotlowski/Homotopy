import useInternalization from "@/composable/api/useInternalization";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
const { actions: interializationActions, languages } = useInternalization();

const useGlobalSettings = () => {
    const t = useI18n();
    const newLanguage = ref("");

    /**
     * Update language in database and in i18n.
     */
    const setNewLanguage = async () => {
        t.locale.value = newLanguage.value;
        await interializationActions.updateLanguages({
            value: newLanguage.value.toString(),
            active: 1,
        });

        interializationActions.getLanguages();
    };

    /**
     * Watch current language and change in i18n at startup.
     */
    const currentLanguage = computed(() => {
        const language = (
            typeof languages.value == "object" ? languages.value : []
        )
            ?.filter((item: { active: number }) => item.active === 1)
            .map((item: { value: string }) => item.value);

        if (language.length > 0) {
            t.locale.value = language[0];
        }
        return language;
    });

    return {
        actions:{
            setNewLanguage,
        },
        newLanguage,
        currentLanguage,
    };
};

export default useGlobalSettings;
