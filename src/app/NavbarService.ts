import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {  
  private activeItemSubject = new BehaviorSubject<string>('home');
  public activeItem$ = this.activeItemSubject.asObservable();

  setActiveItem(item: string) {
    this.activeItemSubject.next(item);
  }
}
