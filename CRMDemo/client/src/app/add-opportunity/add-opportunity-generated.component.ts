/*
  This file is automatically generated. Any changes will be overwritten.
  Modify add-opportunity.component.ts instead.
*/
import { LOCALE_ID, ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

import { DialogService, DIALOG_PARAMETERS, DialogRef } from '@radzen/angular/dist/dialog';
import { NotificationService } from '@radzen/angular/dist/notification';
import { ContentComponent } from '@radzen/angular/dist/content';
import { FormComponent } from '@radzen/angular/dist/form';

import { CrmService } from '../crm.service';
import { SecurityService } from '../security.service';

export class AddOpportunityGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('form0') form0: FormComponent;

  router: Router;

  cd: ChangeDetectorRef;

  route: ActivatedRoute;

  notificationService: NotificationService;

  dialogService: DialogService;

  dialogRef: DialogRef;

  httpClient: HttpClient;

  locale: string;

  _location: Location;

  _subscription: Subscription;

  crm: CrmService;

  security: SecurityService;
  getContactsResult: any;
  getOpportunityStatusesResult: any;
  parameters: any;

  constructor(private injector: Injector) {
  }

  ngOnInit() {
    this.notificationService = this.injector.get(NotificationService);

    this.dialogService = this.injector.get(DialogService);

    this.dialogRef = this.injector.get(DialogRef, null);

    this.locale = this.injector.get(LOCALE_ID);

    this.router = this.injector.get(Router);

    this.cd = this.injector.get(ChangeDetectorRef);

    this._location = this.injector.get(Location);

    this.route = this.injector.get(ActivatedRoute);

    this.httpClient = this.injector.get(HttpClient);

    this.crm = this.injector.get(CrmService);
    this.security = this.injector.get(SecurityService);
  }

  ngAfterViewInit() {
    this._subscription = this.route.params.subscribe(parameters => {
      if (this.dialogRef) {
        this.parameters = this.injector.get(DIALOG_PARAMETERS);
      } else {
        this.parameters = parameters;
      }
      this.load();
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }


  load() {
    this.crm.getContacts(null, null, null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.getContactsResult = result.value;
    }, (result: any) => {

    });

    this.crm.getOpportunityStatuses(null, null, null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.getOpportunityStatusesResult = result.value;
    }, (result: any) => {

    });
  }

  form0Cancel(event: any) {
    if (this.dialogRef) {
      this.dialogRef.close();
    } else {
      this._location.back();
    }
  }

  form0Submit(event: any) {
    this.crm.createOpportunity(event)
    .subscribe((result: any) => {
      if (this.dialogRef) {
        this.dialogRef.close();
      }
      this.router.navigate(['opportunities']);
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: `Error`, detail: `Unable to create new Opportunity!` });
    });
  }
}
