import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private dataSubject = new BehaviorSubject<boolean>(false);
  private postDataSubject = new BehaviorSubject<any>(false);
  isUserLoggedIn$ = this.dataSubject.asObservable();
  postData$ = this.postDataSubject.asObservable();

  constructor() { }

  updateData(newData: boolean) {
    this.dataSubject.next(newData);
  }

  updatePostData(data: any) {
    this.postDataSubject.next(data);
  }
}
