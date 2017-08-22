import { Routes, RouterModule } from '@angular/router';
import { NPSLComponent } from "./npsl/npsl.component";
import { AcademyComponent } from "./academy/academy.component";
import { LeagueComponent } from "./league/league.component";
const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path

    { path: '', redirectTo: '/', pathMatch: 'full'},
    { path: 'npsl', component: NPSLComponent },
    { path: 'academy', component: AcademyComponent },
    { path: 'league', component: LeagueComponent }
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
