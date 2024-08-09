import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-6.0";
class UpdateVariables{
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
     * <h3> Update Variables </h3>
     * This method is used to update details of variables in CRM and print the response.
     */
    static async updateVariables() {
        let variablesOperations = new ZOHOCRMSDK.Variables.VariablesOperations();
        let request = new ZOHOCRMSDK.Variables.BodyWrapper();
        let variableArray = [];
        let variable1 = new ZOHOCRMSDK.Variables.Variable();
        variable1.setId(347706112581011n);
        variable1.setValue("4763");
        variableArray.push(variable1);
        variable1 = new ZOHOCRMSDK.Variables.Variable();
        variable1.setId(34096432275035n);
        variable1.setDescription("This is a new description");
        variableArray.push(variable1);
        variable1 = new ZOHOCRMSDK.Variables.Variable();
        variable1.setId(34096432275035n);
        variable1.setAPIName("NewAPI");
        variableArray.push(variable1);
        request.setVariables(variableArray);
        //Call updateVariables method that takes BodyWrapper class instance as parameter
        let response = await variablesOperations.updateVariables(request);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Variables.ActionWrapper) {
                    let actionResponses = responseObject.getVariables();
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.Variables.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Variables.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Variables.APIException) {
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
await UpdateVariables.initialize();
await UpdateVariables.updateVariables();