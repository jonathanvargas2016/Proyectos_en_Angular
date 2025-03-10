import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [

    {
        path: 'countries',
        loadChildren: () => import('./pais/pais.module').then((m) => m.PaisModule)
    },
    {
        path: '',
        redirectTo: 'countries',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'countries',
    },

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }