const {Command, flags} = require('@oclif/command')
const path = require('path')
const {spawn} = require('child_process')

class PyCommand extends Command {
  async run() {
    const {flags} = this.parse(PyCommand)
    const name = flags.name || 'world'

    function runScript(){
      return spawn('python', [
        "-u",
        path.join(__dirname, 'script.py'),
        "--foo", "some value for foo",
      ]);
    }

    const subprocess = runScript()

    //print output of script
    subprocess.stdout.on('data', (data) => {
      this.log(`data:${data}`);
    });
    subprocess.stderr.on('data', (data) => {
      this.log(`error:${data}`);
    });
    subprocess.on('close', () => {
      this.log("Closed");
    });
}
}

PyCommand.description = `Describe the command here
...
Extra documentation goes here
`

PyCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = PyCommand
