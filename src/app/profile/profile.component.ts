import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  name = new FormControl('');
  email = new FormControl('');

  saveData(){
    alert(this.name.value)
  }
}
