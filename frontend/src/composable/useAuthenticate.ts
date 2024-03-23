import { TLogin } from "@/const/types/Authentication/TLogin";
import axios from "axios";
import { ref } from "vue";
import { useToast } from "vue-toastification";

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
                toast.success("Zalogowano poprawnie!");
                navigateTo("dashboard", true);
                isLoading.value = false;
            })
            .catch((error) => {
                toast.error(error);
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
                toast.success("Wylogowano poprawnie!");
                navigateTo("login");
                isLoading.value = false;
            })
            .catch((error) => {
                toast.error(error);
                isLoading.value = false;
            });
    };

    return {
        isLoading,
        authenticate,
        logout,
    };
}
