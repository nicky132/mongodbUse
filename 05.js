// ## 查询文档
// 三、mongodb数据库导入数据
// mongoimport -d 数据库名称 -c 集合名称 -file要导入的数据文件
//找到mongodb数据库的安装目录，将安装目录下的bin目录放置在环境变量中

// 四、查询文档
// 根据条件查询文档（条件为空则查找所有文档）
Course.find().then(result=>console.log(result))
//返回文档集合
// [{
//     _id:5dsssffff,
//     name:'js',
//     author:'jch'
// },{
//     _id:ss,
//     name:'javajs',
//     author:'ssdc'
// }]