import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GraficaOneComponent } from "./grafica-one/grafica-one.component";
import { MainComponent } from "./main.component";
import { ProgressComponent } from "./progress/progress.component";


const routes: Routes = [
    /**
     * En el redirect, el path no debe coincidir con los path ya establecidos. 
    Cuando en los children agrego un redirect si el path es vacio no funciona porque el path vacio ya esta 
    establecido y redirige al componente. Este redirect se lo debe establecer en app-routing
     -Angular primero intenta coincidir con las rutas definidas antes de aplicar redireccionamientos generales.
     */
    {
        path: "dashboard", component: MainComponent,
        children: [
            {
                path: "",
                component: DashboardComponent
            },
            {
                path: "progress",
                component: ProgressComponent
            },
            {
                path: "graph-one",
                component: GraficaOneComponent
            },
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {
}
