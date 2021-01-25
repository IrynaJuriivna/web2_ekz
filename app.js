(function () {
    'use strict';
    angular.module('ekz', [])
        .controller('ItemsController', ItemsController)
        .service('itemsService', ItemsService);

    ItemsController.$inject = ['itemsService'];

    function ItemsController(service) {
        var controller = this;
        controller.ItemsList = service.getBuyItems();
        controller.deleteItem = function (itemIndex) {
            service.deleteItem(itemIndex);
        }
        controller.hideItem = function (itemIndex) {
            service.hideItem(itemIndex)
        }
    };
    function ItemsService() {
        var service = this;
        var ItemsList = [{
            quantity: 27,
            mark: "Фея",
            hide: false
        },
        {
            quantity: 15,
            mark: "Lego",
            hide: false
        },
        {
            quantity: 35,
            mark: "Тетріс",
            hide: false
        },
        {
            quantity: 13,
            mark: "Пожежна машина",
            hide: false
        },
        {
            quantity: 5,
            mark: "Єдиноріг",
            hide: false
        }
        ];

        service.getBuyItems = function () {
            return ItemsList;
        };
        service.deleteItem = function (itemId) {
            ItemsList.splice(itemId, 1);
        };
        service.hideItem = function (itemId) {
            ItemsList[itemId].hide = !ItemsList[itemId].hide;
        }

    };


})();
