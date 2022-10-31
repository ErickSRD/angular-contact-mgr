import { IContact } from './../models/IContact';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IGroup } from '../models/IGroup';


@Injectable({
  providedIn: 'root'
})

export class ContactService {



  constructor(private httpClient: HttpClient) { }

  //Get all contact
  public getAllContacts():Observable<IContact[]>{
    let MasterURL: string ='http://localhost:9000';
    let dataURL: string = MasterURL + "/contacts";
    return this.httpClient.get<IContact[]>(dataURL).pipe(catchError(this.handleError));
  }

  //Get Single Contact
  public getContact(contactId: string | null): Observable<IContact> {
    let MasterURL: string ='http://localhost:9000';
    let Contraid: string | null = contactId;

    let dataURL: string = MasterURL +'/contacts/'+ Contraid;
    return this.httpClient.get<IContact>(dataURL).pipe(catchError(this.handleError));

  }

  //Create a new contact
  public createContact(contact : IContact): Observable<IContact>{
    let MasterURL: string ='http://localhost:9000';
    let dataURL: string = MasterURL+'/contacts';
    return this.httpClient.post<IContact>(dataURL , contact).pipe(catchError(this.handleError));

  }
    //Update a new contact
    public UpdateContact(contact : IContact , contactId : string): Observable<IContact>{
      let MasterURL: string ='http://localhost:9000';
      let Contraid: string | null = contactId;
      let dataURL: string = MasterURL +'/contacts/'+ Contraid;
      return this.httpClient.put<IContact>(dataURL , contact).pipe(catchError(this.handleError));

    }

    //Delete a new contact
    public DeleteContact(contactId : string): Observable<IContact>{
    let MasterURL: string ='http://localhost:9000';
    let Contraid: string | null = contactId;
    let dataURL: string = MasterURL +'/contacts/'+ Contraid;
    return this.httpClient.delete<{ }>(dataURL).pipe(catchError(this.handleError));

    }

    //Get all groups

    public getAllGroup():Observable<IGroup[]>{
      let MasterURL: string ='http://localhost:9000';
      let dataURL: string = MasterURL+'/groups';
      return this.httpClient.get<IGroup[]>(dataURL).pipe(catchError(this.handleError));
    }

    //Get Single group
    public getGroup(contact : IContact): Observable<IGroup> {
    let MasterURL: string ='http://localhost:9000';
    let Contraid: string | null = contact.groupid!;
    let dataURL: string = MasterURL +'/groups/' + Contraid;;
    return this.httpClient.get<IGroup>(dataURL).pipe(catchError(this.handleError));

    }


  //Error handling contact
  public handleError(error: HttpErrorResponse){

    let errorMessage: string ='';
    if(error.error instanceof ErrorEvent){
    // client Error
    errorMessage = 'Error : ${errror.error.message}'

    }
    else{
      // server Error
      errorMessage = 'status : ${error.status} \n message : ${error.message}';

    }

    return throwError(errorMessage);
  }
}
