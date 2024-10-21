import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiKey = 'AIzaSyDT93VAjeA0ExTe-UTl7Tj8Dtb-iNO8p0w';
  private PLACE_ID='ChIJC1WO_-8pyUwRdfDWd6cDsb4';; // Your business's Place ID
  private accid='534376873748'
  private url = `https://mybusiness.googleapis.com/v4/accounts/${this.accid}/locations/${this.PLACE_ID}/reviews?key=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  getReviews() {
    return this.http.get(this.url);
  }
}