import { Component, Input } from "@angular/core";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.css"]
})
export class RatingComponent {
  @Input() activeStars: number;
  @Input() actualCategory:string;
  @Input() actualMovieId:string;
  stars = [1, 2, 3, 4, 5];


  onStarClick(index: number, actualCategory, actualMovieId) {
    this.setStar(index, actualCategory, actualMovieId);
  }

  private setStar(starNum, category, mId) {
    this.activeStars = starNum + 1;
    console.log(category);
    console.log(mId)
  }

}
