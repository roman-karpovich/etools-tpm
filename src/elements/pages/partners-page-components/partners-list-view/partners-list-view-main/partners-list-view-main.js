'use strict';

Polymer({
    is: 'partners-list-view-main',
    properties: {
        newVendorOpened: Boolean,
        queryParams: {
            type: Object,
            notify: true
        },
        listHeadings: {
            type: Array,
            value: function () {
                return [{
                    'size': 25,
                    'label': 'Vendor #',
                    'name': 'vendor_number',
                    'link': true,
                    'ordered': false
                }, {
                    'size': 50,
                    'label': 'Vendor Name',
                    'name': 'name',
                    'ordered': false
                }, {
                    'size': 25,
                    'label': 'Status',
                    'name': 'status',
                    'ordered': false
                }];
            }
        }
    },
    listeners: {
        'addNewVendor': 'openNewVendorDialog'
    },
    openNewVendorDialog: function() {
        this.newVendorOpened = true;
    }
});