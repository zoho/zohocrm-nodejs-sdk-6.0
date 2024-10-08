import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-6.0";
class GetContactRole{
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
     * <h3> Get Contact Role </h3>
     * This method is used to get single Contact Role with ID and print the response.
     * @param {BigInt} contactRoleId The ID of the ContactRole to be obtained
     */
    static async getContactRole(contactRoleId) {
        //example
        //let contactRoleId = 2212003n;
        let contactRolesOperations = new ZOHOCRMSDK.ContactRoles.ContactRolesOperations();
        //Call getContactRole method that takes contactRoleId as parameter
        let response = await contactRolesOperations.getRole(contactRoleId);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(
                    response.getStatusCode() == 204 ? "No Content" : "Not Modified"
                );
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.ContactRoles.ResponseWrapper) {
                    let contactRoles = responseObject.getContactRoles();
                    contactRoles.forEach((contactRole) => {
                        console.log("ContactRole ID: " + contactRole.getId());
                        console.log("ContactRole Name: " + contactRole.getName());
                        console.log(
                            "ContactRole SequenceNumber: " + contactRole.getSequenceNumber()
                        );
                    });
                }
                else if (responseObject instanceof ZOHOCRMSDK.ContactRoles.APIException) {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    let details = responseObject.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach((key) => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    console.log("Message: " + responseObject.getMessage());
                }
            }
        }
    }
}
await GetContactRole.initialize();
let contactRoleId = 665390020542n;
await GetContactRole.getContactRole(contactRoleId);