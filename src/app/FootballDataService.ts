import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FootballDataService {

  private apikey = 'YOUR_FOOTBALL_DATA.ORG_API_KEY';
  private endpoint = 'api/v4/';

  constructor(private http: HttpClient) { }

  // getMatches(dateFrom: string, dateTo: string): Observable<any> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'X-Auth-Token': this.apikey
  //     })
  //   };
  //   const filters: Filters = {
  //     dateFrom: dateFrom,
  //     dateTo: dateTo,
  //     permission : '',
  //     competitions: this.competitions,
  //   };
  //   const params = Object.keys(filters).map(key => key + '=' + filters[key]).join('&');
  //   return this.http.get<any>(`${this.endpoint + 'matches'}?${params}`, httpOptions);
  // }

  getMatches(filters?: Filters): Observable<Map<string, Match[]>> {
    let url = `${this.endpoint}matches?`;
    let filtersString = '';

    if (filters?.competitions != null)
      filtersString +=  `competitions=${filters.competitions}&`;
    if (filters?.dateFrom != null)
      filtersString += `dateFrom=${filters.dateFrom}&`;;
    if (filters?.dateTo != null)
      filtersString += `dateTo=${filters.dateTo}`;
    
    return this.http.get<RootObject>(url + filtersString, {
      headers: { 'X-Auth-Token': this.apikey }
    })
      .pipe(map(response => {
        const matches = response.matches;
        const matchesByCompetition = new Map<string, Match[]>();
        if(response.resultSet.count == 0)
          return matchesByCompetition;
        matches.forEach(match => {
          const competitionName = match.competition.name ?? '';
          if (competitionName && matchesByCompetition.has(competitionName)) {
            let matches = matchesByCompetition.get(competitionName);
            if (matches)
              matches.push(match);
          }
          else
            matchesByCompetition.set(competitionName, [match]);
        });
        return matchesByCompetition;
      })
      );
  }
}

export interface Filters {
  dateFrom: string;
  dateTo: string;
  permission: string;
  competitions: string;
  [key: string]: any;
}

export interface ResultSet {
  count: number;
  competitions: string;
  first: string;
  last: string;
  played: number;
}

export interface Area {
  id: number;
  name: string;
  code: string;
  flag: string;
}

export interface Competition {
  id: number;
  name: string;
  code: string;
  type: string;
  emblem: string;
}

export interface Season {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner?: any;
}

export interface HomeTeam {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
}

export interface AwayTeam {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
}

export interface FullTime {
  home?: any;
  away?: any;
}

export interface HalfTime {
  home?: any;
  away?: any;
}

export interface Score {
  winner?: any;
  duration: string;
  fullTime: FullTime;
  halfTime: HalfTime;
}

export interface Odds {
  msg: string;
}

export interface Referee {
  id: number;
  name: string;
  type: string;
  nationality: string;
}

export interface Match {
  area: Area;
  competition: Competition;
  season: Season;
  id: number;
  utcDate: Date;
  status: string;
  matchday?: number;
  stage: string;
  group?: any;
  lastUpdated: Date;
  homeTeam: HomeTeam;
  awayTeam: AwayTeam;
  score: Score;
  odds: Odds;
  referees: Referee[];
  [key: string]: any;
}

export interface RootObject {
  filters: Filters;
  resultSet: ResultSet;
  matches: Match[];
}



