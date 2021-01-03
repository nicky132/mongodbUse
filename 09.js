// ##mongoose验证
//在创建几个规则时，可以设置当前字段的验证规则，验证失败就则输入插入失效
// require:true必传字段
// minlength：3字符串最小长度
// maxlength：20字符串最大长度
// min：2数值最小为2
// max：100数值最大为100
// trim:true 去除字符串两边的空格
// validate：自定义验证器
// default：默认值

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
const postSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'请传入文章标题'],
        minlength:[2,'文章长度不能小于2'],
        maxlength:[5,'文章长度最大不能超过5'],
        trim:true
    },
    age:{
        type:Number,
        min:18,
        max:100
    },
    //如果传了就用传的值，没传的话就用当前默认时间
    publishDate:{
        type:Date,
        default:Date.now
    },
    // category:{
    //     type:String,
    //     //枚举列举当前字段可以选择的值
    //     enum:['html','css','javascript','node'],
    // },
    category:{
        type:String,
        //枚举列举当前字段可以选择的值
        enum:{
            values:['html','css','javascript','node'],
            message:'分类名称要在一定的范围内！'
        },
    },
    //以上用的都是mongoose给出来的验证规则
    //以下是自定义的验证规则
    author:{
        type:String,
        validate:v=>{
            //返回布尔值
            //true 验证成功
            //false 验证失败
            //v验证的值
            return v && v.length >4
        }
    }
});

const Post = mongoose.model('Post',postSchema)

// Post.create({}).then(result=>console.log(result))
//验证通不过，因为最小长度是2
// Post.create({title:'a'}).then(result=>console.log(result))
//验证不通过，年龄不低于18
// Post.create({title:'a',age:10}).then(result=>console.log(result))
//验证不通过，类型不能写java
//Post.create({title:'a',age:10,category:'java'}).then(result=>console.log(result))

Post.create({title:'a',age:10,category:'java',author:'db'})
.then(result=>console.log(result))
.catch(errors=>{
    const err = errors.errors;
    for(var attr in err){
        console.log(err[attr]['message']);
    }
})
