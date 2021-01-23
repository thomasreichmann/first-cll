import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-artigos',
	templateUrl: './artigos.component.html',
	styleUrls: ['./artigos.component.scss'],
})
export class ArtigosComponent implements OnInit {
	items: Observable<any[]>;
	constructor(firestore: AngularFirestore) {
		this.items = firestore.collection('items').valueChanges();
	}

	ngOnInit(): void {}
}
