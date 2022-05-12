<h1 align="center">🌶️ Pepper 🌶️</h1>

[![Banner](Extras/Images/pepper%20banner.png)](https://discord.gg/a7V6C4dAQj)

[![License](https://img.shields.io/github/license/itstylerrr/pepper?style=for-the-badge)](LICENSE) [![Contributors](https://img.shields.io/github/contributors/itstylerrr/pepper?style=for-the-badge)](https://github.com/itstylerrr/pepper/graphs/contributors) [![Support Server](https://img.shields.io/discord/849130218975526922?color=0099ff&logo=discord&logoColor=4e75e8&style=for-the-badge)](https://discord.gg/j2MfuWySfD) [![Deploy Status](https://img.shields.io/github/workflow/status/itstylerrr/pepper/Deploy%20to%20Heroku?label=Deploy&logo=github&style=for-the-badge)](.github/workflows/deploys.yml) [![Lint Status](https://img.shields.io/github/workflow/status/itstylerrr/pepper/Lint%20Checking?label=Lint&logo=github&style=for-the-badge)](.github/workflows/lint.yml)

Multipurpose Discord Bot. Full created with Discord.js Library at v13.6.0

## Scripts

Scripts that available in [package.json](package.json) file.

| Name         | Script                  | Description                               |
| ------------ | ----------------------- | ----------------------------------------- |
| Start        | `npm start`            | Run the bot                               |
| Development  | `npm run dev`          | Run the bot in Development Mode           |
| Shard        | `npm run shard`        | Run and Shard the Bot                     |

## Getting Started

### Clone this Repository

```bash
$ git clone https://github.com/itstylerrr/pepper.git
$ cd pepper
```

### Install all required packages

```bash
$ ./install.sh
```

### Create a Environment Variable

```bash
$ cd botconfig
$ cp main.json
```

### Fill all Required Fields at botconfig/main.json

- For `botconfig/main.json`

```
{
  "clienttoken": "",

  "Note_Token:":"Put Your Bot Token Above (If your using replit then make a new secret 'clienttoken' and put ur bot token there... and then keep this string empty)",

  "clientname": "Your Bot Name",

  "clientid": "Your Bot ID",

  "TestingServerID": "Your Server ID",

  "clientavatar":"https://cdn.discordapp.com/avatars/896571984345985024/91b5cd580fe5bab5e420da0ad818d8bb.png",

  "prefix": "?",

  "developerID": ["Your ID","ID2","ID3","ID4"],

  "colorthemecode":"#93268f",
  
  "randomMessages_Cooldown": ["Random", "Message", "Array"],


  "NOTE:" : "IF YOU DONT PUT STUFF HERE IT WILL THROW ERRS"
}
```

### Run the bot

Run the bot using available scripts. View the [Available Run Script List](#scripts).

### You should ready to go.

## To-do

👀👀

## License

This Project is Under [Apache License 2.0](https://github.com/itstylerrr/pepper/blob/master/LICENSE) &copy; -Tyler#7922
