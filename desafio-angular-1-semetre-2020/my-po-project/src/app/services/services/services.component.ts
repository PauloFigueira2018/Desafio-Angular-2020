import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ActivitiesComponent } from '../../activities/activities.component';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent implements OnInit {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  apiUrl = 'http://localhost:3000/activities/';
  
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
  }

  getActivities(done: string, page: number): Observable<ActivitiesComponent[]> {
    const params = new HttpParams()
    .append('done', done)
    .append('tpage', page.toString())
    .append('ttam', '10')
    return this.http.get<ActivitiesComponent[]>(this.apiUrl, {params: params})
  }

  getActivitiesID(id: string){
  return this.http.
  get(this.apiUrl.concat(id.toString())).pipe(take(1));
  }

  postActivities(atividades){
    return this.http.
    post(this.apiUrl, atividades).pipe(take(1));
  }

  putActivities(data: any, id: string){
    return this.http.
    put(this.apiUrl.concat(id.toString()),data).pipe(take(1));
  }

  deleteActivities(id: string){
    return this.http.
    delete(this.apiUrl.concat(id.toString())).pipe(take(1));
  }
}
