Ext.define('Curso.Janela',{
    extend:'Ext.window.Window',
    title:'Minha janela',
    width: 600,
    height: 400,
    autoShow : true,
    autoScroll : true,
    closable:false,
    layout : 'absolute',
    items:[
        {
            xtype:'panel',
            title:'Painel 1',
            x:10,
            y:20,
            html:'Lorem inpusum dolor'
        }
    ]
})

Ext.onReady(function(){
    Ext.create('Curso.Janela')
})