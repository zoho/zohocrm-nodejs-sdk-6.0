import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class ConvertMapping{

	contacts;
	deals;
	accounts;
	keyModified = new Map();
	/**
	 * The method to get the contacts
	 * @returns {ModuleMapping} An instance of ModuleMapping
	 */
	getContacts()	{
		return this.contacts;

	}

	/**
	 * The method to set the value to contacts
	 * @param {ModuleMapping} contacts An instance of ModuleMapping
	 */
	async setContacts(contacts)	{
		const ModuleMapping = (await (import("./module_mapping.js"))).MasterModel;
		if((contacts != null) && (!(contacts instanceof ModuleMapping)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: contacts EXPECTED TYPE: ModuleMapping", null, null);
		}
		this.contacts = contacts;
		this.keyModified.set("Contacts", 1);

	}

	/**
	 * The method to get the deals
	 * @returns {ModuleMapping} An instance of ModuleMapping
	 */
	getDeals()	{
		return this.deals;

	}

	/**
	 * The method to set the value to deals
	 * @param {ModuleMapping} deals An instance of ModuleMapping
	 */
	async setDeals(deals)	{
		const ModuleMapping = (await (import("./module_mapping.js"))).MasterModel;
		if((deals != null) && (!(deals instanceof ModuleMapping)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deals EXPECTED TYPE: ModuleMapping", null, null);
		}
		this.deals = deals;
		this.keyModified.set("Deals", 1);

	}

	/**
	 * The method to get the accounts
	 * @returns {ModuleMapping} An instance of ModuleMapping
	 */
	getAccounts()	{
		return this.accounts;

	}

	/**
	 * The method to set the value to accounts
	 * @param {ModuleMapping} accounts An instance of ModuleMapping
	 */
	async setAccounts(accounts)	{
		const ModuleMapping = (await (import("./module_mapping.js"))).MasterModel;
		if((accounts != null) && (!(accounts instanceof ModuleMapping)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: accounts EXPECTED TYPE: ModuleMapping", null, null);
		}
		this.accounts = accounts;
		this.keyModified.set("Accounts", 1);

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
	ConvertMapping as MasterModel,
	ConvertMapping as ConvertMapping
}
