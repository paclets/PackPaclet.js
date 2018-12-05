import request = require("request");



// TODO: local_version


export function github_version(owner: string, repo: string) {
    const releases_url = "https://api.github.com/repos/" + owner + "/" + repo + "+/releases"
    //TODO: if empty
    var releases=request(releases_url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    })
    const latest_url = JSON.parse(releases) // first means latest
    //take "assets_url"
    
}




export function paclet_version(this_ver: string, last_ver: string) {
    const this_vers = this_ver.split(".")
    const last_vers = last_ver.split(".")
    // if all except last >= this, auto else this
}





