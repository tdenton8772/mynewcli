const {Command, flags} = require('@oclif/command')

class GoodbyeCommand extends Command {
  async run() {
    const {flags} = this.parse(GoodbyeCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /Users/tylerdenton/develop/mynewcli/src/commands/goodbye.js`)
  }
}

GoodbyeCommand.description = `Describe the command here
...
Extra documentation goes here
`

GoodbyeCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = GoodbyeCommand
