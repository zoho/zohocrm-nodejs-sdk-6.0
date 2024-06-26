import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-6.0";
class AddTagsToMultipleRecords{
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
     * <h3> Add Tags To Multiple Records </h3>
     * This method is used to add tags to multiple records simultaneously and print the response.
     * @param {String} moduleAPIName The API Name of the module to add tags.
     * @param {Array} recordIds The array of the record IDs to add tags
     */
    static async addTagsToMultipleRecords(moduleAPIName, recordIds) {
        //example
        // let moduleAPIName = "module_api_name";
        // let tagNames = ["addtag1,addtag12"];
        // let recordIds = [34023026n, 527003n, 344028n];
        //Get instance of TagsOperations Class
        let tagsOperations = new ZOHOCRMSDK.Tags.TagsOperations();
        let request = new ZOHOCRMSDK.Tags.NewTagRequestWrapper();
        let tagList = [];
        let tag1 = new ZOHOCRMSDK.Tags.Tag();
        tag1.setName("tagNam3e3e12345");
        tagList.push(tag1);
        request.setTags(tagList);
        request.setOverWrite(true);
        request.setIds(recordIds);
        request.setOverWrite(false);
        //Get instance of ParameterMap Class
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.Tags.AddTagsToMultipleRecordsParam.OVER_WRITE, "false");
        //Call addTagsToMultipleRecords method that takes ParameterMap instance and moduleAPIName as parameter
        let response = await tagsOperations.addTagsToMultipleRecords(moduleAPIName, request,  paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Tags.RecordActionWrapper) {
                    let actionResponses = responseObject.getData();
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.Tags.RecordSuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Tags.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Tags.APIException) {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    let details = responseObject.getDetails();
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
await AddTagsToMultipleRecords.initialize();
let moduleAPIName = "leads";
let recordIds = ["440248074","440241371049"];
await AddTagsToMultipleRecords.addTagsToMultipleRecords(moduleAPIName,recordIds);