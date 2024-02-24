import { TLogin } from "@/const/types/Authentication/TLogin";
import axios from "axios";
import { useToast } from "vue-toastification";

export default function useAuthenticate(navigateTo: Function) {

    const toast = useToast();
    const authenticate = ({email, password}: TLogin ) => {
        axios.post('/api/authenticate', {
            email,
            password
        }).then(() => {
            toast.success("Zalogowano poprawnie!");
            navigateTo('dashboard', true);
        }).catch(error => {
           toast.error(error);
        });
    }
    return{
        authenticate
    }
}
