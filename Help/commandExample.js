module.exports = {
    name: 'ping',
    aliases: ['p'],
    category: 'Testing',
    description: 'Replies with "Pong!"',
    expectedArgs: '',
    minArgs: 0,
    maxArgs: 0,
    syntaxError: {
        'english': 'Incorrect syntax! Use `{PREFIX}`ping {ARGUMENTS}'
    },
    permissions: ['ADMINISTRATOR'],
    cooldown: '60s',
    globalCooldown: '10m',
    hidden: false,
    ownerOnly: false,
    testOnly: false,

    guildOnly: false,
    slash: false,
    options: [],
    error: ({
        error,   
        command, 
        message, 
        info     
    }) => {},
    callback: ({
        guild,      
        member,     
        user,       
        message,    
        channel,    
        args,       
        text,       
        client,     
        prefix,     
        instance,   
        interaction 
    }) => {}
}