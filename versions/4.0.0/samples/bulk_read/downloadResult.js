import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-6.0";
import path from "path";
import fs from "fs";
class DownloadResult{
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
     * <h3> Download Result</h3>
     * This method is used to download the result of Bulk Read operation
     * @param {BigInt} jobId The unique ID of the bulk read job.
     * @param {String} destinationFolder The absolute path where downloaded file has to be stored.
     */
    static async downloadResult(jobId, destinationFolder) {
        //example
        //String jobId = 2461001n;
        //String destinationFolder = "/Users/user_name/Documents";
        let bulkReadOperations = new ZOHOCRMSDK.BulkRead.BulkReadOperations();
        //Call downloadResult method that takes jobId as parameter
        let response = await bulkReadOperations.downloadResult(jobId);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.BulkRead.FileBodyWrapper) {
                    let streamWrapper = responseObject.getFile();
                    //Construct the file name by joining the destinationFolder and the name from StreamWrapper instance
                    let fileName = path.join(destinationFolder, streamWrapper.getName());
                    let readStream = streamWrapper.getStream();
                    //Write the stream to the destination file.
                    fs.writeFileSync(fileName, readStream);
                }
                else if (responseObject instanceof ZOHOCRMSDK.BulkRead.APIException) {
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
await DownloadResult.initialize();
let jobId = 100063n;
let destinationFolder = "users/documents/file";
await DownloadResult.downloadResult(jobId,destinationFolder);