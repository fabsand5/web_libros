import { HttpHeaders } from "@angular/common/http";

export class Endpoints{

    public static readonly HEADERS:HttpHeaders = new HttpHeaders({'Content-Type':'application/json' , 'Access-Control-Allow-Origin':'*'});

}