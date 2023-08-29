Ext.define('Curso.Janela',{
    extend:'Ext.window.Window',
    title:'Minha janela',
    width: 600,
    height: 400,
    autoShow : true,
    closable:false,
    layout : 'accordion',
    items:[
        {
            xtype:'panel',
            title:'Painel 1',
        },
        {
            xtype:'panel',
            title:'Painel 1',
        },
        {
            xtype:'panel',
            title:'Painel 1',
        }
    ]
})

Ext.onReady(function(){
    Ext.create('Curso.Janela')
})