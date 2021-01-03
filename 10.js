//## 集合联查
// 通常不同集合的数据之间是有关系，例如文章信息和用户信息存储在不同集合中，但文章是某个用户发表的，要查询文章的所有信息包括发表用户，就需要用到集合联查

//集合联查实现

//用户集合
const User = mongoose.model('User',new mongoose.Schema({name:{
    type:String
}}));
//文章集合
const Post = mongoose.model('Post',new mongoose.Schema({
    title:{type:String},
    //用ID将文章集合和作者集合关联
    author:{
        type:mongoose.Schema.Types.ObjectId,ref:'User'
    }
}));
//联合查询
Post.find()
    .populate('author')
    .then((err,result)=>console.log(result));