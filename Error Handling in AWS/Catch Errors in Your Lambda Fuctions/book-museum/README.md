### AWS CLI COMMANDS:
1. Create deployment package:
   `zip -r book-museum.zip index.js node_modules`
2. create role and attach policy (AWSLambdaBasicExecutionRole):
   * ```
     aws iam create-role --role-name BookMuseumLambdaRole --assume-role-policy-document '{"Version": "2012-10-17","Statement": [{ "Effect": "Allow", "Principal": {"Service": "lambda.amazonaws.com"}, "Action": "sts:AssumeRole"}]}'
     ```
   * ```
     aws iam attach-role-policy --role-name BookMuseumLambdaRole --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
     ```
3. Create Lambda function:
   * ```
     aws lambda create-function --function-name BookMuseum --handler index.handler --runtime nodejs14.x --role arn:aws:iam::363098689610:role/BookMuseumLambdaRole --timeout 3 --zip-file fileb://book-museum.zip --publish
     ```

4. Invoke the function:
   ```
    aws lambda invoke \
     --function-name BookMuseum \
     --payload '{ "buyer_id": "mariano", "museum_name": "tate gallery", "when": "2020-03-14"}' \
     response.json
   ```
   

### FOR WINDOWS:

1. Create deployment package:
   `zip -r book-museum.zip index.js node_modules`
2. create role and attach policy (AWSLambdaBasicExecutionRole):
   * ```
     aws iam create-role --role-name BookMuseumLambdaRole --assume-role-policy-document "{""Version"": ""2012-10-17"",""Statement"": [{ ""Effect"": ""Allow"", ""Principal"": {""Service"": ""lambda.amazonaws.com""}, ""Action"": ""sts:AssumeRole""}]}"
     ```
   * ```
     aws iam attach-role-policy --role-name BookMuseumLambdaRole --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
     ```
3. Create Lambda function:
   * ```
     aws lambda create-function --function-name BookMuseum --handler index.handler --runtime nodejs14.x --role arn:aws:iam::363098689610:role/BookMuseumLambdaRole --timeout 3 --zip-file fileb://book-museum.zip --publish
     ```

4. Invoke the function:
   aws lambda invoke --function-name BookMuseum --payload "{""buyer_id"": ""mariano"", ""museum_name": ""tate gallery"", ""when"": ""2020-03-14""}"
   


OUTPUTS:
2. ```
   {
    "Role": {
        "Path": "/",
        "RoleName": "BookMuseumLambdaRole",
        "RoleId": "AROAVJCS6KBFLPQT4ZLMM",
        "Arn": "arn:aws:iam::363098689610:role/BookMuseumLambdaRole",
        "CreateDate": "2021-07-08T11:29:57+00:00",
        "AssumeRolePolicyDocument": {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Effect": "Allow",
                    "Principal": {
                        "Service": "lambda.amazonaws.com"
                    },
                    "Action": "sts:AssumeRole"
                }
            ]
        }
    }
}
   ```
   
3. ```
      {
         "FunctionName": "BookMuseum",
         "FunctionArn": "arn:aws:lambda:us-east-1:363098689610:function:BookMuseum",
         "Runtime": "nodejs14.x",
         "Role": "arn:aws:iam::363098689610:role/BookMuseumLambdaRole",
         "Handler": "index.handler",
         "CodeSize": 49201,
         "Description": "",
         "Timeout": 3,
         "MemorySize": 128,
         "LastModified": "2021-07-08T11:35:27.638+0000",
         "CodeSha256": "TH3SqjgbfacZCNNVBhbtTwIKjNP3zl1ybpQewi6vjV0=",
         "Version": "1",
         "TracingConfig": {
         "Mode": "PassThrough"
         },
         "RevisionId": "ca5bff05-8827-4c83-901a-3235622a72e1",
         "State": "Active",
         "LastUpdateStatus": "Successful",
         "PackageType": "Zip"
      }

   ```
4. ```
   {
      "when": "2020-03-14",
      "reservation_id": "CLBFL",
      "name": "Tate Gallery"
   }
   ```