Ext.onReady(() => {
    
    Ext.tip.QuickTipManager.init();

    Ext.create('Ext.Button', {
        text: 'Botao pequeno',
        renderTo: 'btn1',
        scale: 'small',
        listeners:{
            click:(btn)=>{
                btn.setText("Clicou")
            }
        }
    })

    Ext.create('Ext.button.Button', {
        text: 'Botao médio',
        renderTo: 'btn2',
        scale: 'medium'
    })

    Ext.create('Ext.button.Button', {
        text: 'Botao largo',
        renderTo: 'btn3',
        scale: 'large'
    })

    Ext.create('Ext.button.Button', {
        text: 'Botao pequeno',
        renderTo: 'btn4',
        disabled: true,
        scale: 'small'
    })

    Ext.create('Ext.button.Button', {
        text: 'Botao médio',
        disabled: true,
        renderTo: 'btn5',
        scale: 'medium'
    })

    Ext.create('Ext.button.Button', {
        text: 'Botao largo',
        disabled: true,
        renderTo: 'btn6',
        scale: 'large'
    })

    Ext.create('Ext.button.Button', {
        text: 'Botao toggle',
        renderTo: 'btn7',
        scale: 'small',
        enableToggle: true,
        toggleHandler: (btn, state) => {
            console.log(state)
        }
    })
    Ext.create('Ext.button.Button', {
        text: 'Botao link',
        renderTo: 'btn8',
        scale: 'small',
        href: 'https://www.google.com'
    })

    Ext.create('Ext.button.Split', {
        renderTo:'btn9',
        text: 'Options',
        tooltip:'Opções',
        handler: function () {
            alert("The button was clicked");
        },
        menu: Ext.create('Ext.menu.Menu',{
            items: [
                { text: 'Item 1', handler: function () { alert("Item 1 clicked"); } },
                { text: 'Item 2', handler: function () { alert("Item 2 clicked"); } }
            ]
        })
    });

    Ext.create('Ext.button.Cycle', {
        showText: true,
        renderTo: 'btn10',
        menu: {
            id: 'view-type-menu',
            items: [{
                text: 'Ecuro',
                iconCls: 'view-text',
                checked: true
            },{
                text: 'Claro',
                iconCls: 'view-html'
            }]
        },
        changeHandler: function(cycleBtn, activeItem) {
            Ext.Msg.alert(activeItem.text, activeItem.text);
        }
    });
})