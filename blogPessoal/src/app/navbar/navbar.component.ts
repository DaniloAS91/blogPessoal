import { environment } from './../../environments/environment.prod';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { OrderModule } from 'ngx-order-pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { faUser, faNewspaper, faClipboard, faTimesCircle, faMap, faAddressCard, faFlag } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showFiller = false;

  constructor(
    private router: Router,
    public auth: AuthService
    ) { }

    faUser = faUser
    faNewspaper = faNewspaper
    faClipboard = faClipboard
    faTimesCircle = faTimesCircle
    faMap = faMap
    faAddressCard = faAddressCard
    faFlag = faFlag


  ngOnInit(): void{
  }

  sair(){
    this.router.navigate(['/login']);
    environment.token = ''
  }
}

