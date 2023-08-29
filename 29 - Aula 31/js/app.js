Ext.define('Curso.Janela',{
    extend:'Ext.window.Window',
    title:'Minha janela',
    width:1360,
    height: 600,
    autoShow : true,
    autoScroll : true,
    resizable : false,
    closable:false,
    items:[
        {
            xtype:'panel',
            title:'Painel 1',
            height:300
        },
        {
            xtype:'panel',
            title:'Painel 1',
            height:100
        },
        {
            xtype:'panel',
            title:'Painel 1',
            height:100
        }
    ]
})

Ext.onReady(function(){
    Ext.create('Curso.Janela')
})