import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    standalone: true,
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

   
}
