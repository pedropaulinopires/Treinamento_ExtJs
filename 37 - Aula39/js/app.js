let win = Ext.define('Curso.Janela',{
    extend:'Ext.window.Window',
    title:'Minha janela',
    width: 1200,
    height: 600,
    autoShow : true,
    autoScroll : false,
    closable:false,
    layout : 'column',
    items:[
        {
            xtype:'panel',
            title:'Painel',
            columnWidth: 0.5,
            height:100
        },
        {
            xtype:'panel',
            title:'Painel',
            columnWidth: 0.5,
            height:100
        }
    ]
})

Ext.onReady(function(){
    Ext.create('Curso.Janela')
})