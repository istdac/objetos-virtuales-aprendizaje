import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'objetos-virtuales',
    loadChildren: () => import('./objetos-virtuales/objetos-virtuales.module').then( m => m.ObjetosVirtualesPageModule)
  },
  {
    path: 'pantalla-encuesta',
    loadChildren: () => import('./pantalla-encuesta/pantalla-encuesta.module').then( m => m.PantallaEncuestaPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'encuesta-empleador',
    loadChildren: () => import('./encuesta-empleador/encuesta-empleador.module').then( m => m.EncuestaEmpleadorPageModule)
  },
  {
    path: 'encuesta-egresados',
    loadChildren: () => import('./encuesta-egresados/encuesta-egresados.module').then( m => m.EncuestaEgresadosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
