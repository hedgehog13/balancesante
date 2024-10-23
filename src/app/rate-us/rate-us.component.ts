// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-rate-us',
//   templateUrl: './rate-us.component.html',
//   styleUrls: ['./rate-us.component.css']
// })
// export class RateUsComponent {
//   stars: number[] = [1, 2, 3, 4, 5]; 
//   rating: number = 0; 
//   review: string = ''; 
// private PLACE_ID='ChIJC1WO_-8pyUwRdfDWd6cDsb4';
//   // Function to set the rating based on star selection
//   rate(star: number) {
//     this.rating = star;
//   }

//   submitReview() {
//     if (this.rating) {
//       // Replace this URL with your actual Google Reviews link
//       const googleReviewLink = `https://search.google.com/local/writereview?placeid=${this.PLACE_ID}`;
//       window.open(googleReviewLink, '_blank');
//     }
//   }
// }

import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rate-us',
  templateUrl: './rate-us.component.html',
  styleUrls: ['./rate-us.component.css']
})
export class RateUsComponent {
  stars = [1, 2, 3, 4, 5];
  reviewForm: FormGroup;
  private PLACE_ID='ChIJC1WO_-8pyUwRdfDWd6cDsb4';
   googleReviewLink = `https://search.google.com/local/writereview?placeid=${this.PLACE_ID}`;

   constructor(private fb: FormBuilder) {
    this.reviewForm = this.fb.group({
      name: ['', Validators.required], // Required field
      rating: [null, Validators.required], // Required field
      feedback: ['', Validators.required] // Required field
    });
  }
  selectRating(star: number) {
    this.reviewForm.patchValue({ rating: star });
  }
  onSubmit(): void {
    if (this.reviewForm.valid) {
      // Open the Google Review page
      console.log(this.reviewForm)
      window.open(this.googleReviewLink, '_blank');
    } else {
      alert('Please fill out all fields correctly.');
    }
  }
}