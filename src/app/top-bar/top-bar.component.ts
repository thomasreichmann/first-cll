import { Component, OnInit } from '@angular/core';
import { NavButton } from './nav-button';

@Component({
	selector: 'app-top-bar',
	templateUrl: './top-bar.component.html',
	styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
	constructor() {}

	// Definimos todos os botoes de navegacao no header do site
	navButtons: NavButton[] = [
		{ title: 'Comunidade', route: '/comunidade' },
		{ title: 'Cursos', route: '/cursos' },
		{ title: 'Artigos', route: '/artigos' },
		{ title: 'O Cll', route: '/apresentacao' },
		{ title: 'Contato', route: '/Contato' },
	];

	ngOnInit(): void {}
}
