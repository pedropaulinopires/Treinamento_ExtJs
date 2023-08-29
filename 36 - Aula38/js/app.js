let win = Ext.define('Curso.Janela',{
    extend:'Ext.window.Window',
    title:'Minha janela',
    width: 1200,
    height: 600,
    autoShow : true,
    autoScroll : false,
    closable:false,
    activeItem : 0,
    layout : 'card',
    items:[
        {
            xtype:'panel',
            title:'Painel 1',
            html:'painel 1',
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                items: [{ xtype: 'tbfill' },{
                    xtype:'button',
                    text: 'Próximo',
                    handler:function(btn){
                        btn.up('window').getLayout().setActiveItem(1)
                    }
                }]
            }]
        },
        {
            xtype:'panel',
            title:'Painel 2',
            html:'painel 2',
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                items: [{ xtype: 'tbfill' },{
                    text: 'Anterior',
                    handler:function(btn){
                        btn.up('window').getLayout().setActiveItem(0)
                    }
                }]
            }]
        }
    ]
})

Ext.onReady(function(){
    Ext.create('Curso.Janela')
})