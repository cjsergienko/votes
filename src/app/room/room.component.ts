import { Component, OnInit } from '@angular/core';
import { APIService, Room, ListRoomQuestionsQuery, ListRoomUsersQuery } from '../API.service';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from 'rxjs';
import { constants } from './constants';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  private routeSub: Subscription;

  public questions: ListRoomQuestionsQuery;
  public users: ListRoomUsersQuery;
  private interval: ReturnType<typeof setInterval>;
  private room: Room;

  constructor(private api: APIService, private route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe(params => {
      localStorage.setItem('room_id', params['id']);
      this.createUser();
      this.getRoomQuestions();
    });
  }

  ngOnInit(): void {
    this.interval = setInterval(() => this.getOnlineUsers(), 1000);
  }

  private createUser() {
    this.api.ListRoomUsers({
      roomId: { contains: localStorage.getItem('room_id') },
      userId: { contains: localStorage.getItem('user_id')}
    }).then((roomUsers) => {
      if(!roomUsers.items.length) {
        this.api.CreateRoomUser({
          userId: localStorage.getItem('user_id'),
          roomId: localStorage.getItem('room_id'),
          userName: this.generateName()
        }).then((roomUser) => {
            console.log('User added to the room: ', roomUser);
        });
      }
    });
  }

  private getOnlineUsers() {
    this.api.ListRoomUsers({
      roomId: { contains: localStorage.getItem('room_id') }
      }).then((roomUsers) => {
        this.users = roomUsers;
        console.log('Users online: ', roomUsers);
      });
  }

  private getRoomQuestions() {
    this.api.ListRoomQuestions({
        roomId: {contains: localStorage.getItem('room_id')
      }}).then((questions) => {
        this.questions = questions;
        console.log('Room questions: ', questions);
      });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    clearInterval(this.interval);
  }

  // generates random string as a unique room id
  private generateId():string {
    return Math.random().toString(constants.USER_ID_FORMAT_LENGTH).slice(2);
  }

  private generateName():string {
    let names = ['Apple Mess', 'Banana Boy', 'Mango Burger', 'Orange Man', 'Watermelon Day', 'Pear in the air']; // array
    let index = Math.floor(Math.random() * names.length);
    console.log('username: ', names[index]);
    return names[index];
  }

}
