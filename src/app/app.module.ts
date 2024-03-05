import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Error404Component } from './components/shared/error404/error404.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ProductionsComponent } from './components/productions/productions.component';
import { SamplePacksComponent } from './components/sample-packs/sample-packs.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/guidelines/faq/faq.component';
import { LicensingInfoComponent } from './components/guidelines/licensing-info/licensing-info.component';
import { TermsOfUseComponent } from './components/guidelines/terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './components/guidelines/privacy-policy/privacy-policy.component';
import { LoginComponent } from './components/account/login/login.component';
import { SignUpComponent } from './components/account/sign-up/sign-up.component';
import { UnsubscribeComponent } from './components/unsubscribe/unsubscribe.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ProductionsComponent,
    SamplePacksComponent,
    ContactComponent,
    FaqComponent,
    LicensingInfoComponent,
    TermsOfUseComponent,
    PrivacyPolicyComponent,
    Error404Component,
    LoginComponent,
    UnsubscribeComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
