var fs = require('fs')
var Path = require('path')


// 遍历当前目录

async function pathToJSON(path){
	let dataObjArray=[]
	// 返回指定目录下所有文件
	let current = await loadDir(path)
	// 检测目录是否文件夹
	for(i in current){

		var dataObj = {}
		let current_path = path+'/'+current[i]
		let status = await stat(current_path)

		dataObj.name = current[i]

		if(status.isDirectory()){
			dataObj.type = "floder"
			dataObj.template = await pathToJSON(current_path)
		}
		if(status.isFile()){
			dataObj.type = "file"
			dataObj.content = await loadfile(current_path)
		}
		dataObjArray.push(dataObj)
	}
	// console.log(dataObjArray)
	return dataObjArray
}

function formatSpace(deep){
	let res = "-"
	for (var i = 0; i <deep; i++) {
		res += "-"
	}
	return res
}
// 读取文件内容
async function loadfile(path){
	return new Promise(function(reslove,reject){
		fs.readFile(path, 'utf8',function(err,data){
			if(err){
				reject(err)
			}
			reslove(data)
		})
	})
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
pathToJSON("../template")
.then(function(res){
	debugger
	console.log(JSON.stringify(res))
})
