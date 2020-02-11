import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_ENDPOINT } from '../api-endpoint';

@Injectable({
  providedIn: 'root'
})
export class FreshdeskService {

  constructor(private http: HttpClient) {}

    freshdeskService(url) {
      return Observable.create(observer => {
        var ApiPath = API_ENDPOINT.BASE_PATH + url;
        this.http.get(ApiPath)
          .subscribe(data => {
            observer.next(data);
            observer.complete();
          },
            error => {
              observer.next(error);
              observer.complete();
            });
      });
    }

}
