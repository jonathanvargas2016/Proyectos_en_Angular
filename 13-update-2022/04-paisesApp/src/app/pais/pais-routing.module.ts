import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorCapitalComponent } from "./pages/por-capital/por-capital.component";
import { PorPaisComponent } from "./pages/por-pais/por-pais.component";
import { PorRegionComponent } from "./pages/por-region/por-region.component";
import { VerPaisComponent } from "./pages/ver-pais/ver-pais.component";

const routes: Routes = [
    {
        path: '', component: PorPaisComponent
    },
    {
        path: 'region', component: PorRegionComponent
    },
    {
        path: 'capital', component: PorCapitalComponent
    },
    {
        path: 'pais/:id', component: VerPaisComponent
    },
    {
        path: '',
        redirectTo: 'capital',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaisRoutingModule { }