import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { ArtigosComponent } from './artigos/artigos.component';
import { ComunidadeComponent } from './comunidade/comunidade.component';
import { ContatoComponent } from './contato/contato.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
	{
		path: '',
		component: HomePageComponent,
	},
	{
		path: 'comunidade',
		component: ComunidadeComponent,
	},
	{
		path: 'cursos',
		component: CursosComponent,
	},
	{
		path: 'artigos',
		component: ArtigosComponent,
	},
	{
		path: 'apresentacao',
		component: ApresentacaoComponent,
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
