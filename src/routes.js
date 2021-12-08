const { Router } = require('express');
const express = require('express');
const router = express.Router();

const TarefasController = require('./controllers/TarefasController');

router.get('/tarefas', TarefasController.buscarTodas); // buscar e imprimir todas as tarefas
router.get('/tarefa/:codigo', TarefasController.buscarUma); // buscar e imprimir apenas 1  tarefa
router.post('/tarefa/', TarefasController.inserir); // inserir uma tarefa
router.put('/tarefa/:codigo', TarefasController.alterar); // editar uma tarefa
router.delete('/tarefa/:codigo', TarefasController.excluir); // excluir uma tarefa


module.exports = router; 

