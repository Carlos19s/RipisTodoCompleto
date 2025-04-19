import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import {InicioComponent} from './inicio/inicio.component';
import {SobreNosotrosComponent} from './sobre-nosotros/sobre-nosotros.component';
import {BeneficiosComponent} from './beneficios/beneficios.component';
import {UnialiadasComponent} from './unialiadas/unialiadas.component';
import {MiembrosComponent} from './miembros/miembros.component';
import {EstatutosComponent} from './estatutos/estatutos.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  {path: 'beneficios', component: BeneficiosComponent },
  {path: 'Unialiadas', component: UnialiadasComponent },
  {path: 'Miembros', component: MiembrosComponent },
  {path: 'Estatutos', component: EstatutosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {


}
