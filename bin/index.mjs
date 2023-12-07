#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command();
program
    .name('m')
    .description('CLI to do stuff')
    .version('0.8.0');

program.command('create')
    .description('Create a new project')
    .argument('<name>', 'Name of the project')
    .action((name, options) => {
        console.log(`Creating project ${name}`);
    });

program.parse();
