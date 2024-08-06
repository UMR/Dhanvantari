import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Message } from '../../../shared/models/message';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { first, flatMap } from 'rxjs/operators';

import { User } from '../../../shared/models/index';

import {
  PagedData,
  CorporateEmployee,
  Page,
} from '../../../shared/models/page';

@Injectable()
export class MessageService {
  messages: any;
  constructor(private http: HttpClient) {}

  public register(message: Message) {
    return this.http.post(`/message/register`, message);
  }

  public getByToId(emailId: string, mailType: string) {
    return this.http.get(`/message/to/id/` + mailType + `/` + emailId);
  }

  public getByFromId(emailId: string) {
    return this.http.get(`/message/from/id/` + emailId);
  }
  public isMessageDatabaseIntialize(emailId: string) {
    return this.http.get(`/message/checkdatabaseintialize/` + emailId);
  }

  public getMessageById(id: string) {
    return this.http.get(`/message/read/id/` + id);
  }

  public getAll(): Observable<Message[]> {
    return of(this.getMessage());
  }

  public getMessages(
    page: Page,
    id: string,
    mailType: string
  ): Observable<PagedData<Message>> {
    return this.getByToId(id, mailType).pipe(
      flatMap((data) => {
        this.messages = data;
        return of(data).pipe(map((data) => this.getPagedData(page)));
      })
    );
  }

  public getFromMessages(
    page: Page,
    id: string
  ): Observable<PagedData<Message>> {
    console.log('a');
    return this.getByFromId(id).pipe(
      flatMap((data) => {
        this.messages = data;
        return of(data).pipe(map((data) => this.getPagedData(page)));
      })
    );
  }

  update(message: Message, type: string) {
    console.log(`/message/${type}/`);
    return this.http.put(`/message/${type}/` + message.id, message);
  }

  public getResults(page: Page): Observable<PagedData<Message>> {
    return this.getAll().pipe(
      flatMap((data) => {
        this.messages = data;
        return of(data).pipe(map((data) => this.getPagedData(page)));
      })
    );
  }
  /**
   * Package companyData into a PagedData object based on the selected Page
   * @param page The page data used to get the selected data from companyData
   * @returns {PagedData<User>} An array of the selected data and page
   */
  private getPagedData(page: Page): PagedData<Message> {
    const pagedData = new PagedData<Message>();
    page.totalElements = this.messages.length;
    page.totalPages = page.totalElements / page.size;
    const start = page.pageNumber * page.size;
    const end = Math.min(start + page.size, page.totalElements);
    for (let i = start; i < end; i++) {
      const jsonObj = this.messages[i];
      const message: any = {
        id: jsonObj.id,
        from: jsonObj.from,
        fromName: jsonObj.fromName,
        to: jsonObj.to,
        toName: jsonObj.toName,
        subject: jsonObj.subject,
        body: jsonObj.body,
        fromTeam: jsonObj.fromTeam,
        toTeam: jsonObj.toTeam,
        time: jsonObj.time,
        type: jsonObj.type,
        suggestion: jsonObj.suggestion,
        imgSource: jsonObj.imgSource,
      };
      pagedData.data.push(message);
    }
    pagedData.page = page;
    return pagedData;
  }

  public getMessage(): Message[] {
    let message: any[] = [
      {
        id: 1,
        imgSource: '',
        team: 'Support Team',
        time: '5 mins',
        suggestion: 'Why not buy a new awesome theme?',
      },
      {
        id: 2,
        imgSource: '',
        team: 'Design Team',
        time: '2 hours',
        suggestion: 'Why not buy a new awesome theme?',
      },
      {
        id: 3,
        imgSource: '',
        team: 'Developers',
        time: 'Today',
        suggestion: 'Why not buy a new awesome theme?',
      },
      {
        id: 4,
        imgSource: '',
        team: 'Sales Department',
        time: '1 hours',
        suggestion: 'Why not buy a new awesome theme?',
      },
    ];
    return message;
  }
}
