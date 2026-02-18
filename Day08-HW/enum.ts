enum Environment {
    LOCAL = "LOCAL",
    DEVELOPMENT = "DEVELOPMENT",
    STAGING = "STAGING",
    PRODUCTION = "PRODUCTION"
}

function getEnvironment(env: Environment): void {
    console.log(`Environment : ${env}`);
}

getEnvironment(Environment.STAGING);