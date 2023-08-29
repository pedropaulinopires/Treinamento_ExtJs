Ext.define('Curso.Janela',{
    extend:'Ext.window.Window',
    title:'Minha janela',
    width: 1200,
    height: 600,
    autoShow : true,
    autoScroll : false,
    closable:false,
    layout : 'fit',
    items:[
        {
            xtype:'panel',
            title: 'Painel',
            html:'centro'
        }
    ]
})

Ext.onReady(function(){
    Ext.create('Curso.Janela')
})