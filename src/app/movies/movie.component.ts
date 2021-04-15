import {Component} from "@angular/core";

@Component({
    selector:'mov-app',
    templateUrl:'./movie.component.html',
    styleUrls:['movie.component.css']
})
export class MovieComponent
{
    movieId:string="MOO1";
    movieName:string="Soul";
    movieGenre:string="Animated";
    movieStar:string="Tom hank"
}