// ##更新文档
// User.updateOne({查询条件},{要修改的值}).then(result=>console.log(result))
// User.updateMany({查询条件},{要修改的值}).then(result=>console.log(result))

//1.引入mongoose第三方模块，用来操作数据库
const mongoose = require('mongoose');
//数据库连接
mongoose.connect('mongodb://localhost/playground',{
    useNewUrlParser:true})
    //连接成功
    .then(()=>console.log('数据库连接成功'))
    //连接失败
    .catch(err => console.log(err,'数据库连接失败'));

//2.创建集合规则
const courseSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    password:String,
    hobbies:[String]
});
//3.删除文档
//单个文档
// User.updateOne({name:'李四'},{name:'李蛋'}).then(result=>console.log(result))
//多个文档
//所有文档年龄都改成56
User.updateMany({},{age:56}).then(result=>console.log(result))
