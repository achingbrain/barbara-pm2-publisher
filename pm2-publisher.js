var LOG = require("winston"),
	config = require("nconf"),
	bonvoyage = require("bonvoyage");

// set up arguments
config.argv().env().file("config.json");

var bonvoyageClient = container.createAndRegister("seaportClient", bonvoyage.Client, {
	serviceType: config.get("registry:name")
});
bonvoyageClient.register({
	role: config.get("pm2-rpc:name"),
	version: config.get("pm2-rpc:version"),
	port: config.get("pm2-rpc:port")
});
bonvoyageClient.register({
	role: config.get("pm2-events:name"),
	version: config.get("pm2-events:version"),
	port: config.get("pm2-events:port")
});
