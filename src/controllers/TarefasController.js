const { json } = require("body-parser");
const TarefaServices = require("../services/TarefasServices");

module.exports = {
  buscarTodas: async (req, res) => {
    // vai bsucar todas as tarefas que eu tenho no bd
    let json = { error: " ", result: [] };

    let tarefas = await TarefaServices.buscarTodas();

    for (let i in tarefas) {
      json.result.push({
        codigo: tarefas[i].codigo,
        conteudo: tarefas[i].conteudo,
        nome: tarefas[i].nome,
        autor: tarefas[i].autor,
        dataCriacao: tarefas[i].dataCriacao,
      });
    }
    res.json(json);
  },

  buscarUma: async (req, res) => {
    let json = { error: " ", result: {} };
    let codigo = req.params.codigo;
    let tarefa = await TarefaServices.buscarUma(codigo);

    if (tarefa) {
      json.result = tarefa;
    }
    res.json(json);
  },

  inserir: async (req, res) => {
    let json = { error: " ", result: {} };

    let nome = req.body.nome;
    let autor = req.body.autor;
    let dataCriacao = req.body.dataCriacao;
    let conteudo = req.body.conteudo;

    if (nome && autor && dataCriacao && conteudo) {

      let TarefaCodigo = await TarefaServices.inserir(nome,autor,conteudo,dataCriacao);
      json.result = {
          codigo: TarefaCodigo,
          nome,
          autor,
          conteudo,
          dataCriacao
      }
    }else{
        json.error = 'Campos não enviados!';
    }
    res.json(json);
  },

  alterar: async (req, res) => {
    let json = { error: " ", result: {} };

    let codigo = req.params.codigo;
    let nome = req.body.nome;
    let autor = req.body.autor;
    let dataCriacao = req.body.dataCriacao;
    let conteudo = req.body.conteudo;

    if (nome && autor && dataCriacao && conteudo && codigo) {

       await TarefaServices.alterar(nome,autor,conteudo,dataCriacao,codigo);
      json.result = {
          codigo,
          nome,
          autor,
          conteudo,
          dataCriacao
      }
    }else{
        json.error = 'Campos não enviados!';
    }
    res.json(json);
},

excluir: async(req,res)=>{
    let json = { error: " ", result: {} };
    await TarefaServices.excluir(req.params.codigo); // excluir o que estiver no parametro da rota
    res.json(json);
}

};
