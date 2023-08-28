Ext.create('Ext.Button',{
    text:'Alerta',
    renderTo:'btn1',
    scale   : 'medium',
    handler:function(btn){
        Ext.Msg.alert('Olá','Olá, seja muito bem vindo ao extJs',function(){
            btn.setText("você clicou!")
        })
    }
})