import { Injectable } from "@nestjs/common";
import { EmailService } from "./mailer.service";


@Injectable()
export class NotificationService {

  // this is that email.service.ts athille functionality edkkan
  constructor(private readonly emailService: EmailService) { }


  async sendEmailData(call: { email: string, message: string },): Promise<any> {

    const { email, message } = call;

    console.log(call, "this is the call");

    try {
      const emailSend = await this.emailService.sendEmail({
        to: email,
        subject: "Notification Email",
        text: message
      });

      // ee return nere response ayi express llkk povunnu
      return { status: 'success', error_message: '' };

    } catch (error: any) {
      console.log("this error message is comes try/catch of notification service", error.message);
    }

  }
}

