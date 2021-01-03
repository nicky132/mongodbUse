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

//4.构造函数实例化就是我们要插入的数据，创建了个文档
const course = new Course({
    name:'node.js基础',
    author:'js高级',
    isPublished:true
});

course.save();//5.save的意思就是把数据插入到数据库中，文档插入到数据库中