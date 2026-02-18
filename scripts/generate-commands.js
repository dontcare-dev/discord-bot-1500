// This script generates 1500 template commands across four categories: utility, fun, moderation, and admin.
// Each category will contain 375 commands.

const fs = require('fs');

const categories = ['utility', 'fun', 'moderation', 'admin'];
const commandsPerCategory = 375;

function generateCommands() {
    const commands = {};

    categories.forEach(category => {
        commands[category] = [];
        for (let i = 1; i <= commandsPerCategory; i++) {
            commands[category].push(`{name: '${category}Command${i}', description: '${category} command description ${i}'}`);
        }
    });
    return commands;
}

const commandList = generateCommands();

fs.writeFileSync('commands.json', JSON.stringify(commandList, null, 2), 'utf8');
console.log('Generated 1500 commands across four categories in commands.json');
