import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// BehaviorSubject: allow to add wrapper arround the value and alows to setup subscription to change that value

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  messages$ = new BehaviorSubject<string[]>([]);
  private messages: string[] = [];
  get allMessages() {
    return [...this.messages];
  }

  addMessage(message: string) {
    this.messages = [...this.messages, message];
    this.messages$.next(this.messages);
  }
}
