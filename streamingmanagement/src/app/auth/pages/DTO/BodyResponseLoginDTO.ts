import { BodyResponseDataDTO } from "./BodyResponseDataDTO";

export class BodyResposeLoginDTO {
  code: number;
  message: string;
  data: BodyResponseDataDTO;
  constructor(code: number, message: string, data: BodyResponseDataDTO){
    this.code = code;
    this.message = message;
    this.data = data;
  }
}