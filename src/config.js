const config = {
  STRIPE_KEY: "pk_test_51IB9D0GVG76nKFXbhCzEHqjVud8eylJ1pALQpw7eHtqGcnTOPnKbqYopFDwe9tQzC8aeVvZkAWg5PK19qaCMqkHo00DVivQrlJ",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-upload-noah-stewart",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://n3347tuk74.execute-api.us-east-1.amazonaws.com/dev",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_e6DS2Ch0W",
    APP_CLIENT_ID: "utklo9qf1mh0rtn8ecanefjr6",
    IDENTITY_POOL_ID: "us-east-2:3a441560-fbb9-4f51-96d8-b301dff7c1b3",
  },
};

export default config;