import { TLogin } from "@/const/types/Authentication/TLogin";
import axios from "axios";

export default function useAuthenticate() {
    const authenticate = ({email, password}: TLogin ) => {
        axios.post('/api/login', {
            email,
            password
        })
    }
    return{
        authenticate
    }
}
