import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Detail{

	limits;
	usedCount;
	keyModified = new Map();
	/**
	 * The method to get the limits
	 * @returns {Limit} An instance of Limit
	 */
	getLimits()	{
		return this.limits;

	}

	/**
	 * The method to set the value to limits
	 * @param {Limit} limits An instance of Limit
	 */
	async setLimits(limits)	{
		const Limit = (await (import("./limit.js"))).MasterModel;
		if((limits != null) && (!(limits instanceof Limit)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: limits EXPECTED TYPE: Limit", null, null);
		}
		this.limits = limits;
		this.keyModified.set("limits", 1);

	}

	/**
	 * The method to get the usedCount
	 * @returns {Limit} An instance of Limit
	 */
	getUsedCount()	{
		return this.usedCount;

	}

	/**
	 * The method to set the value to usedCount
	 * @param {Limit} usedCount An instance of Limit
	 */
	async setUsedCount(usedCount)	{
		const Limit = (await (import("./limit.js"))).MasterModel;
		if((usedCount != null) && (!(usedCount instanceof Limit)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: usedCount EXPECTED TYPE: Limit", null, null);
		}
		this.usedCount = usedCount;
		this.keyModified.set("used_count", 1);

	}

	/**
	 * The method to check if the user has modified the given key
	 * @param {String} key A String representing the key
	 * @returns {number} A number representing the modification
	 */
	isKeyModified(key)	{
		if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
		}
		if(this.keyModified.has(key))	{
			return this.keyModified.get(key);
		}
		return null;

	}

	/**
	 * The method to mark the given key as modified
	 * @param {String} key A String representing the key
	 * @param {number} modification A number representing the modification
	 */
	setKeyModified(key, modification)	{
		if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
		}
		if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: number", null, null);
		}
		this.keyModified.set(key, modification);

	}

}
export {
	Detail as MasterModel,
	Detail as Detail
}
