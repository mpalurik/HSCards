import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HsCardsApiService} from "../../services/hs-api/hs-cards-api.service";
import {environment} from "../../../environments/environment";
import {InfiniteScrollCustomEvent, ModalController} from "@ionic/angular";
import {CardBack} from "../../models/cardback.model";
import {SettingsPage} from "../settings/settings.page";
@Component({
  selector: 'app-card-back',
  templateUrl: 'card-back.page.html',
  styleUrls: ['card-back.page.scss']
})
export class CardBackPage implements OnInit{

  data3: any = [];
  cardback$: Observable<any>;

  constructor(

    private hsCardsApi: HsCardsApiService,
    private modalCtrl: ModalController
  ) {

    this.cardback$=this.hsCardsApi.getCardBack$();
  }

  ngOnInit() {
    this.hsCardsApi.getCardBack$().subscribe(data3 => {
      this.data3 = data3;

    });
  }

  async openSettings() {
    const modal = await this.modalCtrl.create({
      component: SettingsPage,
    });
    await modal.present();
  }


}
