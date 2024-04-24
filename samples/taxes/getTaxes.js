import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-6.0";
class GetTaxes{
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
     * <h3> Get Taxes </h3>
     * This method is used to get all the Organization Taxes and print the response.
     */
    static async getTaxes() {
        let taxesOperations = new ZOHOCRMSDK.Taxes.TaxesOperations();
        //Call getTaxes method
        let response = await taxesOperations.getTaxes();
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Taxes.ResponseWrapper) {
                    let orgtax = responseObject.getOrgTaxes();
                    let taxes = orgtax.getTaxes();
                    taxes.forEach(tax => {
                        console.log("Tax DisplayLabel: " + tax.getDisplayLabel());
                        console.log("Tax Name: " + tax.getName());
                        console.log("Tax ID: " + tax.getId());
                        console.log("Tax Value: " + tax.getValue().toString());
                    });
                    let preference = orgtax.getPreference();
                    if (preference != null) {
                        console.log("Preference AutoPopulateTax: " + preference.getAutoPopulateTax().toString());
                        console.log("Preference ModifyTaxRates: " + preference.getModifyTaxRates());
                    }
                }
                else if (responseObject instanceof ZOHOCRMSDK.Taxes.APIException) {
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
await GetTaxes.initialize();
await GetTaxes.getTaxes();