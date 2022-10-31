import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/models/IContact';
import { IGroup } from 'src/app/models/IGroup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  public loading : boolean = false;
  public contact : IContact = {} as IContact;
  public errorMessage : string | null = null;
  public groups  : IGroup[] = [] as IGroup[];

  constructor(private contactService: ContactService, private router : Router) { }

  ngOnInit(): void {
    this.contactService.getAllGroup().subscribe((data: IGroup[])=>{
      this.groups = data;

    }, err => {
        this.errorMessage = err;
    }
     );


  }

  public createSubmit(){
    this.contactService.createContact(this.contact).subscribe((data: IContact)=>{
    this.router.navigate(['/']).then();
    }, err => {
      this.errorMessage = err;
      this.router.navigate(['/contacts/add']).then();
    });
  }

}
