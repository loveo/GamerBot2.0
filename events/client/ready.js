module.exports = (Discord, client) => {
	console.log(`${client.user.username} is online! Hosting ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
	client.user.setActivity("Forre med böjsen!", { type: "PLAYING"}).catch(console.error);
}