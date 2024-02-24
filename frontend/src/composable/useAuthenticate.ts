import { TLogin } from "@/const/types/Authentication/TLogin";
import axios from "axios";
import { ref } from "vue";
import { useToast } from "vue-toastification";

export default function useAuthenticate(navigateTo: Function) {
    const isLoading = ref(false);
    const toast = useToast();
    const authenticate = ({email, password}: TLogin ) => {
        axios.post('/api/authenticate', {
            email,
            password
        }).then(() => {
            toast.success("Zalogowano poprawnie!");
            navigateTo('dashboard', true);
            isLoading.value = false;
        }).catch(error => {
           toast.error(error);
           isLoading.value = false;
        });
    }
    return{
        isLoading,
        authenticate
    }
}
