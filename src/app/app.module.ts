import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule  } from '@angular/forms';
import { FormNewItemComponent } from './form-new-item/form-new-item.component';
import { EmployeesComponent } from './employees/employees.component';
import { ButtonComponent } from './button/button.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserComponent } from './users/user/user.component';
import { DetailsComponent } from './users/details/details.component';
import { ListComponent } from './users/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './shared/spinner/spinner.component';      // se importa manualmente

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FormNewItemComponent,
    EmployeesComponent,
    FilterPipe,
    ContactComponent, 
    // ContactReactiveComponent,  Ya esta por separado
    HomeComponent, 
    NavbarComponent, 
    PagenotfoundComponent, 
    UserComponent, DetailsComponent, ListComponent, SpinnerComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,             // importar formulario Driven Template
    // ReactiveFormsModule,  // Ya esta por separado
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

