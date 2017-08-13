// 读取json数据

// 解析json

// 生成本地文件
/*

在磁盘遍历给定的路径，如果没有找到就立即创建

*/
function pathCheckAndCreate(path){

  var parse_path = Path.parse(path)

  var dirname = Path.dirname(path)
  
  if(parse_path.root != dirname){
    
    pathCheckAndCreate(dirname)

    if(!fs.existsSync(path)){
      fs.mkdirSync(path)
    }
  }
}