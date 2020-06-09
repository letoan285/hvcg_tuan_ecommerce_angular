import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BoderColorDirective } from './boder-color.directive';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';


// import store
import { StoreModule } from '@ngrx/store';
// import { reducer } from './store/reducers/product.reducer';
import { EffectsModule } from '@ngrx/effects'
// import { ProductEffect } from './store/effects/product.effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HeaderComponent,
    ContactUsComponent,
    NotFoundComponent,
    HomePageComponent,
    BoderColorDirective,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    FormBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot({router: routerReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }