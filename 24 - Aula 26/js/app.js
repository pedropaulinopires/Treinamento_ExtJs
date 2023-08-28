Ext.create('Ext.panel.Panel', {
    title: 'Meu painel',
    width: 300,
    renderTo: 'panel1',
    html: '<p>Olá mundo!</p>'
})

let panel2 = Ext.create('Ext.panel.Panel', {
    title: 'Meu painel2',
    width: 300,
    items: [
        Ext.create('Ext.Button', {
            text: 'Fechar',
            handler: function () {
                panel2.close(this)
                Ext.Msg.show({
                    title:'Alerta',
                    msg:'Painel fechado com sucesso!',
                    icon:Ext.Msg.INFO
                })
            }
        })
    ],
    renderTo: 'panel2'
})
