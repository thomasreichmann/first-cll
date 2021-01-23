import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ComunidadeComponent } from './comunidade/comunidade.component';
import { CursosComponent } from './cursos/cursos.component';
import { ArtigosComponent } from './artigos/artigos.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { ContatoComponent } from './contato/contato.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { env } from 'process';

@NgModule({
	declarations: [
		AppComponent,
		TopBarComponent,
		HomePageComponent,
		ComunidadeComponent,
		CursosComponent,
		ArtigosComponent,
		ApresentacaoComponent,
		ContatoComponent,
		FooterComponent,
		LoginComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AngularFireModule.initializeApp(environment.firebase),
		NgxAuthFirebaseUIModule.forRoot(environment.firebase),
		AngularFireAnalyticsModule,
		AngularFirestoreModule,
		AppRoutingModule,
		MaterialModule,
		BrowserAnimationsModule,
		IvyCarouselModule,
		ReactiveFormsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
