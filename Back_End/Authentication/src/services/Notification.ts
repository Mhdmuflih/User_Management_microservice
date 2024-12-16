// import grpc from "@grpc/grpc-js";
// import protoLoader from "@grpc/proto-loader";


// import path from "path";
// import * as protoLoader from '@grpc/proto-loader';
// import * as grpc from '@grpc/grpc-js'; // For gRPC usage


// const packageDefinition = protoLoader.loadSync(
//     path.resolve(__dirname, '../proto/Notification.proto'),
//     {
//       keepCase: true,
//       longs: String,
//       enums: String,
//       defaults: true,
//       oneofs: true,
//     },
//   );

//   const notificationProto: any = grpc.loadPackageDefinition(packageDefinition).NotificationService;

//   // Create the gRPC client
//   const client = new notificationProto('localhost:50051', grpc.credentials.createInsecure(),);

//   export const sendNotification = (email: string, message: string): Promise<any> => {
//     return new Promise((resolve, reject) => {
//       const request = {email , message};
//       console.log('requset in grpc', request);
//       client.SendNotification({ email, message }, (error: any, response: any) => {
//         if (error) {
//           console.log( "error in grpc notification service in clint" ,error.message)
//           return reject(error);
//         }
//         resolve(response);
//       });
//     });
//   };



// this is rafii
// --------------------------

// import path from "path";
// import * as grpc from '@grpc/grpc-js';
// import * as protoLoader from '@grpc/proto-loader';

// const ProtoPath = path.resolve(__dirname,"../proto/Notification.proto");

// const packageDefinition = protoLoader.loadSync(ProtoPath,
//     {
//       keepCase: true,
//       longs: String,
//       enums: String,
//       defaults: true,
//       oneofs: true,
//     },
//   );

// const notificationProto: any = grpc.loadPackageDefinition(packageDefinition).notification;

// const client = new notificationProto('0.0.0.0:50051', grpc.credentials.createInsecure());

// export const sendNotification = (email: String, message: String): Promise<any> => {
//     return new Promise((resolve, reject) => {
//       const request = {email, message}
//       console.log(request, "this is the request of the grpc client");

//       client.SendNotification(request, (error: any, response: any) => {
//         if(error) {
//           console.log("this error is grpc error of client",error.message);
//           reject(error);
//         }else {
//           resolve(response);
//         }
//       })
//     })
// }


// import * as grpc from '@grpc/grpc-js';
// import * as protoLoader from '@grpc/proto-loader';
// import path from 'path';

// // Resolve the correct path for the Notification.proto file
// const ProtoPath = path.resolve(__dirname, "../proto/Notification.proto");

// // Load the proto file using protoLoader
// const packageDefinition = protoLoader.loadSync(ProtoPath, {
//   keepCase: true,
//   longs: String,
//   enums: String,
//   defaults: true,
//   oneofs: true,
// });

// // Load the gRPC package definition from the proto file
// const notificationProto: any = grpc.loadPackageDefinition(packageDefinition).notification;

// // Create a gRPC client using the loaded proto definition
// const client = new notificationProto.NotificationService('0.0.0.0:50051', grpc.credentials.createInsecure());

// // Function to send a notification
// export const sendNotification = (email: string, message: string): Promise<any> => {
//   return new Promise((resolve, reject) => {
//     const request = { email, message };
//     console.log(request, "this is the request of the grpc client");

//     // Call the SendNotification method on the client
//     client.SendNotification(request, (error: any, response: any) => {
//       if (error) {
//         console.log("this error is grpc error of client", error.message);
//         reject(error);
//       } else {
//         resolve(response);
//       }
//     });
//   });
// };




import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";

// proto file ntte file directry edkkan
const ProtoPath = path.resolve(__dirname, "../proto/Notification.proto");

// Load the proto file using protoLoader
const packageDefinition = protoLoader.loadSync(ProtoPath, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

// notification proto last .notification is that package name;
const notificationProto: any = grpc.loadPackageDefinition(packageDefinition).notification;

// this is gRPC servicer set cheyyan ith notification nere mukalil lla varibale ann athill proto file edthe davum
// athille gRPC service aann NotificationService...
const client: any = new notificationProto.NotificationService('localhost:50051', grpc.credentials.createInsecure());


// ith ann client ntte edth nammal eyutha ayakande sathanam . userManagement ll call cheyyum.
export const sendNotification = (email: string, message: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        const request = { email, message };

        // console.log("This is the request of the notification service:", request);

        client.SendNotification(request, (error: any, response: any) => {
            if (error) {
                console.log("Error in gRPC notification in client side: ", error);
                reject(error); // Reject the promise with the error
            } else {
                console.log('Notification sent successfully: ', response);
                resolve(response); // Resolve with the response
            }
        });

    });
};
