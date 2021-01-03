//##增加文档
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
    author:String,
    isPublished:Boolean
});

//3.使用规则创建集合,返回集合的构造函数：1集合名称，2集合规则
const Course = mongoose.model('Course',courseSchema)

// //向集合中插入文档
//create方式也返回promise函数
Course.create({name:'javascript',author:'老师',isPublished:false})
.then(result=>{console.log(result)})
.catch(err=>console.log(err))