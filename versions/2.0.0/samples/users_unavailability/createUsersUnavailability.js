import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-6.0";

class CreateUsersUnavailability
{
    static async initialize()
    {
        let environment = ZOHOCRMSDK.USDataCenter.PRODUCTION();
        let token = (new ZOHOCRMSDK.OAuthBuilder())
            .clientId("1000.xxxx")
            .clientSecret("xxxx")
            .grantToken("1000.xxxx.xxxx")
            .build();
        await (await new ZOHOCRMSDK.InitializeBuilder())
            .environment(environment)
            .token(token)
            .initialize();
    }

    static async createUsersUnavailability()
    {
        let usersOperations = new ZOHOCRMSDK.UnavailabilityUsers.UsersUnavailabilityOperations();
        let request = new ZOHOCRMSDK.UnavailabilityUsers.BodyWrapper();
        let userList = [];
        let  user1 = new ZOHOCRMSDK.UnavailabilityUsers.UsersUnavailability();
        user1.setComments("Unavailable");
        let  from = new Date(2023, 11, 12, 10, 12, 23 );
        user1.setFrom(from);
        let  to = new Date(2023, 11, 13, 10, 12, 23);
        user1.setTo(to);
        let user = new ZOHOCRMSDK.UnavailabilityUsers.User();
        user.setId(4402480254001n);
        await user1.setUser(user);
        userList.push(user1);
        request.setUsersUnavailability(userList);
        let response = await usersOperations.createUsersUnavailability(request);
        if(response != null)
        {
            console.log("Status Code: " + response.getStatusCode());

            let responseObject = response.getObject();

            if(responseObject != null)
            {
                if(responseObject instanceof  ZOHOCRMSDK.UnavailabilityUsers.ActionWrapper)
                {
                    let actionResponses = responseObject.getUsersUnavailability();

                    actionResponses.forEach(actionResponse => {

                        if (actionResponse instanceof ZOHOCRMSDK.UnavailabilityUsers.SuccessResponse)
                        {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }

                        else if (actionResponse instanceof ZOHOCRMSDK.UnavailabilityUsers.APIException)
                        {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                    });
                }
                else if(responseObject instanceof ZOHOCRMSDK.UnavailabilityUsers.APIException)
                {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    console.log("Code: " + responseObject.getCode().getValue());
                    let details = responseObject.getDetails();
                    console.log("Details: ");
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }
}
await CreateUsersUnavailability.initialize();
await CreateUsersUnavailability.createUsersUnavailability();
