import { Component, OnInit } from '@angular/core';
import {HsCardsApiService} from "../../services/hs-api/hs-cards-api.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-quality-details',
  templateUrl: './quality-details.page.html',
  styleUrls: ['./quality-details.page.scss'],
})
export class QualityDetailsPage implements OnInit {
  data5: any = {};
  cardDetail$: Observable<any>;
  constructor( private route: ActivatedRoute, private hsCardsApi: HsCardsApiService){
  this.cardDetail$=this.hsCardsApi.getSingleCard$('EX1_001');
}

  ngOnInit() {
    //z url si vytahnu cardID, ktere pak pouziju pro ziskani jednotlive karty
    const cardId = this.route.snapshot.paramMap.get('cardId');
    this.hsCardsApi.getSingleCard$(cardId).subscribe(data => {
      console.log(data);
      this.data5 = data;
    });

  }

}
