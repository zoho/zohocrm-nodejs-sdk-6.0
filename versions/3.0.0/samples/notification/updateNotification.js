import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-6.0";
class UpdateNotification{
    static async initialize()
    {
        let environment = ZOHOCRMSDK.USDataCenter.PRODUCTION();
        let token = (new ZOHOCRMSDK.OAuthBuilder())
            .clientId("1000.xxxx")
            .clientSecret("xxxx")
            .refreshToken("1000.xxxx.xxxx")
            .build();
        await (await new ZOHOCRMSDK.InitializeBuilder())
            .environment(environment)
            .token(token)
            .initialize();
    }
    /**
     * <h3> Update Specific Information of a Notification </h3>
     * This method is used to update single Notification and print the response.
     */
    static async updateNotification() {
        let notificationOperations = new ZOHOCRMSDK.Notifications.NotificationsOperations();
        let bodyWrapper = new ZOHOCRMSDK.Notifications.BodyWrapper();
        let notificationsArray = [];
        let notification1 = new ZOHOCRMSDK.Notifications.Notification();
        notification1.setChannelId("1006800211");
        let events = ["Accounts.all"];
        notification1.setEvents(events);
        notification1.setChannelExpiry(new Date());
        notification1.setToken("TOKEN_FOR_VERIFICATION_OF_10068002");
        notification1.setNotifyUrl("https://www.zohoapis.com");
        notificationsArray.push(notification1);
        bodyWrapper.setWatch(notificationsArray);
        //Call updateNotification method that takes BodyWrapper instance as parameters
        let response = await notificationOperations.updateNotification(bodyWrapper);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Notifications.ActionWrapper) {
                    let actionResponses = responseObject.getWatch();
                    for (let actionResponse of actionResponses) {
                        if (actionResponse instanceof ZOHOCRMSDK.Notifications.SuccessResponse) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if(details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    if (Array.isArray(details.get(key))) {
                                        let dataList = details.get(key);
                                        if (dataList.length > 0 && dataList[0] instanceof ZOHOCRMSDK.Notifications.Notification) {
                                            for (let event of dataList) {
                                                console.log("Notification ChannelExpiry: " + event.getChannelExpiry());
                                                console.log("Notification ResourceUri: " + event.getResourceUri());
                                                console.log("Notification ResourceId: " + event.getResourceId());
                                                console.log("Notification ResourceName: " + event.getResourceName());
                                                console.log("Notification ChannelId: " + event.getChannelId());
                                            }
                                        }
                                    }
                                    else {
                                        console.log(key + " : " + details.get(key));
                                    }
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.Notifications.APIException) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage());
                        }
                    }
                }
                else if (responseObject instanceof ZOHOCRMSDK.Notifications.APIException) {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    let details = responseObject.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    console.log("Message: " + responseObject.getMessage());
                }
            }
        }
    }
}
await UpdateNotification.initialize();
await UpdateNotification.updateNotification();