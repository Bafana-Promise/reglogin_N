/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

import { reglogin } from '../../models/reglogin.model'
/*import { register } from '../../models/register.model';
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-loginandregister',
    templateUrl: './loginandregister.template.html'
})

export class loginandregisterComponent extends NBaseComponent implements OnInit {
    showLogin:boolean = false;

    formUser: reglogin;


    constructor() {
        super();
    
    }


    ngOnInit() {

    }

    submit(formValue){

        console.log("formValue", formValue);
        console.log("this.formUser",this.formUser)
    }
}
