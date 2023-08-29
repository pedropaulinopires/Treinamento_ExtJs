

Ext.define('MinhaView', {
    extend: 'Ext.container.Viewport',
    layout: 'border',
    items: [
        {
            //container do meio
            xtype: 'panel',
            region: 'center',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'grid',
                    title: 'Simpsons',
                    autoScroll:true,
                    flex:1,
                    store: Ext.create('Ext.data.Store', {
                        storeId: 'simpsonsStore',
                        fields: ['name', 'email', 'phone'],
                        data: {
                            'items': [
                                { 'name': 'Lisa', "email": "lisa@simpsons.com", "phone": "555-111-1224" },
                                { 'name': 'Bart', "email": "bart@simpsons.com", "phone": "555-222-1234" },
                                { 'name': 'Homer', "email": "home@simpsons.com", "phone": "555-222-1244" },
                                { 'name': 'Marge', "email": "marge@simpsons.com", "phone": "555-222-1254" },
                                { 'name': 'Lisa', "email": "lisa@simpsons.com", "phone": "555-111-1224" },
                                { 'name': 'Bart', "email": "bart@simpsons.com", "phone": "555-222-1234" },
                                { 'name': 'Homer', "email": "home@simpsons.com", "phone": "555-222-1244" },
                                { 'name': 'Marge', "email": "marge@simpsons.com", "phone": "555-222-1254" },
                                { 'name': 'Lisa', "email": "lisa@simpsons.com", "phone": "555-111-1224" },
                                { 'name': 'Bart', "email": "bart@simpsons.com", "phone": "555-222-1234" },
                                { 'name': 'Homer', "email": "home@simpsons.com", "phone": "555-222-1244" },
                                { 'name': 'Marge', "email": "marge@simpsons.com", "phone": "555-222-1254" },
                                { 'name': 'Lisa', "email": "lisa@simpsons.com", "phone": "555-111-1224" },
                                { 'name': 'Bart', "email": "bart@simpsons.com", "phone": "555-222-1234" },
                                { 'name': 'Homer', "email": "home@simpsons.com", "phone": "555-222-1244" },
                                { 'name': 'Marge', "email": "marge@simpsons.com", "phone": "555-222-1254" }
                            ]
                        },
                        proxy: {
                            type: 'memory',
                            reader: {
                                type: 'json',
                                root: 'items'
                            }
                        }
                    }),
                    columns: [
                        { text: 'Name', dataIndex: 'name' },
                        { text: 'Email', dataIndex: 'email', flex: 1 },
                        { text: 'Phone', dataIndex: 'phone' }
                    ],

                },
                {
                    xtype: 'panel',
                    title: 'Painel',
                    flex:1,
                }
            ]
        },
        {
            //menu
            xtype: 'panel',
            region: 'west',
            title: 'Menu',
            collapsible: true,
            split:true,
            width: 250
        }
    ]
});



Ext.onReady(function () {
    Ext.create('MinhaView')
})