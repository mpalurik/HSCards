import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {HsCardsApiService} from "../../services/hs-api/hs-cards-api.service";
import {ModalController} from "@ionic/angular";
import {SettingsPage} from "../settings/settings.page";
import {Quality} from "../../models/quality.model";


@Component({
  selector: 'app-card-quality',
  templateUrl: 'card-quality.page.html',
  styleUrls: ['card-quality.page.scss']
})
export class CardQualityPage {

  data2: any = [];

  cardQuality$: Observable<Quality>;

  cardQuality: string = 'free';

  constructor(
    private hsCardsApi: HsCardsApiService,
    private modalCtrl: ModalController
  ) {
    this.cardQuality$=this.hsCardsApi.getQuiality$(this.cardQuality);
    this.setFilter();
  }

  //vypis karet podle kvality, kterou si uzivatel vybere

  //<ion-card button *ngFor="let item of data2" routerLink="/quality-details/{{item.cardId}}"> po kliknuti se zobrazi detail karty
  //ktera se najde podle cardID z URL adresy

  setFilter() {
  switch (this.cardQuality) {
    case 'free':
      this.cardQuality$ = this.hsCardsApi.getQuiality$(this.cardQuality);
      this.hsCardsApi.getQuiality$(this.cardQuality).subscribe(data23 => {
        this.data2 = data23;
        console.log(data23);
      });
      break;
    case 'common':
      this.cardQuality$ = this.hsCardsApi.getQuiality$(this.cardQuality);
      this.hsCardsApi.getQuiality$(this.cardQuality).subscribe(data23 => {
        this.data2 = data23;
        console.log(data23);
      });
      break;
    case 'rare':
      this.cardQuality$ = this.hsCardsApi.getQuiality$(this.cardQuality);
      this.hsCardsApi.getQuiality$(this.cardQuality).subscribe(data23 => {
        this.data2 = data23;
        console.log(data23);
      });
      break;
    case 'epic':
      this.cardQuality$ = this.hsCardsApi.getQuiality$(this.cardQuality);
      this.hsCardsApi.getQuiality$(this.cardQuality).subscribe(data23 => {
        this.data2 = data23;
        console.log(data23);
      });
      break;
    case 'legendary':
      this.cardQuality$ = this.hsCardsApi.getQuiality$(this.cardQuality);
      this.hsCardsApi.getQuiality$(this.cardQuality).subscribe(data23 => {
        this.data2 = data23;
        console.log(data23);
      });
      break;
  }

  }

    async openSettings() {
        const modal = await this.modalCtrl.create({
            component: SettingsPage,
        });
        await modal.present();
    }
}
