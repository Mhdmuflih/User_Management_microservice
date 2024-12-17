import { Controller } from "@nestjs/common";
import { NotificationService } from "./notification.service";
import { GrpcMethod } from "@nestjs/microservices";
import { SendEmailRequest } from "../Interface/email.interface";


@Controller()
export class NotificationController {
  // ithille notification ann notification.service.ts
  constructor(private readonly notification: NotificationService) {}

  // ee decarator llan proto file lla "NotificationService" nn name ll gRPC service "SendNotification" athile rpc file ann.
  //  athil and request message and response message um llath
  @GrpcMethod('NotificationService', 'SendNotification')
  sendEmail(data: SendEmailRequest) {

    if (!data || !data.email || !data.message) {
      throw new Error('Invalid request data');
    }
    console.log(data, "this is the data controller");
    // athille function ann sendEmailData
    return this.notification.sendEmailData(data);
  }
}