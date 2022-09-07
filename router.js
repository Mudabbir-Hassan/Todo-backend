const express= require('express');
const isLoggedin = require('./middleware/isLoggedin')



const createTodoRoutes=require('./routes/createTodoRoutes');
const readTodoRoutes=require('./routes/readTodoRoutes');
const updateTodoRoutes=require('./routes/updateTodoRoutes');
const deleteTodoRoutes=require('./routes/deleteTodoRoutes');
const router=express.Router();


router.post('/login' ,require('./routes/loginRoutes'));

router.post('/todos', isLoggedin , createTodoRoutes);

router.get('/todos', isLoggedin , readTodoRoutes);
//Todo update
router.put('/todos/:id', isLoggedin , updateTodoRoutes);
//Todo Remove
router.delete('/todos/:id', isLoggedin , deleteTodoRoutes);

module.exports=router;