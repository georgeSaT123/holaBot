var builder = require('botbuilder');

var connector = new builder.ConsoleConnector().listen();
var bot = new builder.UniversalBot(connector);

bot.dialog('/',[
    function(session){
        builder.Prompts.text(session, '¿Como te llamas?');
    },
    function (session, results){
        let mssg = results.response;
        session.send(`Hola ${mssg}!`);
    }
]);