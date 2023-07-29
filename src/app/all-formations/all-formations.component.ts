import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from '../models/categories';
import { CategoriesService } from '../_services/categories.service';

@Component({
  selector: 'app-all-formations',
  templateUrl: './all-formations.component.html',
  styleUrls: ['./all-formations.component.css']
})
export class AllFormationsComponent implements OnInit {
  constructor(private categorieservice: CategoriesService,private router:Router) { }
  Tformation:any;
  categorie= new Categories();
  items:any;
  formation:any;
  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
    this.categorieservice.getCategories('http://127.0.0.1:8000/api/training/')
      .subscribe(
        items => {
          this.Tformation=items
          console.log(this.Tformation);
        }
      );
  }
  toPage(obj:any){
    localStorage.setItem('formation',JSON.stringify(obj));
    this.router.navigate(['/detail-formation']);

  }
}
