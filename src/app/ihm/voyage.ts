export enum Saison{
    PRINTEMPS,
    ETE,
    AUTOMNE,
    HIVER
}

export enum Localisation{
    MER,
    MONTAGNE
}

export enum Activite{
    SPORT,
    DETENTE
}

export class Voyage  {
    id: number;
    name: string;
    saison: Saison;
    localisation: Localisation;
    activite: Activite;
   }
