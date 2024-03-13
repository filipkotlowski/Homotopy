export interface BasicIndexRequestParams {
    page?: number;
    perPage?: number;
    filters?: Record<string, unknown>;
    sort?: Record<string, unknown> | string[];
    with?: string[];
}

export interface BasicShowRequestParams {
    findKey?: 'code' | 'id' | 'external_id';
    page?: number | Record<string, number>;
    perPage?: number | Record<string, number>;
    filters?: Record<string, unknown>;
    sort?: Record<string, unknown> | string[];
    with?: string[];
}

export interface IBaseModel {
    id: number;
    created_at: Date;
    updated_at: Date;
}