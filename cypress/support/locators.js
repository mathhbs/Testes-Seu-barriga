const locators = {

    LOGIN:{
        INPEMAIL: '#email',
        INPSENHA:'#senha',
        BTNENTRAR:'.btn-primary'
    },

    MENU:{
        CONTAS: "(//*[@class='dropdown-toggle'])[1]",
        CRIARMOVIMENTACAO: '//*[@id="navbar"]/ul/li[3]'
    },

    CONTAS:{
        ADICIONAR: '//*[@id="navbar"]/ul/li[2]/ul/li[1]/a',
        LISTAR: '//*[@id="navbar"]/ul/li[2]/ul/li[2]/a'
    },

    ADDCONTAS:{
        NOMECONTA: '#nome',
        BTNSALVAR: '.btn'
    },

    LISTARCONTAS:{
        EDITARCONTA: "(//*[@class='glyphicon glyphicon-edit'])[2]",
        EXCLUIRCONTA: "(//*[@class='glyphicon glyphicon-remove-circle'])[7]"

    },

    CRIARMOVIMENTACAO:{
        TIPOMOVIMENTACAO:'#tipo',
        DATAMOVIMENTACAO:'#data_transacao',
        DATAPAGTO:'#data_pagamento',
        DESCRICAO:'#descricao',
        INTERESSADO:'#interessado',
        VALOR:'#valor',
        CONTA: '#conta',
        SITUACAO_PAGO: '#status_pago',
        SITUACAO_PENDENTE: '#status_pendente',
        BTN_SALVAR: "(//*[@class='btn btn-primary'])[1]"
    },

    MENSAGENS: '.alert-success',

    MENSAGENS_ERRO: '.alert-danger'





}

export default locators;