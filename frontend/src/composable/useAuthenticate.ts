import { TLogin } from "@/const/types/Authentication/TLogin";
import axios from "axios";
import { ref } from "vue";
import { useToast } from "vue-toastification";
import useNotifications from "@/composable/useNotifications";
const { actions: notificationActions } = useNotifications();

export default function useAuthenticate(navigateTo: Function) {
    const isLoading = ref(false);
    const toast = useToast();

    /**
     * Endpoint to auntenticate user
     * @param email string
     * @param password string
     */
    const authenticate = async ({ email, password }: TLogin) => {
        await axios
            .post("/api/authenticate", {
                email,
                password,
            })
            .then(() => {
                notificationActions.successNotification('message.success.login',true)
                navigateTo("dashboard", true);
                isLoading.value = false;
            })
            .catch((error) => {
                console.log(error);
                notificationActions.errorNotification(error.response.data.message)
                isLoading.value = false;
            });
    };

    /**
     * Endpoint to logout user
     */
    const logout = async () => {
        await axios
            .post("/api/logout")
            .then(() => {
                notificationActions.successNotification('message.success.logout',true)
                navigateTo("login");
                isLoading.value = false;
            })
            .catch((error) => {
                toast.error(error);
                notificationActions.errorNotification(error.response.data.message)
                isLoading.value = false;
            });
    };

    return {
        isLoading,
        authenticate,
        logout,
    };
}
