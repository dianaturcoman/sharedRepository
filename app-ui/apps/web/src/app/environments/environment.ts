export const APP_PATH = '/';
export const ASSETS_PATH = APP_PATH+'assets';

export enum LOCALES {
    DE = 'de-DE',
    EN = 'en-US',
    RO = 'ro-RO'
}

export enum LANGUAGES {
    DE = 'de',
    EN = 'en',
    RO = 'ro'
}

export const LOCALE = LOCALES.DE;
export const DEFAULT_LANGUAGE: string = LANGUAGES.DE;

const mode: string = 'local';

export const environment = {
    mode,
    production: mode === 'prod',
    isLocal: () => mode === 'local'
}