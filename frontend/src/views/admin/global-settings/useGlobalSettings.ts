import useLanguageApi from '@/composable/api/http/useLanguageApi';
import { TLanguage } from '@/const/types/Languages';
import { ref } from 'vue';

const { displayLanguages, updateLanguage } = useLanguageApi();

const useGlobalSettings = () => {
    const languages = ref<TLanguage[]>([]);
    const newLanguage = ref("");
    
    const getAllLanguages = async() => {
         languages.value = await displayLanguages({});
    }

    const setNewLanguage = async() => {
        console.log(newLanguage.value);
        const data = await updateLanguage({
            value: newLanguage.value,
            active: true,
        });
    }

    getAllLanguages();
    return {
        languages,
        newLanguage,
        setNewLanguage
    };
};

export default useGlobalSettings;
