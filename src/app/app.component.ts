import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContactoComponent} from './contacto/contacto.component';
import {NavbarComponent} from './navbar/navbar.component';
import {InicioComponent} from './inicio/inicio.component';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactoComponent, NavbarComponent, InicioComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RipisTodo';
}
