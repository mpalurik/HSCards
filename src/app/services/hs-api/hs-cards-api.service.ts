import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Quality} from "../../models/quality.model";
import {body} from "ionicons/icons";

@Injectable({
  providedIn: 'root'
})
export class HsCardsApiService {

  constructor(

    private http: HttpClient

  ) {
  }


  getCards$( cardName: string ) {

    return this.http.get(`${environment.baseUrl}/cards/search/${cardName}/?rapidapi-key=${environment.apiToken}`);

  }


  getQuiality$(cardQuality: string ) {

    return this.http.get<Quality>(`${environment.baseUrl}/cards/qualities/${cardQuality}/?rapidapi-key=${environment.apiToken}`);

  }

  getCardBack$( ) {

    return this.http.get(`${environment.baseUrl}/cardbacks/?rapidapi-key=${environment.apiToken}`);
    //return this.http.get<Quality>(`${environment.baseUrl}/cards/${cardBack}/?rapidapi-key=${environment.apiToken}`);
  }

  getSingleCard$(id: string | null) {
  return this.http.get(`${environment.baseUrl}/cards/${id}/?rapidapi-key=${environment.apiToken}`);
}





  saveDarkThemePreference(isDark: boolean) {
    localStorage.setItem('darkTheme', JSON.stringify(isDark));

  }

  getDarkThemePreference(): boolean {
    const pref = localStorage.getItem('darkTheme');
    return pref ? JSON.parse(pref) : false; // Default to false if not set
  }

  /*
  getDarkTheme$() {
    const body = document.body;
    return body.classList.contains('dark');
  }
*/


}
