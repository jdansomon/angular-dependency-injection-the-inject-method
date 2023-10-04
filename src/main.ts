import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
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
    <h3>User list</h3>

    <div *ngFor="let user of data; let i = index">
    <h4>User {{i + 1}}</h4>
    <p><strong>First Name:</strong> {{user.first_name}}</p>
    <p><strong>Last Name:</strong> {{user.last_name}}</p>
    
    <!-- You can add additional fields to display if required -->
    <p *ngIf="user.position"><strong>Position:</strong> {{user.position}}</p>
    <p *ngIf="user.team"><strong>Team:</strong> {{user.team.name}}</p> <!-- Assuming team has a name property -->
    
    <!-- You can use *ngIf to conditionally display data that might be null -->
    <p *ngIf="user.height_feet"><strong>Height (feet):</strong> {{user.height_feet}}</p>
    <p *ngIf="user.height_inches"><strong>Height (inches):</strong> {{user.height_inches}}</p>
    <p *ngIf="user.weight_pounds"><strong>Weight (pounds):</strong> {{user.weight_pounds}}</p>

    <!-- Separator -->
    <hr *ngIf="i < data.length - 1"> <!-- Avoid adding a separator after the last user -->
</div>



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
