const TodoModel = require('../Models/TodoModels');

module.exports= async (req,res)=> {
    const todos = await TodoModel.find();
res.json(todos);
}