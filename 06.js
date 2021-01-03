//##查询文档

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
//4.查询用户集合中的所有文档
User.find().then(result=>console.log(result));
//5.通过_id字段查找文档
User.find({_id:'5c09f267aeb04b22f8460968'}).then(result=>console.log(result));
//6.findOne方法返回一条文档，默认返回当前集合中的第一条文档
User.findOne({name:'李四'}).then(result=>console.log(result));
//7.find查询用户集合中年龄字段大于20小于50的
User.find({age:{$gt:20,$lt:50}}).then(result=>console.log(result));
//8.find查询时匹配包含
User.find({hobbies:{$in:['足球']}}).then(result=>console.log(result));
//9.find选择要查询的字段,多个字段用空格隔开,'_id'代表不想查询的字段
User.find().select('name email -_id').then(result=>console.log(result));
//10.find数据按照年龄进行生序排列,对查找到的数据进行排序
User.find().sort('age').then(result=>console.log(result));
User.find().sort('-age').then(result=>console.log(result));//根据年轻字段进行降序排列
//11.skip 跳过多少条数据 limit限制查询数据，一般分页时会用到
User.find().skip(2).limit(2).then(result=>console.log(result));
