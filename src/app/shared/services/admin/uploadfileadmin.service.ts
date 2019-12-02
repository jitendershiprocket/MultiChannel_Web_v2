import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { API_ENDPOINT } from '../api-endpoint';

@Injectable({
  providedIn: 'root'
})
export class UploadfileadminService {

  constructor(private http: HttpClient) { }

  uploadFileService(body, uploadUrl) {

    return Observable.create(observer => {
      var ApiPath = API_ENDPOINT.BASE_PATH + uploadUrl;
        this.http.post( ApiPath, body)
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
