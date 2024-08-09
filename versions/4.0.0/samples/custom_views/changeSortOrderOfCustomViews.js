import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-6.0";

class ChangeSortOrderOfCustomViews
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
    static async changeSortOrderOfCustomViews(moduleAPIName)
    {
        let customViewsOperations = new ZOHOCRMSDK.CustomViews.CustomViewsOperations();
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.CustomViews.GetCustomViewsParam.MODULE, moduleAPIName);
        let request = new ZOHOCRMSDK.CustomViews.BodyWrapper();
        let customViews = [];
        let customView = new ZOHOCRMSDK.CustomViews.CustomViews();
        customView.setId(3477061783225n);
        customView.setSortOrder(new ZOHOCRMSDK.Choice("asc"));
        let sortBy = new ZOHOCRMSDK.CustomViews.SortBy();
        sortBy.setAPIName("Email");
        sortBy.setId(34770602599n);
        await customView.setSortBy(sortBy);
        customViews.push(customView);
        request.setCustomViews(customViews);
        let response = await customViewsOperations.changeSortOrderOfCustomViews(request, paramInstance);
        if (response != null)
        {
            console.log("Status code : " + response.getStatusCode() + "\n");
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.CustomViews.ActionWrapper)
            {
                let actionWrapper = actionHandler;
                let actionResponses = actionWrapper.getCustomViews();
                actionResponses.forEach(actionResponse => {
                    if (actionResponse instanceof ZOHOCRMSDK.CustomViews.SuccessResponse)
                    {
                        let successResponse = actionResponse;
                        console.log("Status: " + successResponse.getStatus().getValue() + "\n");
                        console.log("Code: " + successResponse.getCode().getValue() + "\n");
                        console.log("Details: ");
                        let details = actionResponse.getDetails();
                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key) + "\n");
                            });
                        }
                        console.log("Message: " + successResponse.getMessage() instanceof ZOHOCRMSDK.Choice ? successResponse.getMessage().getValue() : successResponse.getMessage());
                    }
                    if (actionResponse instanceof ZOHOCRMSDK.CustomViews.APIException)
                    {
                        let exception = actionResponse;
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
                });
            }
            else if (actionHandler instanceof ZOHOCRMSDK.CustomViews.APIException)
            {
                let exception = actionHandler;
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
let moduleAPIName = "Leads";
await ChangeSortOrderOfCustomViews.initialize();
await ChangeSortOrderOfCustomViews.changeSortOrderOfCustomViews(moduleAPIName);