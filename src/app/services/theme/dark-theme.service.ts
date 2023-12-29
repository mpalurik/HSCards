import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Preferences} from "@capacitor/preferences";


@Injectable({
  providedIn: 'root'
})
export class DarkThemeService {

  constructor() {
    this.setInitialTheme();
  }

  setInitialTheme() {
    //fetchnu theme preferenci ze storage a nastavim ji
    Preferences.get({ key: 'darkTheme' }).then((res) => {
      const isDark = res.value ? JSON.parse(res.value) : false;
      this.applyTheme(isDark);
    });
  }

  toggleDarkTheme() {
    //urcim aktualni theme a potom si ho mozu prepnout pres toggle v nastaveni
    const currentTheme = document.body.classList.contains('dark');
    const newTheme = !currentTheme;
    //aplikuju novy theme a aktualizuju preferenci ve storage
    this.applyTheme(newTheme);
    Preferences.set({ key: 'darkTheme', value: JSON.stringify(newTheme) });
    return newTheme;
  }

  private applyTheme(enable: boolean) {
    //pridam nebo odebiru tridu dark na body
    document.body.classList.toggle('dark', enable);
  }

}


