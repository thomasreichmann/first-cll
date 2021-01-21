import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class AuthenticationService {
	constructor() {}

	users = {
		thomasar: '1234',
		lluminouz: '123',
		teste: 'senha',
	};

	user = {
		username: '',
		password: '',
	};

	login(credentials) {
		let futureUser = this.users[credentials.username];

		if (futureUser != credentials.password)
			return console.log('Usuario nao encontrado');

		this.user = {
			username: credentials.username,
			password: credentials.password,
		};

		console.log(`Usuario ${this.user} acabou de logar`);
	}

	getUser() {
		return this.user;
	}
}
