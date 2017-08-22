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
		let status = await stat(path+'/'+current[i])
		// console.log(path+'/'+current[i])
		// console.log()
		dataObj.name = current[i]
		if(status.isDirectory()){
			dataObj.type = "floder"
			dataObj.template = await pathToJSON(path+'/'+current[i])
			 
			 // push(doa)
		}

		if(status.isFile()){
			dataObj.type = "file"
			dataObj.content = '123'
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
async function loadfile(){

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
.then(function(res){
	debugger
	console.log(JSON.stringify(res))
})
