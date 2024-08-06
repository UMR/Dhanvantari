import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import * as jQuery from 'jquery';

import { User } from './shared/models/index';
import { UserService } from './core/services/application/user.service';
import { MessageService } from './core/services/application/message.service';
import {
  NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  ActivatedRoute,
} from '@angular/router';
import { Message } from './shared/models/message';

import { LocalStorageService } from './core/services/helpers/local-storage.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit() {
    // localStorage.clear();
    // this.localStorage.setItem('db.message', null);
    // this.localStorage.setItem('db.messages', null);
    this.initFakeBackendDatabase();
  }

  private initFakeBackendDatabase(): void {
    this.initUserDatabase();
    this.initMessageDatabase();
  }

  private initUserDatabase(): void {
    let user = new User(
      'intelchiprules@yahoo.co.in',
      'admin@123',
      'Girish',
      'Nandgawe',
      'B.E. Computers',
      [1, 2, 4, 6, 7, 8, 9, 10],
      'Root',
      'Active',
      1
    );
    this.userService
      .register(user)
      .pipe(first())
      .subscribe(
        (data) => {
          // console.log(data);
        },
        (error) => {
          //console.log(error);
        }
      );

    let spammer = new User(
      'spammer@fakemail.com',
      'admin@123',
      'team',
      'spammer',
      'B.E. Computers',
      [1, 2, 4, 6, 7, 8, 9, 10],
      'Spammer',
      'Active',
      2
    );
    this.userService
      .register(spammer)
      .pipe(first())
      .subscribe(
        (data) => {
          // console.log(data);
        },
        (error) => {
          //console.log(error);
        }
      );

    let admin = new User(
      'admin@fakemail.com',
      'admin@123',
      'team',
      'admin',
      'B.E. Computers',
      [1, 2, 4, 6, 7, 8, 9, 10],
      'admin',
      'Active',
      3
    );
    this.userService
      .register(admin)
      .pipe(first())
      .subscribe(
        (data) => {
          // console.log(data);
        },
        (error) => {
          //console.log(error);
        }
      );

    let support = new User(
      'support@fakemail.com',
      'admin@123',
      'team',
      'support',
      'B.E. Computers',
      [1, 2, 4, 6, 7, 8, 9, 10],
      'Support',
      'Active',
      4
    );
    this.userService
      .register(support)
      .pipe(first())
      .subscribe(
        (data) => {
          // console.log(data);
        },
        (error) => {
          //console.log(error);
        }
      );

    let design = new User(
      'design@fakemail.com',
      'admin@123',
      'team',
      'design',
      'B.E. Computers',
      [1, 2, 4, 6, 7, 8, 9, 10],
      'design',
      'Active',
      5
    );
    this.userService
      .register(design)
      .pipe(first())
      .subscribe(
        (data) => {
          // console.log(data);
        },
        (error) => {
          //console.log(error);
        }
      );
    let developer = new User(
      'developer@fakemail.com',
      'admin@123',
      'team',
      'developer',
      'B.E. Computers',
      [1, 2, 4, 6, 7, 8, 9, 10],
      'developer',
      'Active',
      6
    );

    this.userService
      .register(developer)
      .pipe(first())
      .subscribe(
        (data) => {
          // console.log(data);
        },
        (error) => {
          //console.log(error);
        }
      );

    let sales = new User(
      'sales@fakemail.com',
      'admin@123',
      'team',
      'sales',
      'B.E. Computers',
      [1, 2, 4, 6, 7, 8, 9, 10],
      'sales',
      'Active',
      7
    );
    this.userService
      .register(sales)
      .pipe(first())
      .subscribe(
        (data) => {
          // console.log(data);
        },
        (error) => {
          //console.log(error);
        }
      );

    let info = new User(
      'info@fakemail.com',
      'admin@123',
      'team',
      'info',
      'B.E. Computers',
      [1, 2, 4, 6, 7, 8, 9, 10],
      'info',
      'Active',
      8
    );
    this.userService
      .register(info)
      .pipe(first())
      .subscribe(
        (data) => {
          // console.log(data);
        },
        (error) => {
          //console.log(error);
        }
      );
  }
  private initMessageDatabase(): void {
    let thisObject = this;
    this.messageService
      .isMessageDatabaseIntialize('intelchiprules@yahoo.co.in')
      .subscribe(
        (data) => {
          thisObject.sendMailToDb(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  sendMailToDb(checkDatabaseIntialize: any) {
    if (!checkDatabaseIntialize) {
      let message: Message = {
        id: 0,
        from: 'intelchiprules@yahoo.co.in',
        fromName: 'Girish' + ' ' + 'Nandgawe',
        to: 'intelchiprules@yahoo.co.in',
        toName: 'Girish' + ' ' + 'Nandgawe',
        subject: 'Well Come !!!!',
        body: 'Well Come !!!!',
        fromTeam: 'Root',
        toTeam: 'Root',
        time: new Date(),
        suggestion: 'Well Come !!!!',
        imgSource: '',
        type: 'Starred',
        toType: 'Starred',
        fromType: 'Starred',
        toStatus: 'Active',
        fromStatus: 'Active',
      };
      this.messageService
        .register(message)
        .pipe(first())
        .subscribe(
          (data) => {
            // console.log(data);
          },
          (error) => {
            // console.log(error);
          }
        );
    }
  }

  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      console.log('this._loadingBar.start();');
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => {
        console.log('this._loadingBar.complete();');
        console.log(this.route.snapshot.data);
      }, 500);
    }
    if (event instanceof NavigationCancel) {
      setTimeout(() => {
        /*Your Code*/
      }, 500);
      console.log('this._loadingBar.stop();');
    }
    if (event instanceof NavigationError) {
      setTimeout(() => {
        /*Your Code*/
      }, 500);
      console.log('this._loadingBar.stop();');
    }
  }
}
