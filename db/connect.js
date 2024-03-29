const mongoose=require('mongoose')

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const connectDB=(url)=>{
  return mongoose.connect(url)
}

module.exports=connectDB
