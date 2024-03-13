import { IBaseModel } from './Endpoint';

interface IBaseLanguage extends IBaseModel {
    value: string;
    photoUrl: string;
}

export type TLanguage = IBaseLanguage