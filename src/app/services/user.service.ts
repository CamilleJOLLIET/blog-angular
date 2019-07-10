import { User } from '../models/User.model';
import { Subject } from 'rxjs/Subject';

export class UserService {
  private users: User[] = [
    new User('Will', 'Alexander', 'david@boring.com', 'Economie', ['coder', 'les chats'])
  ];
  userSubject = new Subject<User[]>();


  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
