import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MaterialModule,
		BrowserAnimationsModule,
		IvyCarouselModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
