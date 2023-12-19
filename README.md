# ZOHO CRM NODEJS SDK 6.0 for API version 6

The NodeJS SDK for Zoho CRM allows developers to easily create NodeJS applications that can be integrated with Zoho CRM. This SDK serves as a wrapper for the REST APIs, making it easier to access and utilize the services of Zoho CRM. 
Authentication to access the CRM APIs is done through OAuth2.0, and the authentication process is streamlined through the use of the NodeJS SDK. The grant and access/refresh tokens are generated and managed within the SDK code, eliminating the need for manual handling during data synchronization between Zoho CRM and the client application.

This repository includes the NodeJS SDK for API v6 of Zoho CRM. Check [Versions](https://github.com/zoho/zohocrm-nodejs-sdk-6.0/releases) for more details on the versions of SDK released for this API version.

License
=======

    Copyright (c) 2021, ZOHO CORPORATION PRIVATE LIMITED 
    All rights reserved. 

    Licensed under the Apache License, Version 2.0 (the "License"); 
    you may not use this file except in compliance with the License. 
    You may obtain a copy of the License at 
    
        http://www.apache.org/licenses/LICENSE-2.0 
    
    Unless required by applicable law or agreed to in writing, software 
    distributed under the License is distributed on an "AS IS" BASIS, 
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
    See the License for the specific language governing permissions and 
    limitations under the License.

## Latest Version

- [1.0.0](/versions/1.0.0/README.md)

    - NodeJS SDK upgraded to support v6 APIs.

    - NodeJS SDK improved to support the following new APIs

        - Unsubscribe Links
        - Find and Merge API
        - Get Related Records of Deleted Record API
        - Digest API
        - Features API
        - Global Picklist API
        - Unblock Email API      


For older versions, please [refer](https://github.com/zoho/zohocrm-nodejs-sdk-6.0/releases).


## Including the SDK in your project
You can include the SDK to your project using:

For including the latest [version](https://github.com/zoho/zohocrm-nodejs-sdk-6.0/releases/tag/1.0.0) using npm

  - Install **Node** from [nodejs.org](https://nodejs.org/en/download/) (if not installed).

  - Install **NodeJS SDK**

    - Navigate to the workspace of your client app.
    
    - Run the command below:

        ```sh
        npm install @zohocrm/nodejs-sdk-6.0
        ```
For more details, kindly refer [here](/versions/1.0.0/README.md).