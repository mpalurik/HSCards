import { Component } from '@angular/core';
import {HsCardsApiService} from "../../services/hs-api/hs-cards-api.service";
import {Observable} from "rxjs";
import {SettingsPage} from "../settings/settings.page";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-search-card',
  templateUrl: 'search-card.page.html',
  styleUrls: ['search-card.page.scss']
})
export class SearchCardPage {

  data: any = {};

  cards$?: Observable<any>;

  cardSearch: string = '';


  constructor(

    private hsCardsApi: HsCardsApiService,
    private modalCtrl: ModalController
  ) {

    //this.cards$=this.hsCardsApi.getCards$(this.cardSearch);
  }


  async openSettings() {
    const modal = await this.modalCtrl.create({
      component: SettingsPage,
    });
    await modal.present();
  }


  //az ve vyhledavacim poli se neco zmeni, tak se zavola tato funkce, která zavola funkci getCards$
  //<ion-card button *ngFor="let item of data" routerLink="/quality-details/{{item.cardId}}">  po kliknuti se zobrazi detail karty
  //ktera se najde podle cardID z URL adresy
  buscar({ event }: { event: any }) {
    const searchValue = event.detail.value;
    this.cards$ = this.hsCardsApi.getCards$(this.cardSearch);
    this.hsCardsApi.getCards$(this.cardSearch).subscribe(data32 => {
      this.data = data32;
    });

  }
}
