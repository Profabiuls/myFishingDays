import { Injectable } from '@angular/core';
import { Days } from '../classes/Dayclass';
import { Daysinterf } from './../interface/daysinterf';

@Injectable()
export class DatiService {
    days: Days[] = [
        {
            id: 0,
            data: 10,
            ora: 12,
            luogo: 'Dora',
            condizioniMeteo: 'sereno',
            orarioSchiusa: 78,
            insetti: 'effimera',
            catture: 3
        },
        {
            id: 0,
            data: 11,
            ora: 13,
            luogo: 'Po',
            condizioniMeteo: 'Nuvoloso',
            orarioSchiusa: 18,
            insetti: 'effimera rossa',
            catture: 1
        },
        {
            id: 0,
            data: 2112,
            ora: 17,
            luogo: 'Pellice',
            condizioniMeteo: 'Nuvoloso',
            orarioSchiusa: 16,
            insetti: 'march',
            catture: 8
        }
    ];
}
