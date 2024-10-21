import { Component } from '@angular/core';

@Component({
  selector: 'app-rate-us',
  templateUrl: './rate-us.component.html',
  styleUrls: ['./rate-us.component.css']
})
export class RateUsComponent {
  stars: number[] = [1, 2, 3, 4, 5]; 
  rating: number = 0; 
  review: string = ''; 
private PLACE_ID='ChIJC1WO_-8pyUwRdfDWd6cDsb4';
  // Function to set the rating based on star selection
  rate(star: number) {
    this.rating = star;
  }

  submitReview() {
    if (this.rating) {
      // Replace this URL with your actual Google Reviews link
      const googleReviewLink = `https://search.google.com/local/writereview?placeid=${this.PLACE_ID}`;
      window.open(googleReviewLink, '_blank');
    }
  }
}

