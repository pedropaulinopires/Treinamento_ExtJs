let win = Ext.define('Curso.Janela',{
    extend:'Ext.window.Window',
    title:'Minha janela',
    width: 1200,
    height: 600,
    autoShow : true,
    autoScroll : false,
    closable:false,
    layout : {
        type:'hbox',
        align:'stretch'
    },
    items:[
        {
            xtype:'panel',
            flex:1,
            layout:'border',
            items:[
                {
                    xtype:'panel',
                    title:'painel 1',
                    region:'center'
                },
                {
                    xtype:'panel',
                    title:'painel 1',
                    region:'west',
                    width:200,
                    collapsible: true,
                    split:true
                }
            ],
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [
                    {
                        xtype:'tbspacer', width: 15
                    },
                    {
                        xtype:'button',
                        text: 'opções'
                    },
                    {
                        xtype:'tbspacer', width: 15
                    },
                    {
                        xtype:'button',
                        text:'outros',
                        menu: Ext.create('Ext.menu.Menu',{
                            items: [
                                // these will render as dropdown menu items when the arrow is clicked:
                                {text: 'Item 1', handler: function(){ alert("Item 1 clicked"); }},
                                {text: 'Item 2', handler: function(){ alert("Item 2 clicked"); }}
                            ]
                        })
                    },
                    {xtype:'tbseparator'}
                ]
            }]
        },
        {
            xtype:'panel',
            title:'Painel',
            flex:1
        }
    ]
})

Ext.onReady(function(){
    Ext.create('Curso.Janela')
})