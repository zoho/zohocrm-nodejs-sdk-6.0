import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-6.0";
class GetVariableById{
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
     * <h3> Get Variable By Id </h3>
     * This method is used to get the details of any specific variable.
     * Specify the unique ID of the variable in your API request to get the data for that particular variable group.
     * @param {BigInt} variableId The ID of the Variable to be obtained
     */
    static async getVariableById(variableId) {
        let variablesOperations = new ZOHOCRMSDK.Variables.VariablesOperations();
        //Get instance of ParameterMap Class
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        /* Possible parameters of Get Variable By ID operation */
        await paramInstance.add(ZOHOCRMSDK.Variables.GetVariableByIDParam.GROUP, "440248345005");
        //Call getVariableByGroupId method that takes paramInstance and variableId as parameter
        let response = await variablesOperations.getVariableById(variableId, paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Variables.ResponseWrapper) {
                    let variables = responseObject.getVariables();
                    variables.forEach(variable => {
                        console.log("Variable ID: " + variable.getId());
                        console.log("Variable APIName: " + variable.getAPIName());
                        console.log("Variable Name: " + variable.getName());
                        console.log("Variable Description: " + variable.getDescription());
                        console.log("Variable Type: " + variable.getType());
                        let variableGroup = variable.getVariableGroup();
                        if (variableGroup != null) {
                            console.log("Variable VariableGroup APIName: " + variableGroup.getAPIName());
                            console.log("Variable VariableGroup ID: " + variableGroup.getId());
                        }
                        console.log("Variable Value: " + variable.getValue());
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
await GetVariableById.initialize();
let variableId = 66539000403505n;
await GetVariableById.getVariableById(variableId);