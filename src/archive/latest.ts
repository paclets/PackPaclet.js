import request = require("request-promise");


// Legal
// short:    v1.2
// std:      v1.2.5
// long:     v1.2.5.17

// Tag
// git_hash:  v1.2.5-08aa17
// without_v: 1.2.5

// Legacy
// build_date:    v1.2.5-20180817
// build_number:  v1.2.5.5124


// TODO: local_version
// Based on the file name

export function github_version(owner: string, repo: string) {
    let options = {
        method: "GET",
        uri: "https://api.github.com/repos/" + owner + "/" + repo + "/releases",
        json: true,
        headers: {
            'User-Agent': "Wolfram HTTPClient 10"
        }
    };
    request(options)
        .then(function (response) {
            const latest = response[1].tag_name;
            return latest
        })
        .catch(function (err) {
            throw err
        })
}




export function paclet_version(this_ver: string, last_ver: string) {
    if (last_ver.indexOf("v")) {const v = true}
    if (last_ver.indexOf("-")) {const h = true}
    let this_vers = this_ver.split(".");
    let last_vers = last_ver.split(".")
    // this:last = paclet
    // [1,2,0]:[1,2,5]="v1.2.6"
    // [1,3,0]:[1,2,5]="v1.3.0"
}


