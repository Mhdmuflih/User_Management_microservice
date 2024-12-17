// Request interface for sending an email
export interface SendEmailRequest {
    email: string;   // Email address of the recipient
    subject: string; // Email subject
    message: string; // Email body
  }
  
  // Response interface for the result of the email operation
  export interface SendEmailResponse {
    success: boolean; // Indicates if the email was sent successfully
    message: string;  // Additional information about the operation
  }
  