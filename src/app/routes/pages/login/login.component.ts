import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../core/settings/settings.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { HttpService } from './../../../shared/services/http.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(public settings: SettingsService, fb: FormBuilder,private httpService : HttpService, private router : Router) {

        this.loginForm = fb.group({
            'email': [null, Validators.compose([Validators.required, CustomValidators.email])],
            'password': [null, Validators.required]
        });
    }

    submitForm($ev, value: any) {
        $ev.preventDefault();
        for (let c in this.loginForm.controls) {
            this.loginForm.controls[c].markAsTouched();
        }
        if (this.loginForm.valid) {
            this.httpService.post('v1/auth/login',value)
            .subscribe((data:any) => {
                console.log(data.token);
                sessionStorage.setItem('token',data.token);
                this.router.navigate(['/home']);
            });
        }
    }

    ngOnInit() {

    }

}
