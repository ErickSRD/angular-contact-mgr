import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IContact } from 'src/app/models/IContact';
import { IGroup } from 'src/app/models/IGroup';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  public loading: boolean = false;
  public contactId: string | null =  null;
  public contact: IContact= {} as IContact;
  public errorMessage: string | null = null;
  public group: IGroup = {} as IGroup;

  constructor(private activateRoute: ActivatedRoute
    ,private contactService: ContactService)  { }

  ngOnInit(): void {

    this.activateRoute.paramMap.subscribe((param: ParamMap)=>{

      this.contactId = param.get('contactId');

    });
    if (this.contact){
      this.loading = true;
       this.contactService.getContact(this.contactId).subscribe((data: IContact)=>{
        this.contact = data;
        this.loading;
        this.contactService.getGroup(data).subscribe((data: IGroup)=>{
          this.group = data;

        } )

      });
    }


  }

}
