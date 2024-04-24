import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class FileDetails{

	fileNameS;
	sizeS;
	id;
	fileIdS;
	delete1;
	keyModified = new Map();
	/**
	 * The method to get the fileNameS
	 * @returns {String} A String representing the fileNameS
	 */
	getFileNameS()	{
		return this.fileNameS;

	}

	/**
	 * The method to set the value to fileNameS
	 * @param {String} fileNameS A String representing the fileNameS
	 */
	setFileNameS(fileNameS)	{
		if((fileNameS != null) && (!(Object.prototype.toString.call(fileNameS) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fileNameS EXPECTED TYPE: String", null, null);
		}
		this.fileNameS = fileNameS;
		this.keyModified.set("File_Name__s", 1);

	}

	/**
	 * The method to get the sizeS
	 * @returns {String} A String representing the sizeS
	 */
	getSizeS()	{
		return this.sizeS;

	}

	/**
	 * The method to set the value to sizeS
	 * @param {String} sizeS A String representing the sizeS
	 */
	setSizeS(sizeS)	{
		if((sizeS != null) && (!(Object.prototype.toString.call(sizeS) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sizeS EXPECTED TYPE: String", null, null);
		}
		this.sizeS = sizeS;
		this.keyModified.set("Size__s", 1);

	}

	/**
	 * The method to get the id
	 * @returns {BigInt} A BigInt representing the id
	 */
	getId()	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param {BigInt} id A BigInt representing the id
	 */
	setId(id)	{
		if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the fileIdS
	 * @returns {String} A String representing the fileIdS
	 */
	getFileIdS()	{
		return this.fileIdS;

	}

	/**
	 * The method to set the value to fileIdS
	 * @param {String} fileIdS A String representing the fileIdS
	 */
	setFileIdS(fileIdS)	{
		if((fileIdS != null) && (!(Object.prototype.toString.call(fileIdS) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fileIdS EXPECTED TYPE: String", null, null);
		}
		this.fileIdS = fileIdS;
		this.keyModified.set("File_Id__s", 1);

	}

	/**
	 * The method to get the delete
	 * @returns {String} A String representing the delete1
	 */
	getDelete()	{
		return this.delete1;

	}

	/**
	 * The method to set the value to delete
	 * @param {String} delete1 A String representing the delete1
	 */
	setDelete(delete1)	{
		if((delete1 != null) && (!(Object.prototype.toString.call(delete1) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: delete1 EXPECTED TYPE: String", null, null);
		}
		this.delete1 = delete1;
		this.keyModified.set("_delete", 1);

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
	FileDetails as MasterModel,
	FileDetails as FileDetails
}
