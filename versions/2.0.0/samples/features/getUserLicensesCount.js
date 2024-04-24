import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-6.0";

class GetUserLicensesCount
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
    static async getUserLicensesCount()
    {
        let featuresOperations = new ZOHOCRMSDK.Features.FeaturesOperations();
        let response = await featuresOperations.getUserLicencesCount();
        if (response != null)
        {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode()))
            {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.Features.ResponseWrapper)
            {
                let responseWrapper = responseHandler;
                let features = responseWrapper.getFeatures();
                if (features != null)
                {
                    for (let feature of features)
                    {
                        let components = feature.getComponents();
                        if(components != null)
                        {
                            for(let component of components)
                            {
                                console.log("Feature Component APIName : " + component.getAPIName());
                                console.log("Feature Component ModuleSupported : " + component.getModuleSupported());
                                let detail = component.getDetails();
                                if (detail != null)
                                {
                                    let limit = detail.getLimits();
                                    if(limit != null)
                                    {
                                        console.log("Feature Component Detail Limit EditionLimit: " + limit.getEditionLimit());
                                        console.log("Feature Component Detail Limit Total: " + limit.getTotal());
                                    }
                                }
                                console.log("Feature Component FeatureLabel : " + component.getFeatureLabel());
                            }
                        }
                        console.log("Feature APIName : " + feature.getAPIName());
                        let parentFeature = feature.getParentFeature();
                        if(parentFeature != null)
                        {
                            console.log("Feature ParentFeature APIName: " + parentFeature.getAPIName());
                        }
                        console.log("Feature ModuleSupported : " + feature.getModuleSupported());
                        let detail = feature.getDetails();
                        if (detail != null)
                        {
                            let limit = detail.getLimits();
                            if(limit != null)
                            {
                                console.log("Feature Detail Limit EditionLimit: " + limit.getEditionLimit());
                                console.log("Feature Detail Limit Total: " + limit.getTotal());
                            }
                            let availableCount = detail.getAvailableCount();
                            if(availableCount != null)
                            {
                                console.log("Feature Detail AvailableCount EditionLimit: " + availableCount.getEditionLimit());
                                console.log("Feature Detail AvailableCount Total: " + availableCount.getTotal());
                            }
                            let usedCount = detail.getUsedCount();
                            if(usedCount != null)
                            {
                                console.log("Feature Detail UsedCount EditionLimit: " + usedCount.getEditionLimit());
                                console.log("Feature Detail UsedCount Total: " + usedCount.getTotal());
                            }
                        }
                        console.log("Feature FeatureLabel : " + feature.getFeatureLabel());
                    }
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.Features.APIException)
            {
                let exception = responseHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                let details = exception.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + exception.getMessage());
            }
        }
    }
}
await GetUserLicensesCount.initialize();
await GetUserLicensesCount.getUserLicensesCount();