import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Training } from '../models/training';
import { CategoriesService } from '../_services/categories.service';
import { TrainingService } from '../_services/training.service';
import { TokenStorageService } from '../_services/token-storage.service';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  loaded!: boolean;
  constructor( private categorieservice:CategoriesService, private trainingservice : TrainingService,private router:Router, private tokenStorage: TokenStorageService) { }
  items!:any;
  trainings:any;
  Ttrainings:Array<any>=new Array<any>();
  T!:Training;
  i!:number;
  formations!:any;
 result:Array<any>=new Array<any>();
 Tab:Array<any>=new Array<any>();
  ngOnInit(): void {
    this.getCategories();
    this.getTraining();
    console.log(this.Ttrainings);
    this.i=0;
    console.log(this.result)
    console.log(this.formations)
  }
  getTraining(){
    this.trainingservice.getTraining('http://127.0.0.1:8000/api/training/')
      .subscribe(
        items => {
  
          this.formations=items;
          console.log(this.formations)
          // this.result.push(this.trainings.results);
          // this.Ttrainings.push(this.trainings);
          this.i=this.i+1;
        }
      )
  }

  toDetail(obj:any){
    localStorage.removeItem('formation');
    localStorage.setItem('formation',JSON.stringify(obj));
    this.router.navigate(['/detail-formation']);

  }
  getCategories(){
    this.loaded=false;
    this.categorieservice.getCategories('http://127.0.0.1:8000/api/categories/')
    .subscribe(
      items => {
        this.items=items;
        this.loaded=true;
      }
    );
  }

}
