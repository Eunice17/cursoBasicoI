import { NgModule } from "@angular/core";
import { appContador } from "./app-contador.component";

@NgModule({
     declarations: [
         appContador
     ],
     exports: [
         appContador
     ]
})

export class contadorModule { }