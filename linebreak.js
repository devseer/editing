/*
	Removes all single line-breaks but ignores multiple line-breaks (eg. paragraphs etc).
*/

var fs = require ('fs');

var args = process.argv.slice(2);
var path = args[0];

if (path) {
	fs.readFile(path, 'utf8', function(err, data) {
		console.log(path);

		var out = data.replace(/\r\n(?=[^\r\n])/g, '');

		fs.writeFile('new-' + path, out, 'utf8', function(err) {
			if (err) throw err;
			console.log('Exported successfully');
		});
	});
}
else {
	console.log('Path not provided');
}
