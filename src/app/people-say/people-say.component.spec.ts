import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsComponent } from './people-say.component';

describe('PeopleSayComponent', () => {
  let component: ReviewsComponent;
  let fixture: ComponentFixture<ReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewsComponent]
    });
    fixture = TestBed.createComponent(ReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
