import { Command } from 'commander';
import fs from 'node:fs/promises'
import {compile} from '@mdx-js/mdx'



const program = new Command();

program
    .name('init')
    .description('CLI command to initialize a new madrox project')
    .argument('nameOfProject', 'Name of the project.')
    .option('-w, --with <type>', 'includes local options lib, gql')
    .version('0.8.0')
    .action(initCommand);

export default program;


export async function initCommand(appName) {

const compiled = await compile(await fs.readFile('./docs/authentication.mdx'))

console.log(String(compiled))


    // const projectPath = path.join(process.cwd(), appName);
    // if (!fs.existsSync(projectPath)) {
    //     fs.mkdirSync(projectPath);
    //     console.log(`Project ${appName} has been initialized.`);
    // } else {
    //     console.log(`A directory with the name ${appName} already exists.`);
    // }
    // return {
    //     appName,
    //     projectPath
    // }
}

program.parse()