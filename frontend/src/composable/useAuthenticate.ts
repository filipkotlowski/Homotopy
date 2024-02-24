import { TLogin } from "@/const/types/Authentication/TLogin";
import axios from "axios";


export default function useAuthenticate(navigateTo: Function) {
    const authenticate = ({email, password}: TLogin ) => {
        axios.post('/api/authenticate', {
            email,
            password
        }).then(() => {
            navigateTo('dashboard', true);
        }).catch(error => {
            console.error('Error during authentication:', error);
        });
    }
    return{
        authenticate
    }
}
