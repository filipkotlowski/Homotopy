import { ref, watch } from "vue";
import { useRouter, RouteLocationNormalized } from 'vue-router';

export default function useNavigation() {
    /**
     * Default route
     */
    const route = ref("dashboard");
    const router = useRouter();

    /**
     * watch if route has been changed and update value
     */
    watch(
        () => router.currentRoute.value,
        (to: RouteLocationNormalized) => {
            route.value = to.path.slice(1) || '';
        }
    );

    /**
     * Change url
     * @param newRouteUrl string - new url
     * @param isAdmin boolean - is new url on admin site
     */
    const navigateTo = (newRouteUrl: string, isAdmin: boolean) => {
        const prefix = isAdmin ? '/admin' : '';
        router.push(`${prefix}/${newRouteUrl}`);
    };

    return {
        route,
        navigateTo
    };
}
