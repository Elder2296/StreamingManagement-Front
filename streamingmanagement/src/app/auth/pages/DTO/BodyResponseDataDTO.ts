export class BodyResponseDataDTO{
  usuario: string;
  token: string;
  fechaExpiracion: Date;

  constructor(user:string,token:string, fecha: Date ){
    this.usuario = user;
    this.token = token;
    this.fechaExpiracion = fecha;
  }


}