var Firebase = require('firebase');
 
exports.handler = (event, context, callback) => {
   
   // You can get these details from the 'overview' page of firebase
   // then click "add firebase to your web app"
   var config = { 
        apiKey: 
        authDomain: 
        databaseURL: 
        storageBucket: 
        messagingSenderId: 
    };
 
    Firebase.initializeApp(config);
    const db=Firebase.firestore();
    switch (event.request.type) {
        case "LaunchRequest":
        context.succeed(generateResponse(buildSpeechletResponse("Welcome to Hello World Greeter.", false)))
             
        let data = {
        stringExample: 'Hello, World!',
        booleanExample: true,
        numberExample: 3.14159265,
        dateExample: admin.firestore.Timestamp.fromDate(new Date('December 10, 1815')),
        arrayExample: [5, true, 'hello'],
        nullExample: null,
        objectExample: {
          a: 5,
          b: true
        }
      };
      let setDoc = db.collection('data').doc('one').set(data);
      break;
    }

      
}
buildSpeechletResponse = (outputText, shouldEndSession) => {
    return {
    outputSpeech: {
    type: "PlainText",
    text: outputText
    },
    shouldEndSession: shouldEndSession
    }
    }
    generateResponse = (speechletResponse) => {
    return {
    version: "1.0",
    response: speechletResponse
    }
    }