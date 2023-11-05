import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Filters, FootballDataService, Match } from '../FootballDataService';
import { ThemeService } from '../ThemeService';
import { MatRowDef } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


const numDays = 2;
const todayString = new Date(new Date().getTime()).toISOString().substring(0, 10).slice(0, 10);
const nextWeekString = new Date(new Date().getTime() + (numDays * 24 * 60 * 60 * 1000)).toISOString().substring(0, 10).slice(0, 10);

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  themeService: ThemeService;
  matchesByCompetition = new Map<string, Match[]>();
  displayedColumns: string[];
  dataSource = new MatTableDataSource<Match>([]);
  filters: Filters = {
    dateFrom: todayString,
    dateTo: nextWeekString,
    permission: 'TIER_ONE',
    competitions: 'PL,SA,FL1,BL1,PD,CL'
  };

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private footballDataService: FootballDataService, private _themeService: ThemeService) {
    this.themeService = _themeService;
    this.displayedColumns = ['competition', 'utcDate', 'match'];

  }

  ngOnInit(): void {
    //if (localStorage.length == 0) { alert("User not logged, please log in"); return; }
    // this.footballDataService.getMatches(this.filters).subscribe(data => {
    //   let allMatches: Match[] = [];
    //   data.forEach((value: Match[], key: string) => {
    //     allMatches = allMatches.concat(value);
    //   });
    //   this.dataSource = new MatTableDataSource(allMatches);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    //   this.paginator._intl.itemsPerPageLabel = 'Matches per page:';
    //   this.paginator._intl.getRangeLabel = this.getRangeLabel;
    //   this.paginator.pageSize = 10;
    // });
    //alert("ngOnInit matches.component");
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  onPageChange(event: PageEvent) {
    this.paginator.pageIndex = event.pageIndex;
    this.paginator.pageSize = event.pageSize;
  }
  getRangeLabel(page: number, pageSize: number, length: number) {
    const start = page * pageSize + 1;
    const end = (page + 1) * pageSize > length ? length : (page + 1) * pageSize;
    return `${start} - ${end} of ${length}`;
  }
}