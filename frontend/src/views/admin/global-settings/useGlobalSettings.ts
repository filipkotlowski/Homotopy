import useLanguageApi from '@/composable/api/http/useLanguageApi';
import { TLanguage } from '@/const/types/Languages';
import { ref } from 'vue';

const { displayLanguages } = useLanguageApi();

const useGlobalSettings = () => {
    const languages = ref<TLanguage[]>([]);
    
    const getAllLanguages = async() => {
         languages.value = (await displayLanguages({}));
    }
    getAllLanguages();
    return{
        languages
    }
}


export default useGlobalSettings;