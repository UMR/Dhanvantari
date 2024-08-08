import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/application/auth.service';
import { LocalStorageService } from '../../../core/services/helpers/local-storage.service';

import { MessageService } from '../../../core/services/application/message.service';
import { NotificationService } from '../../../core/services/application/notification.service';
import { User, Task, Message, Notification } from '../../models/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public user: User;
  public tasks: Task[];
  public messages: any[];
  public notifications: Notification[];

  public showProfile: boolean = false;
  public showNotification: boolean = false;
  public showMessage: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService,
    private localStorage: LocalStorageService,
    private notificationService: NotificationService,
  ) {}

  ngOnInit() {
    this.bindUserDetails();
    this.bindMessageMenu();
    this.bindNotificationMenu();
    this.bindTaskMenu();
  }

  profileClick() {
    if (this.showProfile) {
      this.showProfile = false;
      this.showMessage = false;
      this.showNotification = false;
    }
    else {
      this.showProfile = true;
      this.showMessage = false;
      this.showNotification = false;
    }
  }

  noficationClick() {
    if (this.showNotification) {
      this.showNotification = false;
      this.showProfile = false;
      this.showMessage = false;
    }
    else {
      this.showNotification = true;
      this.showProfile = false;
      this.showMessage = false;
    }
  }

  messageClick() {
    if (this.showMessage) {
      this.showNotification = false;
      this.showProfile = false;
      this.showMessage = false;
    }
    else {
      this.showNotification = false;
      this.showProfile = false;
      this.showMessage = true;
    }
  }

  bindUserDetails() {
    this.user = JSON.parse(this.localStorage.getItem('userSession'));
    console.log(this.user);
  }
  bindMessageMenu() {
    this.messages = this.messageService.getMessage();
  }

  bindNotificationMenu() {
    this.notifications = this.notificationService.getNotification();
  }
  bindTaskMenu() {
    //this.tasks = this.taskService.getTask();
  }

  onSignOut() {
   
    this.localStorage.removeItem('userSession');
    this.localStorage.removeItem('users');
    this.localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
