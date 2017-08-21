var fs = require('fs')
var Path = require('path')


// 遍历当前目录

function pathToJSON(path){
	loadDir
	// 返回指定目录下所有文件

	// 检测目录是否文件夹

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

	})
} 