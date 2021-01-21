import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	constructor(private auth: AuthenticationService) {}

	ngOnInit(): void {}

	profileForm = new FormGroup({
		username: new FormControl(''),
		password: new FormControl(''),
	});

	username = '';

	onLogin(): void {
		console.log(this.profileForm.value);
		this.auth.login(this.profileForm.value);
	}

	fetchUser(): void {
		let user = this.auth.getUser();

		console.log(`fetch user `);
		console.log(user);

		this.username = user.username;
	}
}
