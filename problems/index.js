'use strict';

// const alphabeticalConcurrencyRemover = require('./alphabetical-concurrency-remover');
// const dependencies = ['fs', 'path'];
const fs = require('fs')
const path = require('path')

// import * as fs from 'fs'
// import * as path from 'path'


async function _bootstrap( internals = {}) {
    // this.internals = internals;
    // Loading all the required dependencies.
    try {
        // using for to prevent the event lifecycle to move sychronously.
        for (let i = 0; i < dependencies.length; i++) {
            const dep = dependencies[i];
            internals[`${dep}`] = require(`${dep}`).default;
        }
    } catch (error) {
        console.error(new Error(`[Bootstrap]: ${error}`))
    }

    return {internals};
}

async function init() {
    // const HOLDER = await _bootstrap();
    // const { internals } = HOLDER;
    console.log('fs')
    console.log(fs)

    // Taking all the registered problems.
    const regProblems = fs.readdirSync(`${path.join(__dirname, './')}`)
        .filter(e => e !== 'index.js')
        .map(e => ({
            P_NAME: e.replace(/\.js$/, ''),
            P_PATH: path.join(__dirname, `./${e}`),
            P_ALIAS: e,
            P_DO: require(`./${e}`)
        }));
    return regProblems
}

init();