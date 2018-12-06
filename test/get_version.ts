import path = require('path');
import "./wolfram";
import "./archive";








const this_ver = serialize("Paclet.m").Version
const last_ver = github_version("szhorvat", "MaTeX")
console.log(paclet_version(this_ver,last_ver))