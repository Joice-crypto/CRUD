const db = require('../services/db');

module.exports = {
    buscarTodas: () => {
        return new Promise ((aceito, rejeitado)=>{
            db.query('SELECT * FROM tarefas' , (error , results) => {
                if(error){
                    rejeitado(error); 
                  
                    
                }
                if(results.length > 0){
                    aceito(results[0]);
                }
                else{
                    aceito(false)
                }
                
            })
        })
    },

    buscarUma: (codigo) => {
        return new Promise ((aceito,rejeitado)=> {
            db.query('SELECT * FROM tarefas WHERE codigo = ?', [codigo], (error,results)=> {
                if(error){
                    rejeitado(error); 
                   
                }
                else aceito(results);
            })
        })
    },

    inserir: (nome,autor,conteudo,dataCriacao) => {
        return new Promise ((aceito,rejeitado)=> {
            db.query('INSERT INTO tarefas (nome ,autor,conteudo,dataCriacao) VALUES (?,?,?,?) ',
            [nome,autor,conteudo,dataCriacao], (error,results)=> {
                if(error){
                    rejeitado(error); 
                   
                }
                else aceito(results.insertCodigo);
            })
        })
    },

    alterar: (nome,autor,conteudo,dataCriacao,codigo) => {
        return new Promise ((aceito,rejeitado)=> {
            db.query('UPDATE tarefas SET nome = ?, autor = ?, conteudo = ?, dataCriacao = ? WHERE codigo = ? ',
            [nome,autor,conteudo,dataCriacao,codigo], (error,results)=> {
                if(error){
                    rejeitado(error); 
                   
                }
                else aceito(results);
            })
        })
    },

    excluir: (codigo) => {
        return new Promise ((aceito, rejeitado)=>{
            db.query('DELETE FROM tarefas WHERE codigo = ? ',[codigo] , (error , results) => {
                if(error){
                    rejeitado(error);     
                }
                
                else{
                    aceito(results)
                }
                
            })
        })
    },
};
