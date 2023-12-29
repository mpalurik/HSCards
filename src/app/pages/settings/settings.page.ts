import {Component, OnInit, Renderer2} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {DarkThemeService} from "../../services/theme/dark-theme.service";
import {HsCardsApiService} from "../../services/hs-api/hs-cards-api.service";


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  isDarkTheme?: boolean;

  constructor(
      private modalCtrl: ModalController,
      private darkThemeService: DarkThemeService,
  ) {
    this.isDarkTheme = document.body.classList.contains('dark');
    }


    //prepinani dark theme
  toggleDarkTheme() {
    this.isDarkTheme = this.darkThemeService.toggleDarkTheme();
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }
}

