import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { BodyRequestLoginDTO } from '../DTO/BodyRequestLoginDTO';
import { AuthService} from '../../service/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.css']
})
export class LoginPageComponent implements OnInit{
  loginForm: FormGroup;
  usuario: string="";
  clave: string ="";
  bodyRequest! : BodyRequestLoginDTO ;

  /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
  constructor(
    private _formBuilder: FormBuilder,
    private loginService: AuthService
  ){
    this.loginForm = new FormGroup({
      'usuario': new FormControl(''),
      'clave': new FormControl('')
    })

   
  }

  ngOnInit(): void {
    sessionStorage.clear();
  }

  iniciarSesion(){
    this.usuario = this.loginForm.value['usuario'];
    this.clave = this.loginForm.value['clave']; 

    this.bodyRequest = new BodyRequestLoginDTO(this.usuario, this.clave);

    this.loginService.login(this.bodyRequest)
                      .subscribe(resp =>{
                        console.log(resp);
                        sessionStorage.setItem(environment.TOKEN_NAME, resp.data.token)


                      });

  }
}
