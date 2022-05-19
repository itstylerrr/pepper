const { table } = require('console');
const { Events } = require('../Validation/EventNames');

module.exports = async (client, PG, ascii) => {
    const Table = new ascii("Events Loaded");

    (await PG(`${(process.cwd().replace(/\\/g, "/"))}/Events/*/*.js`)) .map(async (file) => {
        const event = require(file);

        if (event.name) {
            if (!Events.includes(event.name)) {
                const L = file.split("/")
                return table.addRow(event.name || L[L.length - 2]/L[L.length - 1], "✖")
            }
        }

        if(event.once) {
            client.once(event.name, (...args) => event.execute(...args, client));
        } else {
            client.on(event.name, (...args) => event.execute(...args, client));
        };

        await Table.addRow(event.name, "✔ SUCCESSFUL")
    });

    console.log(Table.toString());
}