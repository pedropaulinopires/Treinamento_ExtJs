Ext.define('Curso.Janela',{
    extend:'Ext.window.Window',
    title:'Minha janela',
    width: 1200,
    height: 600,
    autoShow : true,
    autoScroll : false,
    closable:false,
    layout : 'border',
    items:[
        {
            xtype:'panel',
            title:'Painel 1',
            region : 'center',
            html:'centro'
        },
        {
            xtype:'panel',
            title:'Painel oeste',
            region : 'west',
            html:'Regiao oeste',
            width : 150,
            collapsible : true,
            split: true
        },
        {
            xtype:'panel',
            title:'Painel leste',
            html:'região leste',
            region: 'east',
            width:150,
            collapsible : true,
            split:true
        },
        {
            xtype:'panel',
            title:'Painel norte',
            html:'região norte',
            region: 'north',
            height:120,
            collapsible : true,
            split:true
        },
        {
            xtype:'panel',
            title:'Painel sul',
            html:'região sul',
            region: 'south',
            height:120,
            collapsible : true,
            split:true
        }
    ]
})

Ext.onReady(function(){
    Ext.create('Curso.Janela')
})