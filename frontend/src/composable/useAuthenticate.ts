import { TLogin } from "@/const/types/Authentication/TLogin";
import axios from "axios";

export default function useAuthenticate() {
    const login = ({email, password}: TLogin ) => {
        axios.post('/api/login', {
            email,
            password
        })
    }
    const validateForm = ({target: form}: { target: HTMLFormElement }) => {
        const formData = new FormData(form);
        console.log(formData);
        // login();
    }
    return{
        validateForm
    }
}
