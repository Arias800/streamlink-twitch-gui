import ChatProviderJava from "./-java";
import Parameter from "utils/parameters/Parameter";


/**
 * @class ChatProviderChatty
 * @implements ChatProviderJava
 */
export default class ChatProviderChatty extends ChatProviderJava {
	async _getParameters() {
		const parameters = await super._getParameters( ...arguments );
		parameters.splice(
			1,
			0,
			new Parameter( "-single", "instance" ),
			new Parameter( "-connect" ),
			new Parameter( "-channel", null, "channel" ),
			new Parameter( "-user", [ "isLoggedIn", "auth" ], "user" ),
			new Parameter( "-token", [ "isLoggedIn", "auth" ], "token" )
		);

		return parameters;
	}
}
