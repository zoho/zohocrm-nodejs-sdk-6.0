import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class RollupCriteria{

	comparator;
	field;
	value;
	keyModified = new Map();
	/**
	 * The method to get the comparator
	 * @returns {String} A String representing the comparator
	 */
	getComparator()	{
		return this.comparator;

	}

	/**
	 * The method to set the value to comparator
	 * @param {String} comparator A String representing the comparator
	 */
	setComparator(comparator)	{
		if((comparator != null) && (!(Object.prototype.toString.call(comparator) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: comparator EXPECTED TYPE: String", null, null);
		}
		this.comparator = comparator;
		this.keyModified.set("comparator", 1);

	}

	/**
	 * The method to get the field
	 * @returns {MinifiedField} An instance of MinifiedField
	 */
	getField()	{
		return this.field;

	}

	/**
	 * The method to set the value to field
	 * @param {MinifiedField} field An instance of MinifiedField
	 */
	async setField(field)	{
		const MinifiedField = (await (import("./minified_field.js"))).MasterModel;
		if((field != null) && (!(field instanceof MinifiedField)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: field EXPECTED TYPE: MinifiedField", null, null);
		}
		this.field = field;
		this.keyModified.set("field", 1);

	}

	/**
	 * The method to get the value
	 * @returns {Object} An Object representing the value
	 */
	getValue()	{
		return this.value;

	}

	/**
	 * The method to set the value to value
	 * @param {Object} value An Object representing the value
	 */
	setValue(value)	{
		this.value = value;
		this.keyModified.set("value", 1);

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
	RollupCriteria as MasterModel,
	RollupCriteria as RollupCriteria
}
