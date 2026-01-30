
export interface Sito { //site
    idSito: number;
    nomeSito: string;
    location: string;
    latitudine: string;
    longitudine: string;
}

export interface ListaSensori { //sensor
    idSensore: number;
    nomeSensore: string;
    unitaMisura: string;
    sogliaAvviso: number;
    sogliaAllert: number;
    frequenzaCampionamento: string;}

export interface Dispositivo {//devise
    nomeDispositivo: string;
    descrizioneDispositivo: string;
    listaSensori: ListaSensori[];
    sito: Sito;
}

export interface RootData {
    data: Dispositivo[];
}

export interface SitoConDispositivi {
    sito: Sito;
    dispositivi: Dispositivo[];
}

