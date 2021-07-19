const fetch = require('node-fetch');

exports.handler = async (evt) => {
   const url = process.env.BOOKING_SERVICE_URL;//'https://69yseh6gf7.execute-api.us-east-1.amazonaws.com/Prod/hotel';
   // make request
   let response = await fetch(url, {
                     method: 'POST',
                     body: JSON.stringify(evt),
                     headers: { 'Content-Type': 'application/json' },
                  });
   
   let json = await response.json();
   if (response.ok) {
      return json;
   } else if (response.status == 418) {
      throw new InvalidInputError(JSON.stringify(json));
   } else if (response.status == 503) {
      throw new TransientError(JSON.stringify(json));
   } else {
      throw new Error(JSON.stringify(json));
   }
}

function InvalidInputError(message) {
    this.name = 'InvalidInputError';
    this.message = message;
}

function TransientError(message) {
    this.name = 'TransientError';
    this.message = message;
}

InvalidInputError.prototype = new Error();
TransientError.prototype = new Error();

