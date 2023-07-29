import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {

  currentUser: any;
  constructor(private token: TokenStorageService) { }
  ngOnInit(): void {
    this.currentUser=this.token.getinfo();
    console.log(this.token.getinfo())
  }

}
