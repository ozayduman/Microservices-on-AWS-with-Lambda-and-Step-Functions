const AWS = require('aws-sdk');

exports.handler = async (event) => {
   //console.log('Received event:', JSON.stringify(event, null, 4));
   for (let index = 0; index < event.Records.length; index++) {
      const record = event.Records[index].Sns;
      await uploadFile(record.MessageId, record.Message);
   }
}

async function uploadFile(message_id, message) {
   const params = {
      Bucket: 'liveproject-ozayd',
      Key: message_id + '.json',
      Body: message,
      ContentType: 'application/json', 
   };
   
   const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
   return await s3.upload(params).promise();
}

