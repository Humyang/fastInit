var fs = require('fs')
const Path = require('path');

// 读取json数据
var date = require('./1.js')

debugger
// 解析json
var templatePath = "c:/aa"
pathCheckAndCreate(templatePath)
generation(templatePath,date.template)
// console.log(date)
// 生成本地文件
function generation(path,template){
	// debugger
	if(!!!template || template.length===0){
		return
	}
	for(i in template){
		createFile(templatePath,template[i])
		generation(templatePath+"/"+template[i].name,template[i].template)
	}
}
function createFile(path,obj){
	if(obj.type==='file'){
		fs.appendFile(path+'/'+obj.name, obj.content, (err) => {
		  if (err) throw err;
		  console.log('The "data to append" was appended to file!');
		});
		// pathCheckAndCreate(path+"/"+obj.name)
	}
	if(obj.type === 'floder'){
		if(!fs.existsSync(path+"/"+obj.name)){
	      fs.mkdirSync(path+"/"+obj.name)
	    }
	}
}

/*
遍历路径，没有找到立即创建
*/
function pathCheckAndCreate(path){

  var parse_path = Path.parse(path)

  // var dirname = Path.dirname(path)
  // parse_path.root != parse_path.dir || 
  if(parse_path.base!=""){
    
    pathCheckAndCreate(parse_path.dir)

    if(!fs.existsSync(path)){
      fs.mkdirSync(path)
    }
  }
}