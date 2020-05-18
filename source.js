"use strict";
let prom = new Promise((resolve, reject) => {
    setTimeout(function () {
        let isresolved = true;
        if (isresolved)
            resolve("promise resolved");
    }, 3000);
});
let newprom = prom.then(function () {
    return new Promise((resolve) => { resolve("inside then "); });
});
newprom.then(function (fromnewprom) { console.log(fromnewprom); });
