import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactReactiveComponent } from "./contact-reactive/contact-reactive.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { UserComponent } from "./users/user/user.component";
import { ListComponent } from "./users/list/list.component";
import { DetailsComponent } from "./users/details/details.component";
import { PermissionsGuard } from "./guards/permissions.guard";
import { WithoutSaveGuard } from "./guards/without-save.guard";
import { DataResolverService } from "./resolvers/data.resolver.service";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // {    Esto ya se puede eliminar
  //   path: 'contact-reactive',
  //   component: ContactReactiveComponent,
  //   canDeactivate: [WithoutSaveGuard],
  //   resolve: { deptos: DataResolverService }
  // },
{
  path: 'contact-reactive', loadChildren: () => 
    import('./contact-reactive/contact-reactive.module').then(m => m.ContactReactiveModule)
},

  { path: 'contact-template/:id', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'users', component: UserComponent, canActivate: [PermissionsGuard],
    children: [
      { path: 'list', component: ListComponent },
      { path: 'details', component: DetailsComponent },
    ]
  },
  { path: '**', component: PagenotfoundComponent },  // Esta debe estar al final

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


