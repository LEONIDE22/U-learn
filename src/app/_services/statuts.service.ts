import { Injectable } from '@angular/core';
import { Statut } from '../models/statut';

@Injectable({
  providedIn: 'root'
})
export class StatutsService {
  constructor() {
  }
  // @ts-ignore
  getStatut(): Statut[] {
    let statuts = [
      new Statut('comming-soon'),
      new Statut('available')
    ]
    return statuts;
  }
}
