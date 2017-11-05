import React, {Component} from 'react';
import $ from 'jquery';
import InputCustomizado from './componentes/InputCustomizado';

export class FormularioAutor extends Component(

  constructor() {
    super();    
    this.state = {lista : [],nome:'',email:'',senha:''};
    this.enviaForm = this.enviaForm.bind(this);
    this.setNome = this.setNome.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setSenha = this.setSenha.bind(this);
  }

  render ()
  return (
    <div className="pure-form pure-form-aligned">
    <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm} method="post">
      <InputCustomizado id="nome" type="text" name="nome" value={this.state.nome} onChange={this.setNome} label="Nome"/>                                              
      <InputCustomizado id="email" type="email" name="email" value={this.state.email} onChange={this.setEmail} label="Email"/>                                              
      <InputCustomizado id="senha" type="password" name="senha" value={this.state.senha} onChange={this.setSenha} label="Senha"/>                                                                      
      <div className="pure-control-group">                                  
        <label></label> 
        <button type="submit" className="pure-button pure-button-primary">Gravar</button>                                    
      </div>
    </form>             
    </div>  
  )
)

export class TabelaAutores extends Comment(
  render()
  return (
    <div>            
    <table className="pure-table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        {
          this.state.lista.map(function(autor){
            return (
              <tr key={autor.id}>
                <td>{autor.nome}</td>
                <td>{autor.email}</td>
              </tr>
            );
          })
        }
      </tbody>
    </table> 
  </div>             

  )
)
