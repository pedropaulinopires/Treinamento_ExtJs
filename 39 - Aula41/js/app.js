let win = Ext.define('Curso.Janela',{
    extend:'Ext.window.Window',
  
    width: 1200,
    height: 600,
    autoShow : true,
    maximized : true,
    autoScroll : false,
    closable:false,
    layout : {
        type:'vbox',
    },
    items:[
        {
            xtype:'panel',
            title: 'painel 1',
            flex: 1,
            width:150
        },
        {
            xtype:'panel',
            title: 'painel 2',
            flex: 1,
            width:150
        },
        {
            xtype:'panel',
            title: 'painel 3',
            flex: 1,
            width:150
        }
    ]
})

Ext.onReady(function(){
    Ext.create('Curso.Janela')
})