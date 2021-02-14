// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const createNotification = (notification) => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then((doc) => console.log("notification added", doc));
};

exports.spotCreated = functions.firestore
  .document("spots/{spotId}")
  .onCreate((doc) => {
    const spot = doc.data();
    const notification = {
      content: "Added a new Spot",
      user: `${spot.authorFirstName} ${spot.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
    };

    return createNotification(notification);
  });
