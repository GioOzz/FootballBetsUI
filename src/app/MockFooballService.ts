import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class MockInterceptorService implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url.endsWith('/matches/mock')) {
            const mockResponse = {
                filters:
                {
                    dateFrom: "2024-01-27",
                    dateTo: "2024-01-28",
                    permission: "TIER_ONE"
                },
                resultSet: {
                    count: 22,
                    competitions: "ELC,PD,SA,BL1,FL1,DED",
                    first: "2024-01-27",
                    last: "2024-01-27", played: 0
                },
                matches: [
                    {
                        area:
                        {
                            id: 2072, name: "England", code: "ENG", flag: "https://crests.football-data.org/770.svg"
                        }, "competition": { "id": 2016, "name": "Championship", "code": "ELC", "type": "LEAGUE", "emblem": "https://crests.football-data.org/ELC.png" },
                        "season": { "id": 1573, "startDate": "2023-08-04", "endDate": "2024-05-04", "currentMatchday": 29, "winner": null },
                        "id": 437012, "utcDate": "2024-01-27T00:00:00Z", "status": "POSTPONED", "matchday": 29, "stage": "REGULAR_SEASON", "group": null,
                        "lastUpdated": "2024-01-19T15:20:36Z", "homeTeam": {
                            "id": 332, "name": "Birmingham City FC", "shortName": "Birmingham", "tla": "BIR",
                            "crest": "https://crests.football-data.org/332.png"
                        }, "awayTeam": {
                            "id": 343, "name": "Middlesbrough FC", "shortName": "Middlesbrough",
                            "tla": "MID", "crest": "https://crests.football-data.org/343.png"
                        }, "score": {
                            "winner": null, "duration": "REGULAR",
                            "fullTime": { "home": null, "away": null }, "halfTime": { "home": null, "away": null }
                        },
                        "odds": { "msg": "Activate Odds-Package in User-Panel to retrieve odds." }, "referees": []
                    }, {
                        area: { "id": 2224, "name": "Spain", "code": "ESP", "flag": "https://crests.football-data.org/760.svg" },
                        competition: { "id": 2014, "name": "Primera Division", "code": "PD", "type": "LEAGUE", "emblem": "https://crests.football-data.org/PD.png" },
                        "season": { "id": 1577, "startDate": "2023-08-13", "endDate": "2024-05-26", "currentMatchday": 22, "winner": null },
                        "id": 438691, "utcDate": "2024-01-27T13:00:00Z", "status": "TIMED", "matchday": 22, "stage": "REGULAR_SEASON", "group": null,
                        "lastUpdated": "2024-01-09T20:21:20Z", "homeTeam": {
                            "id": 92, "name": "Real Sociedad de Fútbol", "shortName": "Real Sociedad",
                            "tla": "RSO", "crest": "https://crests.football-data.org/92.svg"
                        }, "awayTeam": {
                            "id": 87, "name": "Rayo Vallecano de Madrid",
                            "shortName": "Rayo Vallecano", "tla": "RAY", "crest": "https://crests.football-data.org/87.svg"
                        }, "score":
                            { "winner": null, "duration": "REGULAR", "fullTime": { "home": null, "away": null }, "halfTime": { "home": null, "away": null } },
                        "odds": { "msg": "Activate Odds-Package in User-Panel to retrieve odds." }, "referees": []
                    },
                    {
                        area:
                            { id: 2114, "name": "Italy", "code": "ITA", "flag": "https://crests.football-data.org/784.svg" },
                        "competition": { "id": 2019, "name": "Serie A", "code": "SA", "type": "LEAGUE", "emblem": "https://crests.football-data.org/SA.png" },
                        "season": { "id": 1600, "startDate": "2023-08-19", "endDate": "2024-05-26", "currentMatchday": 22, "winner": null }, "id": 444464,
                        "utcDate": "2024-01-27T14:00:00Z", "status": "TIMED", "matchday": 22, "stage": "REGULAR_SEASON", "group": null, "lastUpdated": "2023-12-26T15:21:05Z",
                        "homeTeam": { "id": 102, "name": "Atalanta BC", "shortName": "Atalanta", "tla": "ATA", "crest": "https://crests.football-data.org/102.svg" },
                        "awayTeam": { "id": 115, "name": "Udinese Calcio", "shortName": "Udinese", "tla": "UDI", "crest": "https://crests.football-data.org/115.png" },
                        "score": { "winner": null, "duration": "REGULAR", "fullTime": { "home": null, "away": null }, "halfTime": { "home": null, "away": null } },
                        "odds": { "msg": "Activate Odds-Package in User-Panel to retrieve odds." }, "referees": []
                    },
                    {
                        area: { id: 2088, "name": "Germany", "code": "DEU", "flag": "https://crests.football-data.org/759.svg" }, "competition": {
                            "id": 2002, "name": "Bundesliga", "code": "BL1", "type": "LEAGUE", "emblem": "https://crests.football-data.org/BL1.png"
                        }, "season": { "id": 1592, "startDate": "2023-08-18", "endDate": "2024-05-18", "currentMatchday": 19, "winner": null }, "id": 441953, "utcDate": "2024-01-27T14:30:00Z", "status": "TIMED", "matchday": 19, "stage": "REGULAR_SEASON", "group": null, "lastUpdated": "2024-01-27T00:21:06Z", "homeTeam": { "id": 12, "name": "SV Werder Bremen", "shortName": "Bremen", "tla": "SVW", "crest": "https://crests.football-data.org/12.svg" }, "awayTeam": { "id": 17, "name": "SC Freiburg", "shortName": "Freiburg", "tla": "SCF", "crest": "https://crests.football-data.org/17.svg" }, "score": { "winner": null, "duration": "REGULAR", "fullTime": { "home": null, "away": null }, "halfTime": { "home": null, "away": null } }, "odds": { "msg": "Activate Odds-Package in User-Panel to retrieve odds." }, "referees": []
                    }, {
                        "area": { "id": 2088, "name": "Germany", "code": "DEU", "flag": "https://crests.football-data.org/759.svg" }, "competition":
                            { "id": 2002, "name": "Bundesliga", "code": "BL1", "type": "LEAGUE", "emblem": "https://crests.football-data.org/BL1.png" }, "season": { "id": 1592, "startDate": "2023-08-18", "endDate": "2024-05-18", "currentMatchday": 19, "winner": null }, "id": 441956, "utcDate": "2024-01-27T14:30:00Z", "status": "TIMED", "matchday": 19, "stage": "REGULAR_SEASON", "group": null, "lastUpdated": "2024-01-27T00:21:06Z", "homeTeam": { "id": 11, "name": "VfL Wolfsburg", "shortName": "Wolfsburg", "tla": "WOB", "crest": "https://crests.football-data.org/11.svg" }, "awayTeam": { "id": 1, "name": "1. FC Köln", "shortName": "1. FC Köln", "tla": "KOE", "crest": "https://crests.football-data.org/1.png" }, "score": { "winner": null, "duration": "REGULAR", "fullTime": { "home": null, "away": null }, "halfTime": { "home": null, "away": null } }, "odds": { "msg": "Activate Odds-Package in User-Panel to retrieve odds." }, "referees": []
                    }, {
                        "area": { "id": 2088, "name": "Germany", "code": "DEU", "flag": "https://crests.football-data.org/759.svg" }, "competition": {
                            "id": 2002, "name": "Bundesliga", "code": "BL1", "type": "LEAGUE", "emblem": "https://crests.football-data.org/BL1.png"
                        }, "season": { "id": 1592, "startDate": "2023-08-18", "endDate": "2024-05-18", "currentMatchday": 19, "winner": null }, "id": 441951, "utcDate": "2024-01-27T14:30:00Z", "status": "TIMED", "matchday": 19, "stage": "REGULAR_SEASON", "group": null, "lastUpdated": "2023-12-21T15:20:33Z", "homeTeam": { "id": 16, "name": "FC Augsburg", "shortName": "Augsburg", "tla": "FCA", "crest": "https://crests.football-data.org/16.png" }, "awayTeam": { "id": 5, "name": "FC Bayern München", "shortName": "Bayern", "tla": "FCB", "crest": "https://crests.football-data.org/5.svg" }, "score": { "winner": null, "duration": "REGULAR", "fullTime": { "home": null, "away": null }, "halfTime": { "home": null, "away": null } }, "odds": { "msg": "Activate Odds-Package in User-Panel to retrieve odds." }, "referees": []
                    }, {
                        "area": { "id": 2088, "name": "Germany", "code": "DEU", "flag": "https://crests.football-data.org/759.svg" }, "competition": {
                            "id": 2002, "name": "Bundesliga", "code": "BL1", "type": "LEAGUE", "emblem": "https://crests.football-data.org/BL1.png"
                        }, "season": { "id": 1592, "startDate": "2023-08-18", "endDate": "2024-05-18", "currentMatchday": 19, "winner": null }, "id": 441952, "utcDate": "2024-01-27T14:30:00Z", "status": "TIMED", "matchday": 19, "stage": "REGULAR_SEASON", "group": null, "lastUpdated": "2024-01-27T00:21:06Z", "homeTeam": { "id": 10, "name": "VfB Stuttgart", "shortName": "Stuttgart", "tla": "VFB", "crest": "https://crests.football-data.org/10.png" }, "awayTeam": { "id": 721, "name": "RB Leipzig", "shortName": "RB Leipzig", "tla": "RBL", "crest": "https://crests.football-data.org/721.png" }, "score": { "winner": null, "duration": "REGULAR", "fullTime": { "home": null, "away": null }, "halfTime": { "home": null, "away": null } }, "odds": { "msg": "Activate Odds-Package in User-Panel to retrieve odds." }, "referees": []
                    }, {
                        "area": { "id": 2088, "name": "Germany", "code": "DEU", "flag": "https://crests.football-data.org/759.svg" }, "competition": {
                            "id": 2002, "name": "Bundesliga", "code": "BL1", "type": "LEAGUE", "emblem": "https://crests.football-data.org/BL1.png"
                        }, "season": { "id": 1592, "startDate": "2023-08-18", "endDate": "2024-05-18", "currentMatchday": 19, "winner": null }, "id": 441958, "utcDate": "2024-01-27T14:30:00Z", "status": "TIMED", "matchday": 19, "stage": "REGULAR_SEASON", "group": null, "lastUpdated": "2023-12-21T15:20:33Z", "homeTeam": { "id": 2, "name": "TSG 1899 Hoffenheim", "shortName": "Hoffenheim", "tla": "TSG", "crest": "https://crests.football-data.org/2.png" }, "awayTeam": { "id": 44, "name": "1. FC Heidenheim 1846", "shortName": "Heidenheim", "tla": "HEI", "crest": "https://crests.football-data.org/44.svg" }, "score": { "winner": null, "duration": "REGULAR", "fullTime": { "home": null, "away": null }, "halfTime": { "home": null, "away": null } }, "odds": { "msg": "Activate Odds-Package in User-Panel to retrieve odds." }, "referees": []
                    }, {
                        "area": { "id": 2072, "name": "England", "code": "ENG", "flag": "https://crests.football-data.org/770.svg" }, "competition":
                            { "id": 2016, "name": "Championship", "code": "ELC", "type": "LEAGUE", "emblem": "https://crests.football-data.org/ELC.png" }, "season": { "id": 1573, "startDate": "2023-08-04", "endDate": "2024-05-04", "currentMatchday": 29, "winner": null }, "id": 437011, "utcDate": "2024-01-27T15:00:00Z", "status": "TIMED", "matchday": 29, "stage": "REGULAR_SEASON", "group": null, "lastUpdated": "2023-08-02T16:20:27Z", "homeTeam": { "id": 71, "name": "Sunderland AFC", "shortName": "Sunderland", "tla": "SUN", "crest": "https://crests.football-data.org/71.png" }, "awayTeam": { "id": 70, "name": "Stoke City FC", "shortName": "Stoke", "tla": "STK", "crest": "https://crests.football-data.org/70.png" }, "score": { "winner": null, "duration": "REGULAR", "fullTime": { "home": null, "away": null }, "halfTime": { "home": null, "away": null } }, "odds": { "msg": "Activate Odds-Package in User-Panel to retrieve odds." }, "referees": []
                    }, {
                        "area": { "id": 2072, "name": "England", "code": "ENG", "flag": "https://crests.football-data.org/770.svg" }, "competition": {
                            "id": 2016, "name": "Championship", "code": "ELC", "type": "LEAGUE", "emblem": "https://crests.football-data.org/ELC.png"
                        }, "season": { "id": 1573, "startDate": "2023-08-04", "endDate": "2024-05-04", "currentMatchday": 29, "winner": null }, "id": 437015, "utcDate": "2024-01-27T15:00:00Z", "status": "TIMED", "matchday": 29, "stage": "REGULAR_SEASON", "group": null, "lastUpdated": "2023-08-02T16:20:27Z", "homeTeam": { "id": 384, "name": "Millwall FC", "shortName": "Millwall", "tla": "MIL", "crest": "https://crests.football-data.org/384.png" }, "awayTeam": { "id": 1081, "name": "Preston North End FC", "shortName": "Preston NE", "tla": "PNE", "crest": "https://crests.football-data.org/1081.png" }, "score": { "winner": null, "duration": "REGULAR", "fullTime": { "home": null, "away": null }, "halfTime": { "home": null, "away": null } }, "odds": { "msg": "Activate Odds-Package in User-Panel to retrieve odds." }, "referees": []
                    }, {
                        "area": { "id": 2224, "name": "Spain", "code": "ESP", "flag": "https://crests.football-data.org/760.svg" }, "competition": {
                            "id": 2014, "name": "Primera Division", "code": "PD", "type": "LEAGUE", "emblem": "https://crests.football-data.org/PD.png"
                        }, "season": { "id": 1577, "startDate": "2023-08-13", "endDate": "2024-05-26", "currentMatchday": 22, "winner": null }, "id": 438693, "utcDate": "2024-01-27T15:15:00Z", "status": "TIMED", "matchday": 22, "stage": "REGULAR_SEASON", "group": null, "lastUpdated": "2024-01-27T00:21:06Z", "homeTeam": { "id": 275, "name": "UD Las Palmas", "shortName": "Las Palmas", "tla": "LPA", "crest": "https://crests.football-data.org/275.png" }, "awayTeam": { "id": 86, "name": "Real Madrid CF", "shortName": "Real Madrid", "tla": "RMA", "crest": "https://crests.football-data.org/86.png" }, "score": { "winner": null, "duration": "REGULAR", "fullTime": { "home": null, "away": null }, "halfTime": { "home": null, "away": null } }, "odds": { "msg": "Activate Odds-Package in User-Panel to retrieve odds." }, "referees": []
                    }, {
                        "area": { "id": 2081, "name": "France", "code": "FRA", "flag": "https://crests.football-data.org/773.svg" }, "competition": {
                            "id": 2015, "name": "Ligue 1", "code": "FL1", "type": "LEAGUE", "emblem": "https://crests.football-data.org/FL1.png"
                        }, "season": { "id": 1595, "startDate": "2023-08-13", "endDate": "2024-05-18", "currentMatchday": 19, "winner": null }, "id": 442873, "utcDate": "2024-01-27T16:00:00Z", "status": "TIMED", "matchday": 19, "stage": "REGULAR_SEASON", "group": null, "lastUpdated": "2023-12-26T15:21:05Z", "homeTeam": { "id": 522, "name": "OGC Nice", "shortName": "Nice", "tla": "NIC", "crest": "https://crests.football-data.org/522.png" }, "awayTeam": { "id": 545, "name": "FC Metz", "shortName": "FC Metz", "tla": "FCM", "crest": "https://crests.football-data.org/545.svg" }, "score": { "winner": null, "duration": "REGULAR", "fullTime": { "home": null, "away": null }, "halfTime": { "home": null, "away": null } }, "odds": { "msg": "Activate Odds-Package in User-Panel to retrieve odds." }, "referees": []
                    }, {
                        "area": { "id": 2114, "name": "Italy", "code": "ITA", "flag": "https://crests.football-data.org/784.svg" }, "competition": {
                            "id": 2019, "name": "Serie A", "code": "SA", "type": "LEAGUE", "emblem": "https://crests.football-data.org/SA.png"
                        }, "season": { "id": 1600, "startDate": "2023-08-19", "endDate": "2024-05-26", "currentMatchday": 22, "winner": null }, "id": 444469, "utcDate": "2024-01-27T17:00:00Z", "status": "TIMED", "matchday": 22, "stage": "REGULAR_SEASON", "group": null, "lastUpdated": "2024-01-27T00:21:06Z", "homeTeam": { "id": 109, "name": "Juventus FC", "shortName": "Juventus", "tla": "JUV", "crest": "https://crests.football-data.org/109.svg" }, "awayTeam": { "id": 445, "name": "Empoli FC", "shortName": "Empoli", "tla": "EMP", "crest": "https://crests.football-data.org/445.png" }, "score": { "winner": null, "duration": "REGULAR", "fullTime": { "home": null, "away": null }, "halfTime": { "home": null, "away": null } }, "odds": { "msg": "Activate Odds-Package in User-Panel to retrieve odds." }, "referees": []
                    }, {
                        "area": { "id": 2224, "name": "Spain", "code": "ESP", "flag": "https://crests.football-data.org/760.svg" }, "competition": {
                            "id": 2014, "name": "Primera Division", "code": "PD", "type": "LEAGUE", "emblem": "https://crests.football-data.org/PD.png"
                        }, "season": { "id": 1577, "startDate": "2023-08-13", "endDate": "2024-05-26", "currentMatchday": 22, "winner": null }, "id": 438686, "utcDate": "2024-01-27T17:30:00Z", "status": "TIMED", "matchday": 22, "stage": "REGULAR_SEASON", "group": null, "lastUpdated": "2024-01-09T20:21:20Z", "homeTeam": { "id": 81, "name": "FC Barcelona", "shortName": "Barça", "tla": "FCB", "crest": "https://crests.football-data.org/81.svg" }, "awayTeam": { "id": 94, "name": "Villarreal CF", "shortName": "Villarreal", "tla": "VIL", "crest": "https://crests.football-data.org/94.png" }, "score": { "winner": null, "duration": "REGULAR", "fullTime": { "home": null, "away": null }, "halfTime": { "home": null, "away": null } }, "odds": { "msg": "Activate Odds-Package in User-Panel to retrieve odds." }, "referees": []
                    }, {
                        "area": { "id": 2088, "name": "Germany", "code": "DEU", "flag": "https://crests.football-data.org/759.svg" }, "competition": {
                            "id": 2002, "name": "Bundesliga", "code": "BL1", "type": "LEAGUE", "emblem": "https://crests.football-data.org/BL1.png"
                        }, "season": { "id": 1592, "startDate": "2023-08-18", "endDate": "2024-05-18", "currentMatchday": 19, "winner": null }, "id": 441955, "utcDate": "2024-01-27T17:30:00Z", "status": "TIMED", "matchday": 19, "stage": "REGULAR_SEASON", "group": null, "lastUpdated": "2023-12-21T15:20:33Z", "homeTeam": { "id": 3, "name": "Bayer 04 Leverkusen", "shortName": "Leverkusen", "tla": "B04", "crest": "https://crests.football-data.org/3.png" }, "awayTeam": { "id": 18, "name": "Borussia Mönchengladbach", "shortName": "M'gladbach", "tla": "BMG", "crest": "https://crests.football-data.org/18.png" }, "score": { "winner": null, "duration": "REGULAR", "fullTime": { "home": null, "away": null }, "halfTime": { "home": null, "away": null } }, "odds": { "msg": "Activate Odds-Package in User-Panel to retrieve odds." }, "referees": []
                    }, {
                        "area": { "id": 2163, "name": "Netherlands", "code": "NLD", "flag": "https://crests.football-data.org/8601.svg" }, "competition":
                            { "id": 2003, "name": "Eredivisie", "code": "DED", "type": "LEAGUE", "emblem": "https://crests.football-data.org/ED.png" }, "season": { "id": 1590, "startDate": "2023-08-11", "endDate": "2024-05-19", "currentMatchday": 19, "winner": null }, "id": 441645, "utcDate": "2024-01-27T17:45:00Z", "status": "TIMED", "matchday": 19, "stage": "REGULAR_SEASON", "group": null, "lastUpdated": "2023-07-06T16:20:06Z", "homeTeam": { "id": 683, "name": "RKC Waalwijk", "shortName": "RKC", "tla": "RKC", "crest": "https://crests.football-data.org/683.png" }, "awayTeam": { "id": 6806, "name": "Sparta Rotterdam", "shortName": "Sparta", "tla": "SPA", "crest": "https://crests.football-data.org/6806.png" }, "score": { "winner": null, "duration": "REGULAR", "fullTime": { "home": null, "away": null }, "halfTime": { "home": null, "away": null } }, "odds": { "msg": "Activate Odds-Package in User-Panel to retrieve odds." }, "referees": []
                    }, {
                        "area": { "id": 2163, "name": "Netherlands", "code": "NLD", "flag": "https://crests.football-data.org/8601.svg" }, "competition":
                            { "id": 2003, "name": "Eredivisie", "code": "DED", "type": "LEAGUE", "emblem": "https://crests.football-data.org/ED.png" }, "season": {
                                "id": 1590, "startDate": "2023-08-11", "endDate": "2024-05-19", "currentMatchday": 19, "winner": null
                            }, "id": 441646, "utcDate": "2024-01-27T17:45:00Z",
                        "status": "TIMED", "matchday": 19, "stage": "REGULAR_SEASON", "group": null, "lastUpdated": "2023-07-06T16:20:06Z", "homeTeam": { "id": 674, "name": "PSV", "shortName": "PSV", "tla": "PSV", "crest": "https://crests.football-data.org/674.png" }, "awayTeam": { "id": 1911, "name": "Almere City FC", "shortName": "Almere City", "tla": "ALM", "crest": "https://crests.football-data.org/1911.png" }, "score": { "winner": null, "duration": "REGULAR", "fullTime": { "home": null, "away": null }, "halfTime": { "home": null, "away": null } }, "odds": { "msg": "Activate Odds-Package in User-Panel to retrieve odds." }, "referees": []
                    }, {
                        "area": { "id": 2114, "name": "Italy", "code": "ITA", "flag": "https://crests.football-data.org/784.svg" }, "competition":
                            { "id": 2019, "name": "Serie A", "code": "SA", "type": "LEAGUE", "emblem": "https://crests.football-data.org/SA.png" }, "season": { "id": 1600, "startDate": "2023-08-19", "endDate": "2024-05-26", "currentMatchday": 22, "winner": null }, "id": 444471, "utcDate": "2024-01-27T19:45:00Z", "status": "TIMED", "matchday": 22, "stage": "REGULAR_SEASON", "group": null, "lastUpdated": "2023-12-26T15:21:05Z", "homeTeam": { "id": 98, "name": "AC Milan", "shortName": "Milan", "tla": "MIL", "crest": "https://crests.football-data.org/98.svg" }, "awayTeam": { "id": 103, "name": "Bologna FC 1909", "shortName": "Bologna", "tla": "BOL", "crest": "https://crests.football-data.org/103.svg" }, "score": { "winner": null, "duration": "REGULAR", "fullTime": { "home": null, "away": null }, "halfTime": { "home": null, "away": null } }, "odds": { "msg": "Activate Odds-Package in User-Panel to retrieve odds." }, "referees": []
                    }, {
                        "area": { "id": 2163, "name": "Netherlands", "code": "NLD", "flag": "https://crests.football-data.org/8601.svg" }, "competition":
                            { "id": 2003, "name": "Eredivisie", "code": "DED", "type": "LEAGUE", "emblem": "https://crests.football-data.org/ED.png" }, "season": { "id": 1590, "startDate": "2023-08-11", "endDate": "2024-05-19", "currentMatchday": 19, "winner": null }, "id": 441647, "utcDate": "2024-01-27T20:00:00Z", "status": "TIMED", "matchday": 19, "stage": "REGULAR_SEASON", "group": null, "lastUpdated": "2023-07-06T16:20:06Z", "homeTeam": { "id": 670, "name": "SBV Excelsior", "shortName": "Excelsior", "tla": "EXC", "crest": "https://crests.football-data.org/670.png" }, "awayTeam": { "id": 676, "name": "FC Utrecht", "shortName": "Utrecht", "tla": "UTR", "crest": "https://crests.football-data.org/676.png" }, "score": { "winner": null, "duration": "REGULAR", "fullTime": { "home": null, "away": null }, "halfTime": { "home": null, "away": null } }, "odds": { "msg": "Activate Odds-Package in User-Panel to retrieve odds." }, "referees": []
                    }, {
                        "area": { "id": 2163, "name": "Netherlands", "code": "NLD", "flag": "https://crests.football-data.org/8601.svg" }, "competition":
                            { "id": 2003, "name": "Eredivisie", "code": "DED", "type": "LEAGUE", "emblem": "https://crests.football-data.org/ED.png" }, "season": { "id": 1590, "startDate": "2023-08-11", "endDate": "2024-05-19", "currentMatchday": 19, "winner": null }, "id": 441648, "utcDate": "2024-01-27T20:00:00Z", "status": "TIMED", "matchday": 19, "stage": "REGULAR_SEASON", "group": null, "lastUpdated": "2024-01-27T00:21:06Z", "homeTeam": { "id": 671, "name": "Heracles Almelo", "shortName": "Heracles", "tla": "HER", "crest": "https://crests.football-data.org/671.png" }, "awayTeam": { "id": 678, "name": "AFC Ajax", "shortName": "Ajax", "tla": "AJA", "crest": "https://crests.football-data.org/678.png" }, "score": { "winner": null, "duration": "REGULAR", "fullTime": { "home": null, "away": null }, "halfTime": { "home": null, "away": null } }, "odds": { "msg": "Activate Odds-Package in User-Panel to retrieve odds." }, "referees": []
                    }, {
                        "area": { "id": 2081, "name": "France", "code": "FRA", "flag": "https://crests.football-data.org/773.svg" }, "competition":
                            { "id": 2015, "name": "Ligue 1", "code": "FL1", "type": "LEAGUE", "emblem": "https://crests.football-data.org/FL1.png" }, "season": { "id": 1595, "startDate": "2023-08-13", "endDate": "2024-05-18", "currentMatchday": 19, "winner": null }, "id": 442874, "utcDate": "2024-01-27T20:00:00Z", "status": "TIMED", "matchday": 19, "stage": "REGULAR_SEASON", "group": null, "lastUpdated": "2023-12-26T15:21:05Z", "homeTeam": { "id": 516, "name": "Olympique de Marseille", "shortName": "Marseille", "tla": "MAR", "crest": "https://crests.football-data.org/516.png" }, "awayTeam": { "id": 548, "name": "AS Monaco FC", "shortName": "Monaco", "tla": "ASM", "crest": "https://crests.football-data.org/548.png" }, "score": { "winner": null, "duration": "REGULAR", "fullTime": { "home": null, "away": null }, "halfTime": { "home": null, "away": null } }, "odds": { "msg": "Activate Odds-Package in User-Panel to retrieve odds." }, "referees": []
                    }, {
                        "area": { "id": 2224, "name": "Spain", "code": "ESP", "flag": "https://crests.football-data.org/760.svg" }, "competition": { "id": 2014, "name": "Primera Division", "code": "PD", "type": "LEAGUE", "emblem": "https://crests.football-data.org/PD.png" }, "season": { "id": 1577, "startDate": "2023-08-13", "endDate": "2024-05-26", "currentMatchday": 22, "winner": null }, "id": 438690, "utcDate": "2024-01-27T20:00:00Z", "status": "TIMED", "matchday": 22, "stage": "REGULAR_SEASON", "group": null, "lastUpdated": "2024-01-09T20:21:20Z", "homeTeam": { "id": 89, "name": "RCD Mallorca", "shortName": "Mallorca", "tla": "MAL", "crest": "https://crests.football-data.org/89.png" }, "awayTeam": { "id": 90, "name": "Real Betis Balompié", "shortName": "Real Betis", "tla": "BET", "crest": "https://crests.football-data.org/90.png" }, "score": {
                            "winner": null, "duration": "REGULAR", "fullTime": { "home": null, "away": null }, "halfTime":
                                { "home": null, "away": null }
                        }, "odds": { "msg": "Activate Odds-Package in User-Panel to retrieve odds." }, "referees": []
                    }]
            }

            return of(new HttpResponse({ status: 200, body: mockResponse }));
        }

        return next.handle(request);
    }
}
