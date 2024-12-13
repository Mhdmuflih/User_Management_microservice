import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import path from "path";

const packageDefinition = protoLoader.loadSync(
    path.resolve(__dirname, '../proto/Notification.proto'),
    {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    },
  );
  
  const notificationProto: any = grpc.loadPackageDefinition(packageDefinition).NotificationService;
  
  // Create the gRPC client
  const client = new notificationProto(
    'localhost:50051',
    grpc.credentials.createInsecure(),
  );
  
  export const sendNotification = (email: string, message: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      client.SendNotification({ email, message }, (error: any, response: any) => {
        if (error) {
          return reject(error);
        }
        resolve(response);
      });
    });
  };