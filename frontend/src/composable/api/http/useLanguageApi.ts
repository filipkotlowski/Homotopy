import { TLanguage } from "@/const/types/Languages";
import { BasicIndexRequestParams } from "@/const/types/Endpoint";
import useApi from "./useApi";
interface IStoreLanguageParams {
  setNewLanguage?: boolean;
}

const useLanguageApi = () => {

  const { fetchAll, createOne } = useApi<TLanguage>('/api/languages');

  /**
   * GET /index - returns all languages based on provided params.
   */
  const displayLanguages = async (params: BasicIndexRequestParams ) => {
    try {
      const languages = await fetchAll<BasicIndexRequestParams >({ params })
      
      return languages
    } catch (error) {
      throw error
    }
  }

  /**
   * post /languages - create new languages.
   */
  const createLanguage = async (body: Partial<TLanguage>, meta: IStoreLanguageParams = {}) => {
    try {
      const { data } = await createOne({
        body: {
          ...body,
          meta,
        }
      })

      return data;
    } catch (error) {
      throw error
    }
  }
  return{
    displayLanguages,
    createLanguage,
  }
}

export default useLanguageApi