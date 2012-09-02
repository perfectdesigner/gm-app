Ext.define('GoodbyeMoney.controller.Spents', {
    extend: 'Ext.app.Controller',

    requires: ['Ext.MessageBox'],

    config: {
        routes: {
            'spents': 'index',
            'spents/:id/edit': 'edit'
        },

        refs: {
            saveButton: {
                xtype: 'formpanel',
                selector: 'button[action="saveSpent"]'
            },
            form: {
                xtype: 'spentsform',
                selector: 'spentsform',
                autoCreate: true
            }
        },

        control: {
            saveButton: {
                tap: 'save'
            }
        }
    },

    newSpent: function () {
        var categories_store = Ext.getStore('Categories');
        categories_store.load();
        Ext.Viewport.add(this.getForm());
    },

    save: function () {
        var spent = Ext.create('GoodbyeMoney.model.Spent', this.getForm().getValues()),
            errors = spent.validate();

        if (errors.isValid()) {
            spent.save();
            navigator.app.exitApp();
        } else {
            Ext.Msg.alert(
                'Field with error',
                'Fix the following errors:'
            );
        }
    },

    index: function () {
        console.log('products index =)');
    },

    edit: function (id) {
        console.log('edit spent ' + id);
    }
});