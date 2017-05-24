import { Component, OnInit } from '@angular/core';
import { Voyage, Saison,Localisation, Activite } from './voyage';
import { BOUCHONVOYAGES } from './mock-voyage';

@Component({
  moduleId : module.id,
  selector: 'my-travel',
  templateUrl: 'travel.component.html',
  styleUrls: ['travel.component.css'],
})

export class TravelComponent {

    // flitre choisi par l'utilisateur
    saison: Saison;
    activite: Activite;  
    localisation: Localisation;

    // tous les voyages
    voyages: Voyage[] = BOUCHONVOYAGES;

    // les voyages filtrés
    voyagesFiltres: Voyage[];

    clickSaison(saison: Saison) {
        this.saison = saison;
    }
        
    clickLocalisation(localisation: Localisation) {
        this.localisation = localisation;
    }   
        
    clickActivite(activite: Activite) {
        this.activite = activite;
    }
    
    filtre(): string {
        return `saison: ${Saison[this.saison]} activite: ${this.activite} localisation: ${this.localisation}`;
    }

}