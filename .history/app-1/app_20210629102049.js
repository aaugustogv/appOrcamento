class Despesa {
    constructor(ano, mes, dia, tipo, descricao, valor) {
        this.ano = ano 
        this.mes = mes 
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }
}

class Bd {

    constructor() {
        let id = localStorage.getItem('id')

        if(id=== nul)
    }
    getProximoId() {
        let proximoId = localStorage.getItem()
    }
    gravar(d) {
        localStorage.setItem('despesa', JSON.stringify(d))
    }
}

let bd = new Bd()


function cadastrarDespesa() {

    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    let despesa = new Despesa(
        ano.value, 
        mes.value, 
        dia.value, 
        tipo.value, 
        descricao.value, 
        valor.value
    )

    bd.gravar(despesa)
}
