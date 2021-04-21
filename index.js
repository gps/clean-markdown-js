const core = require("@actions/core");

async function run() {
    const token = core.getInput("gh_token");
    const commit_message = core.getInput("commit_message");
    
    // Write your implementation here
}

run();
