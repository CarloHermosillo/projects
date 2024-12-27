const branch = process.argv[2];

if (!branch) {
    console.log("Missing branch name console argument.");

    return;
}

let version;

try {
    version = require('../../../projects/manage-res-lib/package.json').version;
} catch(e) {
    version="1.0.0";
}

console.log(`${version}-${branch}`);