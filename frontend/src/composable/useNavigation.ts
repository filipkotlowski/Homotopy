import { ref, watch } from "vue";
import { useRouter, RouteLocationNormalized } from 'vue-router';

export default function useNavigation() {
    const route = ref("dashboard");
    const router = useRouter();

    /**
     * watch if route has been changed and update value
     */
    const watchRoute = () => {
        watch(
            () => router.currentRoute.value,
            (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
                route.value = to.path.slice(1) || '';
            }
        );
    };

    /**
     * Change url
     * 
     * @param newRouteUrl string
     */
    const navigateTo = (newRouteUrl: string) => {
        router.push(newRouteUrl);
    };

    watchRoute();

    return {
        route,
        navigateTo
    };
}
