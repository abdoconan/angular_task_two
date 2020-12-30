(function(){
    'use strict';
    angular.module('ShoppingMovingListCheckBox', [])
    .controller('ShoppingListToBuy', shoppingListToBuy)
    .controller('ShoppingListBought', shoppingListBought)
    .service('ShoppingListService', shoppingListservice);


    shoppingListToBuy.$inject = ['ShoppingListService']
    function shoppingListToBuy(ShoppingListService){
        var tobuy = this;
        tobuy.itmes = ShoppingListService.get_to_buy_items();
        tobuy.has_left_item = ShoppingListService.has_left_item();
        tobuy.move_to_bought = function(indexitem){
            ShoppingListService.move(indexitem);
            tobuy.has_left_item = ShoppingListService.has_left_item();
            

        };


    };

    shoppingListBought.$inject= ['ShoppingListService']
    function shoppingListBought(ShoppingListService){
        var bought = this;
        bought.items = ShoppingListService.get_bought_items();
        bought.has_item = ShoppingListService.has_item();
        bought.check = function(){
            bought.has_item = ShoppingListService.has_item();

        };

    };
    function shoppingListservice(){
         var service = this;

         var itemsToBuy = [{name:'Cookie', quntity : 10}, {name:'Meat', quntity: 2}, {name:'Cookie', quntity: 10},
                           {name:'milk', quntity: 5}, {name:'oil', quntity: 5}];
         var itemsBought = [];

         service.get_to_buy_items = function(){
             return itemsToBuy;
         };
         service.get_bought_items = function(){
             return itemsBought;
         };

         service.has_item = function(){
             return itemsBought.length == 0;
         };
         service.has_left_item = function(){
             return itemsToBuy.length == 0;

         };
         service.move = function(indexitem){
             var item = itemsToBuy[indexitem];
             itemsToBuy.splice(indexitem, 1);
             itemsBought.push(item);

         };


    };
    }
)();