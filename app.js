var fs = require('fs');
var xmldoc = require('xmldoc');
var nuspec = fs.readFileSync('deploy.nuspec', { encoding: 'utf-8' });
var doc = new xmldoc.XmlDocument(nuspec);
var files = doc.descendantWithPath('files');
var basepath = 'v%ShortVersion%.zip!/data/content';

files.eachChild(function(file, i, a) {
	var src = file.attr.src.replace(/\\/g, '/');
	var target = file.attr.target.replace(/\\/g, '/');

	if(target !== '') {
		target = '/' + target;
	}

	console.log(src + ' => ' + basepath + target);
});