Ext.define('MyApp1.view.main.center.CenterView', {
	extend: 'Ext.Container',
	xtype: 'centerview',
	cls: 'centerview',
	layout: 'card',
	items: [{
		
			xtype: 'panel',
			fullscreen: true,
			//layout: 'vbox',
			defaultType: 'textfield',
			defaults: {
				flex: 1
			},
			items: [{
				html: 'User-Form',
				style: 'background-color: white'
			
			},
			{
				fieldLabel: 'First Name',
                name: 'first'
			},
			{
				fieldLabel: 'Last Name',
                  name: 'last'
			},
			{
				//xtype datefield
				xtype: 'datefield',
				fieldLabel: 'Date of Birth',
				name: 'birthDate',
				msgTarget: 'under',
				invalidText: '"{0}" bad. "{1}" good.'
			},
			{
				xtype: 'button',
				text: 'Submit',
				handler: function(){
					Ext.msg.alert('Message added');
				}
			}
		]
		
	}]
});
