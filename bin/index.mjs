#!/usr/bin/env node 

import { Command } from 'commander';

const program = new Command();
program
    .name('m')
    .description('CLI to do stuff')
    .version('0.8.0')
    .executableDir('./commands')

program.command('init', 'Creates a new  madrox project.')

program.parse();
