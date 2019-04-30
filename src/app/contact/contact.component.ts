import { Component, OnInit } from '@angular/core';
import{ NgForm} from '@angular/forms';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

getname=''
getnum=''
getmail=''
getmsg=''

  onSubmit(form:NgForm){
    console.log(form.value)
    this.getname=form.value.username
    this.getnum=form.value.number
    this.getmail=form.value.email
    this.getmsg=form.value.message

  }
  

  constructor() { }

  ngOnInit() {
  }

}
