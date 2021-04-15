import { Daysinterf } from './../interface/daysinterf';

export class Days implements Daysinterf {
    id: number;
    data: number;
    ora: number;
    luogo: string;
    condizioniMeteo: string;
    orarioSchiusa: number;
    insetti: string;
    catture: number;

    constructor() {
    this.id = 0;
    this.data = 0;
    this.ora = 0;
    this.luogo = '';
    this.condizioniMeteo = '';
    this.orarioSchiusa = 0;
    this.insetti = '';
    this.catture = 0;
    }

}
