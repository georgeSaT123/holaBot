var restify = require('restify');
var builder = require('botbuilder');

var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function (){
    console.log('%s listening to %s', server.name, server.url);
})

var connector = new builder.ChatConnector({
    appId: '',
    appPassword: ''
});



//var connector = new builder.ConsoleConnector().listen();
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

bot.dialog('/',[
    function(session){
        builder.Prompts.text(session, '¿Como te llamas?');
    },
    function (session, results){
        let mssg = results.response;
        session.send(`Hola ${mssg}!`);
    }
]);