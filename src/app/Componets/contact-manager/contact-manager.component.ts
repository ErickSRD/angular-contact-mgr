import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from "@angular/core";
import { IContact } from "src/app/models/IContact";
import { IGroup } from 'src/app/models/IGroup';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {

  public loading: boolean = false;
  public contacts: IContact[]= [];
  public errorMessage: string | null = null;



  constructor(private contactService: ContactService) { }

  ngOnInit(): void {

    this.getAllContactsFromServer();


  }

  public getAllContactsFromServer(){

    this.loading = true;
    this.contactService.getAllContacts().subscribe((data : IContact[]) =>{
     this.contacts = data;
     this.loading = false;

     console.log(this.contacts);


    });
  }


  public clickDeleteContact (contactId : string | undefined ){
    if(contactId){
      this.contactService.DeleteContact(contactId).subscribe( (data : {}) => {

        this.getAllContactsFromServer();

      });

    }
  }

}
