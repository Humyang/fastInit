var fs = require('fs')
fs.readFile('./index.js', 'utf8',function(err,res){
	console.log(err,res)
})
// fs.open('./index.js', 'a+', (err, fd) => {
//   // => null, <fd>
//   var buff = new Buffer([])
//   fs.read(fd,buff, function(a,b,c){
//   	console.log(a,b,c)
//   })
// });