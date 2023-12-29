import { Component } from '@angular/core';
import {DarkThemeService} from "./services/theme/dark-theme.service";
import {HsCardsApiService} from "./services/hs-api/hs-cards-api.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private hsCardsApi: HsCardsApiService,
              private darkThemeService: DarkThemeService
  ) {
    this.initializeApp();}


  //inicializuju si theme
  initializeApp() {
    this.darkThemeService.setInitialTheme();
  }

}
