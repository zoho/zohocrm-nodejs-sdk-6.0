import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class HierarchyPreferences{

	type;
	strictlyReporting;
	keyModified = new Map();
	/**
	 * The method to get the type
	 * @returns {Choice} An instance of Choice
	 */
	getType()	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param {Choice} type An instance of Choice
	 */
	setType(type)	{
		if((type != null) && (!(type instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: type EXPECTED TYPE: Choice", null, null);
		}
		this.type = type;
		this.keyModified.set("type", 1);

	}

	/**
	 * The method to get the strictlyReporting
	 * @returns {Boolean} A Boolean representing the strictlyReporting
	 */
	getStrictlyReporting()	{
		return this.strictlyReporting;

	}

	/**
	 * The method to set the value to strictlyReporting
	 * @param {Boolean} strictlyReporting A Boolean representing the strictlyReporting
	 */
	setStrictlyReporting(strictlyReporting)	{
		if((strictlyReporting != null) && (!(Object.prototype.toString.call(strictlyReporting) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: strictlyReporting EXPECTED TYPE: Boolean", null, null);
		}
		this.strictlyReporting = strictlyReporting;
		this.keyModified.set("strictly_reporting", 1);

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
	HierarchyPreferences as MasterModel,
	HierarchyPreferences as HierarchyPreferences
}
