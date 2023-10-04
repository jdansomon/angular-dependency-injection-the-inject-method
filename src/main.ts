import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MyUserService } from './my-user.service';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://multivers-dev.github.io/angular-cookbook/en/">
      Learn more about Angular CookBook
    </a>
  `,
})
export class App {
  name = 'Angular CookBook';
  data: any[] = [];
  constructor(private userService: MyUserService) {
    this.userService.getUsers().subscribe({
      next: (data: any) => {
        this.data = data.data;
        console.log(this.data);
      },
    });
  }
}

bootstrapApplication(App);
