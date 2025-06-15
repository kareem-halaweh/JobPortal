import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-hero',

  imports: [
    RouterLink,
    NgIf,


  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {

  userRole: number | null = null;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {

    this.userRole = this.authService.getUserRoleId();
  }
}
