import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Match } from "./matches/matches.component";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class FootballDataService {
  private apikey = 'YOUR_FOOTBALL_DATA.ORG_API_KEY';
  private endpoint = 'api/v4/';

  constructor(private http: HttpClient) { }

  public getMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(`/matches/mock`);
  }
  // write me a getMatches method, returns a fake json response from the football-data.org v4 api using msw
  // https://mswjs.io/docs/getting-started/integrate/browser
  // https://www.football-data.org/documentation/quickstart
  //http://api.football-data.org/v4/matches
}