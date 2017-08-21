var fs = require('fs')
var Path = require('path')


// 遍历当前目录

async function pathToJSON(path,deep=0){
	// 返回指定目录下所有文件
	let current = await loadDir(path)
	// 检测目录是否文件夹
	for(i in current){
		let status = await stat(path+'/'+current[i])
		console.log(path+'/'+current[i])
		// console.log()
		if(status.isDirectory()){
			await pathToJSON(path+'/'+current[i],++deep)
		}
	}
}

function formatSpace(deep){
	let res = "-"
	for (var i = 0; i <deep; i++) {
		res += "-"
	}
	return res
}
// 读取指定目录所有文件
async function loadDir(path){
	return new Promise(function(reslove,reject){
		fs.readdir(path, function(err,res){
			if(err){
				reject(err)
			}
			reslove(res)
		})
	})
}
async function stat(path){
	return new Promise(function(reslove,reject){
		fs.stat(path,function(err,res){
			if(err){reject(err)}
			reslove(res)
		})
	})
}
// pathToJSON(__dirname+'/../template')
pathToJSON("C:/Users/jesse/Documents/GitHub/fastInit/vendor")