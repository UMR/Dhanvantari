import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { LocalStorageService } from '../../../core/services/helpers/local-storage.service';
import { User, Status } from '../../../shared/models/user';
declare const _: any;

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  constructor(
    private localStorage: LocalStorageService
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let users: any[] = JSON.parse(this.localStorage.getItem('db.users')) || [];
    let messages: any[] =
      JSON.parse(this.localStorage.getItem('db.messages')) || [];

    return of(null)
      .pipe(
        mergeMap(() => {
          /* User Fake backend service Starts here*/
          if (
            request.url.endsWith('/users/authenticate') &&
            request.method === 'POST'
          ) {
            let filteredUsers = users.filter((user) => {
              return (
                user.username === request.body.username &&
                user.password === request.body.password &&
                user.status == 'Active'
              );
            });
            if (filteredUsers.length) {
              let user = filteredUsers[0];
              let body = {
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                team: user.team,
                token: 'fake-jwt-token',
                status: user.status,
              };
              console.log(body);
              return of(new HttpResponse({ status: 200, body: body }));
            } else {
              return throwError({
                error: { message: 'Username or password is incorrect' },
              });
            }
          }
          if (request.url.endsWith('/users') && request.method === 'GET') {
            return of(new HttpResponse({ status: 200, body: users }));

            if (
              request.headers.get('Authorization') === 'Bearer fake-jwt-token'
            ) {
              return of(new HttpResponse({ status: 200, body: users }));
            } else {
              return throwError({ error: { message: 'Unauthorised' } });
            }
          }
          if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
            if (
              request.headers.get('Authorization') === 'Bearer fake-jwt-token'
            ) {
              let urlParts = request.url.split('/');
              let id = parseInt(urlParts[urlParts.length - 1]);
              let matchedUsers = users.filter((user) => {
                return user.id === id;
              });
              let user = matchedUsers.length ? matchedUsers[0] : null;
              return of(new HttpResponse({ status: 200, body: user }));
            } else {
              return throwError({ error: { message: 'Unauthorised' } });
            }
          }
          if (
            request.url.endsWith('/users/register') &&
            request.method === 'POST'
          ) {
            let newUser = request.body;
            let duplicateUser = users.filter((user) => {
              return user.username === newUser.username;
            }).length;
            if (duplicateUser) {
              return throwError({
                error: {
                  message:
                    'Username "' + newUser.username + '" is already taken',
                },
              });
            }
            newUser.id =
              newUser.username === 'intelchiprules@yahoo.co.in'
                ? 1
                : users.length + 1;
            users.push(newUser);
            this.localStorage.setItem(
              'db.users',
              JSON.stringify(_.sortBy(users, (user) => user.id))
            );
            return of(new HttpResponse({ status: 200 }));
          }
          if (
            request.url.match(/\/users\/\d+$/) &&
            request.method === 'DELETE'
          ) {
            if (
              request.headers.get('Authorization') === 'Bearer fake-jwt-token'
            ) {
              let urlParts = request.url.split('/');
              let id = parseInt(urlParts[urlParts.length - 1]);
              for (let i = 0; i < users.length; i++) {
                let user = users[i];
                if (user.id === id) {
                  user.status = 'InActive';
                  users.splice(i, 1);
                  users.push(user);
                  this.localStorage.setItem(
                    'db.users',
                    JSON.stringify(_.sortBy(users, (user) => user.id))
                  );
                  break;
                }
                // if (user.id === id) {
                //   users.splice(i, 1);
                //   this.localStorage.setItem(
                //     "db.users",
                //     JSON.stringify(_.sortBy(users, user => user.id))
                //   );
                //   break;
                // }
              }
              return of(new HttpResponse({ status: 200 }));
            } else {
              return throwError({ error: { message: 'Unauthorised' } });
            }
          }
          if (request.url.match(/\/users\/\d+$/) && request.method === 'PUT') {
            let isUpdated: boolean = false;
            let currentUser = request.body;
            for (let i = 0; i < users.length; i++) {
              let user = users[i];
              if (
                user.username !== 'intelchiprules@yahoo.co.in' &&
                user.username !== 'intelchiprules@fakemail.com' &&
                user.username !== 'spammer@fakemail.com' &&
                user.username !== 'admin@fakemail.com' &&
                user.username !== 'support@fakemail.com' &&
                user.username !== 'design@fakemail.com' &&
                user.username !== 'developer@fakemail.com' &&
                user.username !== 'sales@fakemail.com' &&
                user.username !== 'info@fakemail.com'
              ) {
                if (user.id === currentUser.id) {
                  users.splice(i, 1);
                  users.push(currentUser);
                  isUpdated = true;
                  this.localStorage.setItem(
                    'db.users',
                    JSON.stringify(_.sortBy(users, (user) => user.id))
                  );
                  break;
                }
              }
            }
            if (!isUpdated) {
              return throwError({
                error: { message: 'Admin cannot be Updated.' },
              });
            }
            return of(new HttpResponse({ status: 200 }));
          }
          /* User Fake backend service Ends here*/

          /* Message Fake backend service Starts here*/
          if (
            request.url.endsWith('/message/register') &&
            request.method === 'POST'
          ) {
            let counter = _.reverse(messages, (message) => message.id);
            let messageCounter = counter.length ? counter[0].id : 0;
            let message = request.body;
            message.id = messageCounter + 1;
            messages.push(message);
            this.localStorage.setItem(
              'db.messages',
              JSON.stringify(_.sortBy(messages, (message) => message.id))
            );
            return of(new HttpResponse({ status: 200 }));
          }

          if (
            request.url.match(`/message/to/id/`) &&
            request.method === 'GET'
          ) {
            if (
              request.headers.get('Authorization') === 'Bearer fake-jwt-token'
            ) {
              let urlParts = request.url.split('/');
              let messageType;

              if (urlParts[4] != null || urlParts[4] != undefined) {
                if (
                  urlParts[4] == 'Junk' ||
                  urlParts[4] == 'Starred' ||
                  urlParts[4] == 'Trash'
                ) {
                  console.log(urlParts);
                  messageType = urlParts[4];
                } else {
                  if (urlParts[4] == 'ALL') {
                    messageType = 'ALL';
                  } else {
                    messageType = 'Starred';
                  }
                }
              } else {
                messageType = 'Starred';
              }

              console.log(messageType);
              let id = urlParts[urlParts.length - 1];
              let mail = messages.filter((message) => {
                return (
                  message.to === id &&
                  (message.toType === messageType || messageType == 'ALL') &&
                  message.toStatus == 'Active'
                );
              });

              return of(
                new HttpResponse({
                  status: 200,
                  body: _.reverse(mail, (message) => message.time),
                })
              );
            } else {
              return throwError({ error: { message: 'Unauthorised' } });
            }
          }
          if (
            request.url.match(`/message/from/id/`) &&
            request.method === 'GET'
          ) {
            if (
              request.headers.get('Authorization') === 'Bearer fake-jwt-token'
            ) {
              let urlParts = request.url.split('/');
              let id = urlParts[urlParts.length - 1];
              let mail = messages.filter((message) => {
                return message.from === id && message.fromStatus == 'Active';
              });
              return of(
                new HttpResponse({
                  status: 200,
                  body: _.reverse(mail, (message) => message.time),
                })
              );
            } else {
              return throwError({ error: { message: 'Unauthorised' } });
            }
          }
          if (
            request.url.match(`/message/read/id/`) &&
            request.method === 'GET'
          ) {
            if (
              request.headers.get('Authorization') === 'Bearer fake-jwt-token'
            ) {
              let urlParts = request.url.split('/');
              console.log(urlParts);
              let id = urlParts[urlParts.length - 1];
              console.log('id');
              console.log(messages);
              let mail = messages.filter((message) => {
                return message.id == id;
              });
              let mailMessage = mail.length ? mail[0] : null;
              console.log('id');
              console.log(mailMessage);
              return of(new HttpResponse({ status: 200, body: mailMessage }));
            } else {
              return throwError({ error: { message: 'Unauthorised' } });
            }
          }
          if (
            request.url.match(`/message/checkdatabaseintialize/`) &&
            request.method === 'GET'
          ) {
            let urlParts = request.url.split('/');
            let id = urlParts[urlParts.length - 1];
            let matchedMessages = messages.filter((message) => {
              return message.to === id;
            });
            let mails = matchedMessages.length ? matchedMessages[0] : null;
            return of(
              new HttpResponse({
                status: 200,
                body: mails == null ? false : true,
              })
            );
          }

          if (
            request.url.match(/\/message\/s\/\d+$/) &&
            request.method === 'PUT'
          ) {
            let isUpdated: boolean = false;
            let currentMessage = request.body;
            for (let i = 0; i < messages.length; i++) {
              let message = messages[i];
              if (message.id === currentMessage.id) {
                messages.splice(i, 1);
                currentMessage.fromType = 'Delete';
                isUpdated = true;
                this.localStorage.setItem(
                  'db.messages',
                  JSON.stringify(_.sortBy(messages, (message) => message.id))
                );
                break;
              }
            }
            if (!isUpdated) {
              return throwError({
                error: { message: 'Admin cannot be Updated.' },
              });
            }
            return of(new HttpResponse({ status: 200 }));
          }
          if (
            request.url.match(/\/message\/i\/\d+$/) &&
            request.method === 'PUT'
          ) {
            let isUpdated: boolean = false;
            let currentMessage = request.body;
            for (let i = 0; i < messages.length; i++) {
              let message = messages[i];
              if (message.id === currentMessage.id) {
                messages.splice(i, 1);
                if (message.toType === 'Trash') {
                  currentMessage.toType = 'Delete';
                  messages.push(currentMessage);
                } else {
                  messages.push(currentMessage);
                }
                isUpdated = true;
                this.localStorage.setItem(
                  'db.messages',
                  JSON.stringify(_.sortBy(messages, (message) => message.id))
                );
                break;
              }
            }
            if (!isUpdated) {
              return throwError({
                error: { message: 'Admin cannot be Updated.' },
              });
            }
            return of(new HttpResponse({ status: 200 }));
          }
          /* Message Fake backend service Ends here*/
          return next.handle(request);
        })
      )
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());
  }
}

export let FakeBackendInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};
