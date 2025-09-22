import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl("", {
      validators: [Validators.email, Validators.required]
    }),
    password: new FormControl("", {
      validators: [Validators.required, Validators.minLength(6)]
    }),
  });

  onSubmit() {
    console.log(this.form);
    const enteredEmail = this.form.value.email;
    const enteredPassword = this.form.value.password;
    
    console.log("Entered Email: " + enteredEmail);
    console.log("Entered PW: " + enteredPassword);
    
    this.form.value.email;
  }
}
