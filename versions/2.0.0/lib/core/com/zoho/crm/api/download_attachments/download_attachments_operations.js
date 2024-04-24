import {Param} from "../../../../../../routes/param.js";
import {ParameterMap} from "../../../../../../routes/parameter_map.js";
import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class DownloadAttachmentsOperations{
	/**
	 * The method to get download attachments details
	 * @param {BigInt} recordId A BigInt representing the recordId
	 * @param {String} module A String representing the module
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getDownloadAttachmentsDetails(recordId, module, paramInstance=null)	{
		if((!(Object.prototype.toString.call(recordId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: BigInt", null, null);
		}
		if((!(Object.prototype.toString.call(module) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: String", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v6/");
		apiPath = apiPath.concat(module.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(recordId.toString());
		apiPath = apiPath.concat("/Emails/actions/download_attachments");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "multipart/form-data");

	}

}
class GetDownloadAttachmentsDetailsParam{

	static USER_ID = new Param("user_id", "com.zoho.crm.api.DownloadAttachments.GetDownloadAttachmentsDetailsParam");
	static MESSAGE_ID = new Param("message_id", "com.zoho.crm.api.DownloadAttachments.GetDownloadAttachmentsDetailsParam");
	static ID = new Param("id", "com.zoho.crm.api.DownloadAttachments.GetDownloadAttachmentsDetailsParam");
	static NAME = new Param("name", "com.zoho.crm.api.DownloadAttachments.GetDownloadAttachmentsDetailsParam");
}

export {
	DownloadAttachmentsOperations as MasterModel,
	DownloadAttachmentsOperations as DownloadAttachmentsOperations,
	GetDownloadAttachmentsDetailsParam as GetDownloadAttachmentsDetailsParam
}
