import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form_data = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {

  }

  public login() {
    this.authService.login(this.form_data.controls.email.value, this.form_data.controls.password.value)
  }

}
