import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-6.0";

class GetRecordMerge
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
    static async getRecordMerge(module, masterrecordid)
    {
        let findAndMergeOperations = new ZOHOCRMSDK.AndFindMerge.FindAndMergeOperations(module, masterrecordid);
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        paramInstance.add(ZOHOCRMSDK.AndFindMerge.GetRecordMergeParam.JOB_ID, 347703001n);
        let response = await findAndMergeOperations.getRecordMerge(paramInstance);
        if (response != null)
        {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode()))
            {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.AndFindMerge.ResponseWrapper)
            {
                let responseWrapper =  responseHandler;
                let mergeList = responseWrapper.getMerge();
                for(let merge in mergeList)
                {
                    console.log("RecordMerge JobId :" + merge.getJobId());
                    console.log("RecordMerge Status :" + merge.getStatus());
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.AndFindMerge.APIException)
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
let module = "leads";
let masterRecordId = 33333333345324n;
await GetRecordMerge.initialize();
await GetRecordMerge.getRecordMerge(module, masterRecordId);