//##删除文档

//如果查找到了多个文档那就将第一个文档删除
// Course.findOneAndDelete({}).then(result=>console.log(result))
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
//3.使用规则创建集合
const User = mongoose.model('User',userSchema);
//4.查找一条文档并且删除
//返回删除的文档
//如果查询条件匹配了多个文档，那么将会删除第一个匹配的文档
User.findOneAndDelete({_id:'5c09f267aeb04b22f8460968'}).then(result=>console.log(result))
//5.删除多个
//如果传了空对象，默认删除数据库全部数据，删除文档返回的是对象，第一个属性是删除了几条数据，第二个属性是删除成功
User.deleteMany({}).then(result=>console.log(result))