import { Injectable } from '@angular/core';
import { Notification } from '../../../shared/models/notification';

@Injectable()
export class NotificationService {
  constructor() {}

  public getNotification(): Notification[] {
    let notification: Notification[] = [
      {
        ngclass: 'fa fa-users text-aqua',
        notification: ' 5 new members joined today',
      },
      {
        ngclass: 'fa fa-warning text-yellow',
        notification:
          'Very long description here that may not fit into the page and may cause design problems',
      },
      {
        ngclass: 'fa fa-users text-red',
        notification: '5 new members joined',
      },
      {
        ngclass: 'fa fa-shopping-cart text-green',
        notification: '25 sales made',
      },
      {
        ngclass: 'fa fa-user text-red',
        notification: 'You changed your username',
      },
    ];
    return notification;
  }
}
