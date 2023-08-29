Ext.define('Curso.Janela',{
    extend:'Ext.window.Window',
    title:'Minha janela',
    width: 600,
    height: 400,
    autoShow : true,
    autoScroll : true,
    closable:false,
    layout : 'anchor',
    items:[
        {
            xtype:'panel',
            title:'Painel 1',
            anchor:'100%, 50% ',
        }
    ]
})

Ext.onReady(function(){
    Ext.create('Curso.Janela')
})