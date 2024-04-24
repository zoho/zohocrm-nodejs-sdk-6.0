import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-6.0";
class CheckStatus
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
    static async checkStatus(jobId, module)
    {
        let massChangeOwnerOperations = new ZOHOCRMSDK.ChangeMassOwner.MassChangeOwnerOperations(module);
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.ChangeMassOwner.CheckStatusParam.JOB_ID, jobId);
        let response = await massChangeOwnerOperations.checkStatus(paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode() + "\n");
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.ChangeMassOwner.ResponseWrapper) {
                let responseWrapper = responseHandler;
                let status = responseWrapper.getData();
                status.forEach(status1 => {
                    console.log("MassChangeOwner TotalCount : " + status1.getTotalCount() + '\n');
                    console.log("MassChangeOwner UpdatedCount : " + status1.getUpdatedCount() + '\n');
                    console.log("MassChangeOwner NotUpdatedCount : " + status1.getNotUpdatedCount() + '\n');
                    console.log("MassChangeOwner FailedCount : " + status1.getFailedCount() + '\n');
                    console.log("MassChangeOwner Status : " + status1.getStatus() + '\n');
                });
            } else if (responseHandler instanceof ZOHOCRMSDK.ChangeMassOwner.APIException) {
                let exception = responseHandler;
                console.log("Status: " + exception.getStatus().getValue() + "\n");
                console.log("Code: " + exception.getCode().getValue() + "\n");
                console.log("Details: ");
                let details = exception.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key) + "\n");
                    });
                }
                console.log("Message: " + exception.getMessage() instanceof ZOHOCRMSDK.Choice ? exception.getMessage().getValue() : exception.getMessage());
            }
        }
    }
}
let jonId = 66539000392009n;
let module = "Quotes";
await CheckStatus.initialize();
await CheckStatus.checkStatus(jonId, module);