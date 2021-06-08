import { reglogin } from '../src/app/models/reglogin.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
reglogin: reglogin;
//DECLARE NEW VARIABLE

constructor() {
this.reglogin = new reglogin();
//CREATE NEW DM INSTANCE
    }
}