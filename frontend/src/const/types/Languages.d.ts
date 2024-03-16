import { IBaseModel } from './Endpoint';

interface IBaseLanguage extends IBaseModel {
    value: string;
    photoUrl: string;
    active: number;
    created_at: Date,
    updated_at:Date,
    id:number,
}

export type TLanguage = IBaseLanguage