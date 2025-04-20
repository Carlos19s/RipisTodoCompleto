import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import {InicioComponent} from './inicio/inicio.component';
import {SobreNosotrosComponent} from './sobre-nosotros/sobre-nosotros.component';
import {BeneficiosComponent} from './beneficios/beneficios.component';
import {UnialiadasComponent} from './unialiadas/unialiadas.component';
import {MiembrosComponent} from './miembros/miembros.component';
import {EstatutosComponent} from './estatutos/estatutos.component';
import { RegistroComponent } from './registro/registro.component';
<<<<<<< Updated upstream
import {PlanificacionActividadesComponent} from './planificacion-actividades/planificacion-actividades.component';
=======
import { BlogComponent } from './blog/blog.component';
>>>>>>> Stashed changes

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  {path: 'beneficios', component: BeneficiosComponent },
  {path: 'Unialiadas', component: UnialiadasComponent },
  {path: 'Miembros', component: MiembrosComponent },
  {path: 'Estatutos', component: EstatutosComponent },
  {path: 'Registro', component:  RegistroComponent},
<<<<<<< Updated upstream
  {path: 'Planificacion', component:  PlanificacionActividadesComponent},
=======
  {path: 'Blog', component: BlogComponent}
>>>>>>> Stashed changes
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {


}
