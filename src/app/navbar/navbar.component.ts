import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  submenuActivo: string | null = null;
  menuVisible: boolean = false;
  esDispositivoTactil: boolean = false;

  constructor(private router: Router) {
    this.esDispositivoTactil = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }

  mostrarSubmenu(nombre: string) {
    this.submenuActivo = nombre;
  }

  ocultarSubmenu(nombre: string) {
    if (this.submenuActivo === nombre) {
      this.submenuActivo = null;
    }
  }

  alternarSubmenu(nombre: string) {
    this.submenuActivo = this.submenuActivo === nombre ? null : nombre;
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  redirigirConRecargaAngular(ruta: string) {
    this.menuVisible = false;
    this.submenuActivo = null;
    this.router.navigate([ruta]);
  }

  images: string[] = ['LogoRipis.png'];
}

