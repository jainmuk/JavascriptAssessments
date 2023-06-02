function upperCaseAsync(s) {
    return new Promise((resolve, reject) => {
        if (s === null) {
            reject();
        } else {
            resolve(s.toUpperCase());
        }
    });
}

upperCaseAsync("mukul").then(console.log);
upperCaseAsync(null).catch((x) => {
    console.log("No string received!");
});