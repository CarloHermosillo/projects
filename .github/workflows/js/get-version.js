const branch = process.argv[2];

if (!branch) {
    console.log("Missing branch name console argument.");

    return;
}


const version = require('../../../projects/manage-res-lib/package.json').version;

console.log(`${version}-${branch}`);