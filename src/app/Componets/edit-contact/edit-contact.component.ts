import { Observable } from 'rxjs';
import { ContactService } from './../../services/contact.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/models/IContact';
import { IGroup } from 'src/app/models/IGroup';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  public loading : boolean = false;
  public contactId : string | null  = null;
  public contact: IContact = {} as IContact;
  public errorMessage : string | null = null;
  public groups:  IGroup[] = [] as IGroup[];



  constructor( private ActivatedRoute:ActivatedRoute , private contactService: ContactService, private router: Router){

   }

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe( (param: ParamMap) =>{
       this.contactId = param.get('contactId')

      });
      if (this.contactId) {
        this.contactService.getContact(this.contactId).subscribe((data: IContact)=>{
          this.contact = data;
          this.loading;

        },
        err => {
          this.errorMessage = err;
          this.loading = false;
        }
      )}

    }

 public submitUpdate(){
 if(this.contactId){
  this.contactService.UpdateContact( this.contact, this.contactId! ).subscribe((data: IContact)=>{
    this.router.navigate(['/']).then();
    }, err => {
      this.errorMessage = err;
      this.router.navigate(['/contacts/edit/${this.contactId}']).then();
    });
 }

 }

}
