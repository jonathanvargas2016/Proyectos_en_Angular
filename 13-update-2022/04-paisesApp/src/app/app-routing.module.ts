import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [

    {
        path: 'countries',
        loadChildren: () => import('./pais/pais.module').then((m) => m.PaisModule)
    },
    {
        path: '',
        redirectTo: 'countries/home',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'countries/home',
    },

]

@NgModule({
    imports: [RouterModule.forRoot(routes,  { enableTracing: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }