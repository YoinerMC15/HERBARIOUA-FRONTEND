import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Importación de componentes de layout
import { TopbarComponent } from '../../layout/topbar/topbar.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TopbarComponent,
    FooterComponent,
    SidebarComponent,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  containerClass: string = '';  // Definimos la propiedad 'containerClass' con un valor inicial
}
