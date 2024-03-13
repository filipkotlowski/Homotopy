import { BasicIndexRequestParams, BasicShowRequestParams } from '@/const/types/endpoint';
import axios from '@libs/axios';

const useApi = <Model>(baseEndpoint: string) => {

    type TFetchOneResponse = { data: (Model | null), meta?: any }
    type TFetchAllResponse = { data: (Model | null)[], meta?: any }
    type TStoreOneResponse = { data: (Model | null), meta?: any }

    /**
     * Fetches a single row specified by the key from the endpoint.
     * @param {string | number} key - The key to identify the row.
     * @param {string} endpoint - The API endpoint to fetch the row from.
     * @param {Params} params - Additional parameters for the request.
     * @returns {Promise<TFetchOneResponse>} - A promise that resolves to the fetched row.
     */
    const fetchOne = async <Params extends BasicShowRequestParams>({ endpoint, key, params }: {
        key: string | number,
        endpoint?: string,
        params?: Params
    }): Promise<TFetchOneResponse> => {

        const combinedEndpoint = endpoint ? `${baseEndpoint}/${endpoint}` : baseEndpoint

        try {
            const { data } = await axios.get<TFetchOneResponse>(`${combinedEndpoint}/${key}`, { params });

            return data;
        } catch (error) {
            throw error;
        }

    };

    /**
     * Fetches all rows from the endpoint.
     * @param {string} endpoint - The API endpoint to fetch the rows from.
     * @param {Params} params - Additional parameters for the request.
     * @returns {Promise<TFetchAllResponse>} - A promise that resolves to an array of fetched rows.
     */
    const fetchAll = async <Params extends BasicIndexRequestParams>({ endpoint, params }: {
        endpoint?: string,
        params?: Params
    }): Promise<TFetchAllResponse> => {

        const combinedEndpoint = endpoint ? `${baseEndpoint}/${endpoint}` : baseEndpoint

        try {
            const { data } = await axios.get<TFetchAllResponse>(`${combinedEndpoint}`, { params });

            return data;
        } catch (error) {
            throw error;
        }

    };

    /**
     * Creates a new row at the endpoint with the provided body.
     * @param {string} endpoint - The API endpoint to create the row at.
     * @param {Body} body - The body of the request containing data for the new row.
     * @returns {Promise<TStoreOneResponse>} - A promise that resolves to the created row.
     */
    const createOne = async <Body>({ endpoint, body }: {
        endpoint?: string,
        body?: Body
    }): Promise<TStoreOneResponse> => {

        const combinedEndpoint = endpoint ? `${baseEndpoint}/${endpoint}` : baseEndpoint

        try {
            const { data } = await axios.post<TStoreOneResponse>(`${combinedEndpoint}`, body);

            return data;
        } catch (error) {
            throw error;
        }

    }

    /**
     * Updates an existing row at the endpoint with the provided body.
     * @param {string} endpoint - The API endpoint to update the row at.
     * @param {Body} body - The body of the request containing updated data for the row.
     * @returns {Promise<TStoreOneResponse>} - A promise that resolves to the updated row.
     */
    const updateOne = async <Body>({ endpoint, body }: {
        endpoint?: string,
        body?: Body
    }): Promise<TStoreOneResponse> => {

        const combinedEndpoint = endpoint ? `${baseEndpoint}/${endpoint}` : baseEndpoint

        try {
            const { data } = await axios.put<TStoreOneResponse>(`${combinedEndpoint}`, body);

            return data;
        } catch (error) {
            throw error;
        }

    }

    return {
        fetchOne,
        fetchAll,
        createOne,
        updateOne,
    };
};

export default useApi;
