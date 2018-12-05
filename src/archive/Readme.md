latest => pack => release




## archive methods
```js
archive.pipe(output);
 
var file1 = __dirname + '/file1.txt';
archive.append(createReadStream(file1), {
	name: 'file1.txt'
});
 
archive.append('string cheese!', {
	name: 'file2.txt'
});
 
var buffer3 = Buffer.from('buff it!');
archive.append(buffer3, {
	name: 'file3.txt'
});
 
archive.file('file1.txt', {
	name: 'file4.txt'
});
 
archive.directory('./subdir/', 'new-subdir');
 
archive.directory('./subdir/', false);
 
archive.glob('subdir/*.txt');
```