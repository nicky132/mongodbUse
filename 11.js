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
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
});

const postSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});
//用户集合
const User = mongoose.model('User',userSchema)
//文章集合
const Post = mongoose.model('Post',postSchema)
//创建用户
// User.create({name:'aaa'})
// .then(result=>console.log(result))
// .catch(errors=>{
// })

//创建文章
// Post.create({title:'123',author:'5ff131ffd1d77d07a1c19222'})
// .then(result=>console.log(result))
// .catch(errors=>{
// })

//联合查询
//只能查到author用户id信息，不能看到用户名字
Post.find().then(result=>console.log(result))

//能查到author用户名字
// Post.find().populate('author').then(result=>console.log(result))