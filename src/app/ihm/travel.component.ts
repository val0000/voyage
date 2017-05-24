import { Component, OnInit } from '@angular/core';
import { Voyage } from './voyage';
import { BOUCHONVOYAGES } from './mock-voyage';

@Component({
  moduleId : module.id,
  selector: 'my-travel',
  templateUrl: 'travel.component.html',
  styleUrls: ['travel.component.css'],
})

export class TravelComponent implements OnInit {

    // flitre choisi par l'utilisateur
    saison: string;
    activite: string;  
    localisation: string;

    // tous les voyages
    voyages: Voyage[] = BOUCHONVOYAGES;

    // les voyages filtrés
    voyagesFiltres: Voyage[];

    ngOnInit() {
        this.filtre();
    }

    clickSaison(saison: string) {
        this.saison = saison;
        this.filtre();
    }
        
    clickLocalisation(localisation: string) {
        this.localisation = localisation;
        this.filtre();
    }   
        
    clickActivite(activite: string) {
        this.activite = activite;
        this.filtre();
    }
    
    filtre(): void {
        this.voyagesFiltres = this.voyages.filter(v => {
            if(v.saison == this.saison
               && v.localisation == this.localisation && v.activite == this.activite     ) {
              return true;
            } else {
                return false;
            }
        });
    }

}