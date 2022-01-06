const fs = require('fs');
const environment = process.argv[2];
const envFile = require(`./envs/${environment}.json`);

// copy variable inside the env.json file
fs.writeFileSync('./src/configs/env.json', JSON.stringify(envFile, undefined, 2));
