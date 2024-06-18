import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {

  route = inject(ActivatedRoute);

//get the plant ids favourited by the user by user_id 
  users: any = [
    {user_id: 12345, }
  ]
}
