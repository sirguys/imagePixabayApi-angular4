import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageService {
  private query: string;
  private API_key: string = environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;
  private URL: string = this.API_URL + this.API_key + '&q=';
  private perPage: string = '&per_page=10';

  constructor(private _http: Http) { }

  logTest() {
    console.log(this.URL + 'bangkok' + this.perPage);
  }

  getImage(query) {
    return this._http.get(this.URL + query + this.perPage)
      .map(res => res.json());  
  }


}
