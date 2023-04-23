import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Match } from '../FootballDataService';




@Component({
  selector: 'app-betslip',
  templateUrl: './betslip.component.html',
  styleUrls: ['./betslip.component.css']
})
export class BetslipComponent {
  displayedColumns: string[] = ['fixture', 'odds', 'remove'];
  bets: Bet[] = [];
  
  totalStake = this.getTotalStake();
  totalReturn = this.getTotalOdds();

  addBet(id: number,  match: Match, matchdate: Date, betvalue: number, prediction : string,
    stake: number, odd: number, result = undefined, profit = undefined): void {
    this.bets.push(new Bet(id, match, matchdate, prediction, betvalue, stake, odd, result, profit));
  }

  removeBet(index: number): void {
    this.bets.splice(index, 1);
  }

  getTotalStake(): number {
    return this.bets.reduce((total, bet) => total + bet.stake, 0);
  }

  getTotalOdds(): number {
    return this.bets.reduce((total, bet) => total * bet.odd, 1);
  }

  getTotalPotentialWin(): number {
    return this.getTotalStake() * this.getTotalOdds();
  }

}

export class Bet {
  constructor(
    public id: number,
    public match: Match,
    public matchDate: Date,
    public prediction: string,
    public betValue: number,
    public stake: number,
    public odd: number,
    public result?: string,
    public profit?: number
  ) { 
    id = 1;
    prediction = match.homeTeam.shortName + match.awayTeam.shortName;
    matchDate = new Date('yyyy/MM/dd HH:mm');
    betValue = 1.3;
    odd = this.odd;
    result = undefined;
    profit = undefined;
  }
}
