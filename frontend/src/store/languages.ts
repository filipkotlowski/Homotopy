import { defineStore } from "pinia"
import { computed, reactive } from "vue"
import { TLanguage } from "@/const/types/Languages"

interface LanguagesState {
    languages: TLanguage[]
    currentPage: number
    lastPage: number,
    lastParams: string,
    total: number
    isLoading: boolean
}

const useLanguagesStore = defineStore('languages', () => {
    const state: LanguagesState = reactive({
        languages: [],
        currentPage: 1,
        lastPage: 100,
        lastParams: '',
        total: 0,
        isLoading: false,
    })

    const isMoreToLoad = computed(() => state.languages.length < state.total)

    const fetchPage = async ({ page = (state.currentPage + 1), params = {} }: { page?: number, params: Record<string, unknown> }): Promise<void> => {
        if (page < 0) return
        if (page == 1) {
            state.languages = []
        }

        if (JSON.stringify(params) != state.lastParams) {
            state.languages = []
            state.lastParams = JSON.stringify(params)
            state.currentPage = 1
        }

        try {
            state.isLoading = true

            const data = data.data

            // For async loading 2 request => require once again a check
            if (page == 1) {
                state.languages = []
            }

            state.languages = [...state.languages, ...data.data]
            state.total = data.meta.total 
            state.lastPage = data.meta.last_page
            state.currentPage = page
        } catch (error) {
            console.error(error)
        } finally {
            state.isLoading = false
        }
    };

    return {
        state,
        getters: {
            isLoading: computed(() => state.isLoading),
            isMoreToLoad,
        },
        actions: {
            fetchPage,
        }
    }
})

export default useLanguagesStore