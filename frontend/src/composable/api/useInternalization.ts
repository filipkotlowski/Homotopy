import { TLanguage } from "@/const/types/Languages";
import axios from "axios";
import { onMounted, ref } from "vue";
import useNotifications from "@/composable/useNotifications";
const { actions: notificationActions } = useNotifications();
export default function useInternalization() {
    const languages = ref<TLanguage>();
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
    console.log();
        await axios
            .put("/api/languages", body)
            .then(() => {
                notificationActions.successNotification('message.success.changeLanguage', true)
            })
            .catch((error) => {
                return console.error(error);
            });
    };
    onMounted(() => {
        getLanguages();
    })
    return {
        actions: {
            getLanguages,
            updateLanguages,
        },
        languages,
    };
}

