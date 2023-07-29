import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from '../models/categories';
import { CategoriesService } from '../_services/categories.service';

@Component({
  selector: 'app-detail-formation',
  templateUrl: './detail-formation.component.html',
  styleUrls: ['./detail-formation.component.css']
})
export class DetailFormationComponent implements OnInit {

  
  constructor(private categorieservice: CategoriesService,private router:Router) { }
  training!:any;
  categorie= new Categories();
  items:any;
  Tformations:any;
  ngOnInit(): void {
    const retrieve=localStorage.getItem('formation');
    // @ts-ignore
    this.training=JSON.parse(retrieve);
    console.log(this.training);
    //const fav =this.favoris.addTofav(this.training);
    this.getTrainingTag();
  }
  getTrainingTag(){
    this.categorieservice.getCategories('http://127.0.0.1:8000/api/training/')
      .subscribe(
        items => {
          this.items=items;
          // @ts-ignore
          this.Tformations=this.items.filter((item) => item.category == this.training.category);
          console.log(this.Tformations);
        }
      );
  }
  gotopage(){
    this.router.navigate(['/registration']);
  }
}
