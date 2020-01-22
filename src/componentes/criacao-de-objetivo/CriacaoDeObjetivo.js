import React from 'react'
import Botao from '../botao/Botao'

export default class CriacaoDeObjetivo extends React.Component {
  fecharDialogo(id) {
    document.getElementById(id).classList.remove('dialogo_aberto')
  }

  salvarObjetivo(id) {
    alert('Objetivo Salvo')
    this.fecharDialogo(id);
  }

  render() {
    return (
      <div className="dialogo" id="dialogoObjetivo">
        <div className="dialogo__corpo">
          <form className="formulario" id="formularioObjetivo">
            <label htmlFor="quarter">Quarter</label>
            <select name="selecaoQuarter" id="selecaoQuarter">
              <option value="1">Quarter 1 - 2019</option>
            </select>

            <label htmlFor="nomeDoObjetivo">Nome do objetivo</label>
            <input type="text" id="nomeDoObjetivo" />

            <label htmlFor="descricaoDoObjetivo">Descrição</label>
            <textarea rows="3" id="descricaoDoObjetivo"></textarea>
          </form>
        </div>


        <div className="dialogo__rodape">
          <Botao texto="Cancelar" funcao={() => this.fecharDialogo('dialogoObjetivo')} />
          <Botao type="submit" texto="Salvar objetivo" funcao={() => this.salvarObjetivo('dialogoObjetivo')} />
        </div>
      </div>
    );
  }
}