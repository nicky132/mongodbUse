// MongoDB增删改查操作
// 3.1创建集合
// 创建集合分为两步，一是对对集合设定规则，二是创建集合，创建mongoose.Schema构造函数的实例即可创建集合。
//设定集合规则
const courseSchema = new mongoose.Schema({
    name:String,
    author:String,
    isPublished:Boolean
});
//创建集合并应用规则
const Course = mongoose.model('Course',courseSchema);//courses

// 导入mongo数据库
// mongoimport -d playground -c users --file ./user.json