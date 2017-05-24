import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Voyage } from './voyage';
import { BOUCHONVOYAGES } from './mock-voyage';


@Component({
  moduleId : module.id,
  selector: 'my-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css'],
})

export class ArticleComponent implements OnInit {
    
    //pour recuperer le mock
    voyage: Voyage;

    constructor(
        private route: ActivatedRoute,
        private location: Location
      ) {}   

    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => params['id']).subscribe(n => {
            console.log('article ' + n);
            let r: Voyage;
            // 1: boucle
            for(let i=0; i < BOUCHONVOYAGES.length; i++) {
                if(BOUCHONVOYAGES[i].id == n) {
                    r = BOUCHONVOYAGES[i];
                }
            }
            // 2: map
            BOUCHONVOYAGES.map(v => {
                if(v.id == n) {
                    r = v;
                }
            });
            // 3: find
            r = BOUCHONVOYAGES.find(v => v.id == n);
            this.voyage = r;
        });
    }
}