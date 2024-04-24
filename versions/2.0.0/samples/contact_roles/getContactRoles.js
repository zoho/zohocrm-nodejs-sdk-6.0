import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-6.0";
class GetContactRoles{
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
     * <h3> Get Contact Roles </h3>
     * This method is used to get all the Contact Roles and print the response.
     */
    static async getContactRoles() {
        let contactRolesOperations = new ZOHOCRMSDK.ContactRoles.ContactRolesOperations();
        //Call getContactRoles method
        let response = await contactRolesOperations.getRoles();
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(
                    response.getStatusCode() === 204 ? "No Content" : "Not Modified"
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
                else if (responseObject instanceof ZOHOCRMSDK.ContactRoles.APIException)
                {
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
await GetContactRoles.initialize();
await GetContactRoles.getContactRoles();