var builder = require('botbuilder');

var connector = new builder.ConsoleConnector().listen();
var bot = new builder.UniversalBot(connector);

bot.dialog('/',[
    function (session){
        let mssg = session.message.text;
        session.send(`Me dijiste: ${mssg}`);
    }
]);