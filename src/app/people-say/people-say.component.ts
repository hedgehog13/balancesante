import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../services/review.service';


@Component({
  selector: 'app-reviews',
  templateUrl: './people-say.component.html',
})
export class ReviewsComponent implements OnInit {
  reviews: any = [];

  constructor(private reviewService: ReviewService) {}

  ngOnInit() {
    this.reviewService.getReviews().subscribe((data: any) => {
      console.log(data)
      this.reviews = data.reviews;
    });
  }
}
