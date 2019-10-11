export class RegistrationBean {

    public organizationName: string;
    public fullName:string;
    public email:string;
    public countryCode:string;
    public phoneNumber:string;
    public jobType:string;
    public password:string;

    public constructor(init?: Partial<RegistrationBean>) {
        Object.assign(this, init);
    }

}
