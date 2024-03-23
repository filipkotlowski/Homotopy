import { i18n } from "@/main";
import { useToast } from "vue-toastification";
export default function useNotifications() {
    const toast = useToast();

    /**
     * Display success notofication
     * @param message string 
     * @param translate boolean
     */
    const successNotification = (message: string, translate: boolean) => {
        return toast.success(translate ? i18n.global.t(message) : message);
    };

    /**
     * Display error notofication
     * @param message string 
     * @param translate boolean
     * @returns 
     */
    const errorNotification = (message: string, translate: boolean = false) => {
        return toast.error(translate ? i18n.global.t(message) : message);
    };

    return {
        actions: {
            successNotification,
            errorNotification
        },
    };
}
