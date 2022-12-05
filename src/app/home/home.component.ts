import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { APIService } from '../API.service';
import { Router } from "@angular/router"

import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public question: string | null = '';
  public questionForm: FormGroup;

  constructor(private api: APIService, private router: Router, private fb: FormBuilder) {
    this.questionForm = this.fb.group({
      question: ''
    });
  }

  ngOnInit(): void {

  }

  public onCreateButtonClick() {
    this.api.CreateRoom({id: this.generateId()}).then((data) => {
      console.log('Room created: ', data);
      this.api.CreateRoomQuestion({roomId: data.id, text: this.questionForm.get('question')?.value}).then((question) => {
        console.log('Question created: ', data);
        this.router.navigate(['/room/' + data.id]);
      });
    });
  }

  // generates random string as a unique room id
  private generateId():string {
    return Math.random().toString(16).slice(2);
  }

}
