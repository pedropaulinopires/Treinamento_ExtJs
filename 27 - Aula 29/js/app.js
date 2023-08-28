Ext.onReady(()=>{
    Ext.tip.QuickTipManager.init();

    Ext.create('Ext.menu.Menu', {
        width: 100,
        margin: '0 0 0 0',
        plain:true,
        width:150,
        floating: false,  // usually you want this set to True (default)
        renderTo: 'menu1',  // usually rendered by it's containing component
        items: [{
            text: 'opção 1',
            menu: Ext.create('Ext.menu.Menu',{
                items:[
                    {
                        text:'sub opção 1',
                        iconCls :'menu'
                    }
                ]
            })
        },{
            text: 'Escolha uma cor',
            menu:Ext.create('Ext.menu.ColorPicker', {
                listeners:{
                    select: function(ele, cor){
                        console.log(cor)
                    }
                }
            })
        },{
            text: 'Escolha uma data',
            menu:Ext.create('Ext.menu.DatePicker', {
                handler: function(dp, date){
                    Ext.Msg.alert('Data Selecionada', 'Você selecionou ' + Ext.Date.format(date, 'd M, Y'));
                }
            })
        }]
    });
})