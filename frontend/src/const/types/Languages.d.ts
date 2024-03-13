import { IBaseModel } from './Endpoint';

interface IBaseLanguage extends IBaseModel {
    value: string;
    photoUrl: string;
    active: boolean;
}

export type TLanguage = IBaseLanguage