import { createWriteStream, createReadStream } from 'fs';
import archiver = require('archiver');
import glob = require('glob');



function patten_string(p: string[]): string;
function patten_string(p: string): string;
function patten_string(p: any): string {
	if (typeof p == "string") return p;
	else return '{' + p.join(',') + '}'
}

/**
 * 将 glob 模式转化为文件路径列表
 */
function pattern2files(path: string, pattern: any) {
	var callback = function (err, fileList) {
		if (err) { console.log(err); return; }
		console.log(fileList);
	};
	glob(patten_string(pattern), { cwd: path, mark: true }, callback);
}


export function pack_paclet(name: string, files: Array<string>) {
	var output = createWriteStream(name);
	var archive = archiver('zip', { zlib: { level: 9 } });
	// 监听事件 'close', 'end', 'warnings','error'
	output.on('close', function () {
		console.log(archive.pointer() + ' total bytes');
		console.log('archiver has been finalized and the output file descriptor has closed.');
	});
	output.on('end', function () {
		console.log('Data has been drained');
	});
	archive.on('warning', function (err) {
		if (err.code === 'ENOENT') { }
		else throw err; 
	});
	archive.on('error', function (err) {
		throw err;
	});
	files.map(e=>archive.append(e));
	archive.finalize();
}


	// 遍历 exclude

	// 遍历 include

	// 打包轻量包

	//遍历 doc

	// 打包完整包
