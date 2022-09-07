const mongoose=require('mongoose');

const TodoScheme= new mongoose.Schema({
    text:{
        type: String,
    },
    completed:{
        type: Boolean,
    }
});

const TodoModel=mongoose.model('Todo' , TodoScheme);

 module.exports=TodoModel;