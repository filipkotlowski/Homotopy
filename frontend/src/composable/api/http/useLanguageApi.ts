import { TLanguage } from "@/const/types/Languages";
import { BasicIndexRequestParams } from "@/const/types/Endpoint";
import useApi from "./useApi";

const useLanguageApi = () => {

  const { fetchAll, createOne,updateOne } = useApi<TLanguage>('/api/languages');

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
  const createLanguage = async (body: Partial<TLanguage>) => {
    console.log(body);
    try {
      const { data } = await createOne({
        body: {
          ...body,
        }
      })

      return data;
    } catch (error) {
      throw error
    }
  }

  /**
   * put /languages - update existing language.
   */
  const updateLanguage = async (body: Partial<TLanguage>) => {
    try {
      const { data } = await updateOne({
        body: {
          ...body,
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
    updateLanguage,
  }
}

export default useLanguageApi