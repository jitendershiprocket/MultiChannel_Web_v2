import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private token;
  apiBaseUrl = "http://multichannel1.api/";
  constructor(private http: HttpClient) {
    this.token = localStorage.satellizer_token;
   }

  getQueryParam(obj): HttpParams {
    let search = new HttpParams();
    for (let key in obj) {
      search = search.set(key, obj[key]);
    }
    return search;
  }

  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return headers;
  }
  

  getRoleType(contentType) {
      this.getHeaders()['Role-Type'] = typeof localStorage.USER != 'undefined' ? localStorage.USER.role_type : '';
      this.getHeaders()['Content-Type'] = typeof contentType == 'undefined' ? undefined : contentType;
  };


  /**
   * 
   * @param apiURL 
   * @param data Body for post
   * @param params Request Params
   */
  post(apiURL, body, params?: {}) {
    let paramsData = this.getQueryParam(params);
    let CompleteURL = `${this.apiBaseUrl}` + apiURL;
    return this.http.post(CompleteURL, body, { params: paramsData, headers: this.getHeaders(), withCredentials: true });
  }

  get(apiURL, params?: {}) {
    let paramsData = this.getQueryParam(params);
    let CompleteURL = `${this.apiBaseUrl}` + apiURL;
    return this.http.get(CompleteURL, { params: paramsData, headers: this.getHeaders(), withCredentials: true });
  }

  put(apiURL, body, params?: {}) {
    let paramsData = this.getQueryParam(params);
    let CompleteURL = `${this.apiBaseUrl}` + apiURL;
    return this.http.put(CompleteURL, body, { params: paramsData, headers: this.getHeaders(), withCredentials: true })
  }

  patch(apiURL, body, params?: {}) {
    let paramsData = this.getQueryParam(params);
    let CompleteURL = `${this.apiBaseUrl}` + apiURL;
    return this.http.patch(CompleteURL, body, { params: paramsData, headers: this.getHeaders(), withCredentials: true });
  }

  importFile(data, url) {
    this.getRoleType("");
    return this.http.post(`${this.apiBaseUrl}` + url, data, {
        headers: this.token
    });
};

}
