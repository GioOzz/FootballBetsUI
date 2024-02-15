import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { FootballDataService } from '../FootballDataService';
import { ThemeService } from '../ThemeService';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css'],
})

export class MatchesComponent implements OnInit, AfterViewInit {

  ngOnInit(): void {
    this.getMatches();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  themeService: ThemeService;
  dataSource: MatTableDataSource<any>;
  displayedColumns = ['competition', 'utcDate', 'match'];

  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(themeService: ThemeService, private footballDataService: FootballDataService, private cdr: ChangeDetectorRef) {
    this.dataSource = new MatTableDataSource();
    this.themeService = themeService;
  }
  getMatches() {
    this.footballDataService.getMatches().subscribe({
      next: (data: any) => {
        console.log(data)
        this.dataSource = new MatTableDataSource(data.matches);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err: any) => {
        console.error('Error fetching matches:', err);
      }
    });
  }
  onPageChange(event: PageEvent) {
    this.paginator.pageIndex = event.pageIndex;
    this.paginator.pageSize = event.pageSize;
    console.log('Page changed:', event);
  }

  getRangeLabel(page: number, pageSize: number, length: number): string {
    const start = page * pageSize + 1;
    const end = (page + 1) * pageSize > length ? length : (page + 1) * pageSize;
    return `${start} - ${end} of ${length}`;
  }

  isDarkTheme(): boolean {
    return this.themeService.darkModeEnabled;
  }
}

export interface Match {
  area: {
    id: number;
    name: string;
    code: string;
    flag: string;
  };
  competition: {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem: string;
  };
  season: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: null;
  };
  id: number;
  utcDate: string;
  status: string;
  matchday: number;
  stage: string;
  group: null;
  lastUpdated: string;
  homeTeam: {
    id: number;
    name: string;
    shortName: string;
    tla: null;
    crest: string;
  };
  awayTeam: {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
  };
  score: {
    winner: string;
    duration: string;
    fullTime: {
      home: number;
      away: number;
    };
    halfTime: {
      home: number;
      away: number;
    };
  };
  odds: {
    msg: string;
  };
  referees: [];
}