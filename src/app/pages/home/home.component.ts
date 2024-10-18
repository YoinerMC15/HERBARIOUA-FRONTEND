import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import { TopbarComponent } from '../../layout/topbar/topbar.component';
import { FooterComponent } from '../../layout/footer/footer.component';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
