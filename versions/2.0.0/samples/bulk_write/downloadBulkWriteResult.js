import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-6.0";
import path from "path";
import fs from "fs";
class DownloadBulkWriteResult{
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
     * <h3> Download BulkWrite Result</h3>
     * This method is used to download the result of bulk write job.
     * @param {String} downloadUrl The URL present in the download_url key in the response of Get Bulk Write Job Details.
     * @param {String} destinationFolder The absolute path where downloaded file has to be stored.
     */
    static async downloadBulkWriteResult(downloadUrl, destinationFolder) {
        //example
        //let downloadUrl = "https://download-accl.zoho.com/v2/crm/6735/bulk-write/347706122009/347706122009.zip";
        //let destinationFolder = "/Users/user_name/Documents";
        let bulkWriteOperations = new ZOHOCRMSDK.BulkWrite.BulkWriteOperations();
        //Call downloadBulkWriteResult method that takes downloadUrl as parameter
        let response = await bulkWriteOperations.downloadBulkWriteResult(downloadUrl);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.BulkWrite.FileBodyWrapper) {
                    let streamWrapper = responseObject.getFile();
                    //Construct the file name by joining the destinationFolder and the name from StreamWrapper instance
                    let fileName = path.join(destinationFolder, streamWrapper.getName());
                    let readStream = streamWrapper.getStream();
                    //Write the stream to the destination file.
                    fs.writeFileSync(fileName, readStream);
                }
                else if (responseObject instanceof ZOHOCRMSDK.BulkWrite.APIException) {
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
await DownloadBulkWriteResult.initialize();
let downloadURL = "https://download-accl.zoho.com/v2/crm/6735/bulk-write/347706122009/347706122009.zip";
let destinationFolder = "users/documents/file";
await DownloadBulkWriteResult.downloadBulkWriteResult(downloadURL,destinationFolder);