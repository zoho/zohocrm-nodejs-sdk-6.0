import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-6.0";

class UpdateRoles
{
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
    static async updateRoles()
    {
        let rolesOperations = new ZOHOCRMSDK.Roles.RolesOperations();
        let bodyWrapper = new ZOHOCRMSDK.Roles.BodyWrapper();
        let roles = [];
        let role = new ZOHOCRMSDK.Roles.Role();
        role.setId(32323242n);
        role.setName("SDk Manager");
        let reportingTo = new ZOHOCRMSDK.Roles.ReportingTo();
        reportingTo.setId(321324123231n);
        await role.setReportingTo(reportingTo);
        role.setDescription("Schedule and Manage Resources");
        role.setShareWithPeers(true);
        roles.push(role);
        bodyWrapper.setRoles(roles);
        let response = rolesOperations.updateRoles(bodyWrapper);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if(responseObject instanceof ZOHOCRMSDK.Roles.ActionWrapper) {
                    let actionResponses = responseObject.getRoles();
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.Roles.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Roles.APIException) {
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
                    });
                }
                else if (responseObject instanceof ZOHOCRMSDK.Roles.APIException) {
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
await UpdateRoles.initialize();
await UpdateRoles.updateRoles();