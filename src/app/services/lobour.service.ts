import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LobourService {
  url: string = 'http://localhost:3000/labour';
  constructor(private http: HttpClient) { }
  public getLabour() {
    return this.http.get(this.url);
  }
  public getLabourById(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  public addLabour(labourObject: any) {
    return this.http.post(this.url, labourObject);
  }
  public removeLabour(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  public editLabour(id: number, labourObject: any) {
    return this.http.put(`${this.url}/${id}`, labourObject);
  }

}
