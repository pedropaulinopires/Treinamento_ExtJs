Ext.define('Bolg.Minhatoolbar', {
    extend:'Ext.toolbar.Toolbar',
    alias:'widget.minhatoolbar',
    width: 500,
    items: [
        {
            xtype: 'button',
            text: 'Opções'
        },
        { xtype: 'tbspacer', width: 5 }
        ,
        {
            xtype: 'button',
            text: 'Mais'
        },
        { xtype: 'tbseparator' },
        {
            xtype: 'splitbutton',
            text: 'Mais',
            menu: ('Ext.menu.Menu',{
                items: [
                    // these will render as dropdown menu items when the arrow is clicked:
                    { 
                        text: 'Item 1', 
                        handler: function () { alert("Item 1 clicked"); } 
                    },
                    { 
                        text: 'Item 2', 
                        menu: new Ext.menu.Menu({
                            items: [
                                // these will render as dropdown menu items when the arrow is clicked:
                                {text: 'Item 1', handler: function(){ alert("Item 1 clicked"); }},
                                {text: 'Item 2', handler: function(){ alert("Item 2 clicked"); }}
                            ]
                        }),
                        handler: function () { alert("Item 2 clicked"); } 
                    }
                ]
            })
        },
        {xtype: 'tbfill'},
        {
            xtype:'button',
            text:'text'
        }
    ]
});

Ext.onReady(function(){
   
    Ext.create('Ext.panel.Panel', {
        bodyPadding: 5,  // Don't want content to crunch against the borders
        width: 300,
        title: 'Filters',
        dockedItems: [{
            xtype: 'minhatoolbar',
            dock: 'top'
        }],
        renderTo: Ext.getBody()
    });
})



