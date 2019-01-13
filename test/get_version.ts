import * as paclet from '..'
import * as path from 'path'

const data = paclet.serialize(path.join(__dirname, 'PacletInfo.m'))
console.log(data)
// const last_ver = paclet.github_version("szhorvat", "MaTeX")
// console.log(paclet.paclet_version(this_ver,last_ver))