"use strict";

(function(){
  let entries = [
    {photo_url: "", author: "", body: ""}
  ]

  angular.module("wdinstagram", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .factory("EntryFactory", [
    "$resource",
    EntryFactoryFunction
  ])
  .controller("EntryIndexController", [
    "EntryFactory",
    "$stateParams",
    EntryIndexControllerFunction
  ])
  .controller("EntryShowController", [
    "EntryFactory",
    "$stateParams",
    EntryShowControllerFunction
  ])
  .controller("EntryNewController", [
    "EntryFactory",
    "EntryNewControllerFunction"
  ])
  .controller("EntryEditController"[
    "EntryFactory",
    "$stateParams",
    EntryEditControllerFunction
  ])


function EntryFactoryFunction( $resource ){
  return $resource ("http://localhost:3000/entries/:id", {}, {
    update: {method: "PUT"}
  // });
  // let entries = [{
  //     author: "Joe",
  //     photo_url: "http://www.costafarms.com/CostaFarms/Costa-Farms-Succulent-Echeveria-peacockii.jpg?height=257&width=256&scale=both&crop=auto",
  //     body: "Goals"
  //   },
  //   {
  //       author: "Jill",
  //       photo_url: "http://www.godofevolution.com/wordpress/wp-content/uploads/2014/01/tumblr_me5xj2Dmlr1r3clqao1_1280.jpg",
  //       body: "Bill"
  //     },
  //     {
  //       author: "Whitney",
  //       photo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/GrhToscane.jpg/240px-GrhToscane.jpg",
  //       body: "Vacation"
  //       },
  // ]
// }
// return {entries}
})
}

function EntryShowControllerFunction(EntryFactory, $stateParams) {
  this.entry = EntryFactory.get({id: $stateParams.id});
  // this.entry = entries.find(entry)=> {
//   return entry.id == $stateParams.id
// }
}

function EntryNewControllerFunction( EntryFactory ){
  this.entry = new EntryFactory();
  this.create = function(){
    this.entry.$save()
  }
}


function EntryIndexControllerFunction(EntryFactory){
  this.entries = EntryFactory.query()
  // this.entries = [{
  //     author: "Joe",
  //     photo_url: "http://www.costafarms.com/CostaFarms/Costa-Farms-Succulent-Echeveria-peacockii.jpg?height=257&width=256&scale=both&crop=auto",
  //     body: "Goals"
  //   },
  //   {
  //       author: "Jill",
  //       photo_url: "http://www.godofevolution.com/wordpress/wp-content/uploads/2014/01/tumblr_me5xj2Dmlr1r3clqao1_1280.jpg",
  //       body: "Bill"
  //     },
  //     {
  //       author: "Whitney",
  //       photo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/GrhToscane.jpg/240px-GrhToscane.jpg",
  //       body: "Vacation"
  //       },
  // ]
}

function EntryEditControllerFunction( EntryFactory, $stateParams ) {
  this.entry = EntryFactory.get({id: $stateParams.id});
  this.update = function() {
    this.entry.save
  }
}



// author, photo URL, body

function RouterFunction($stateProvider){
  $stateProvider
  .state("entryIndex", {
    url: "/entries",
    controller: "EntryIndexController",
    controllerAs: "vm",
    templateUrl: "js/ng-views/index.html"
  }).state("entryNew", {
    url: "/entries/new",
    templateUrl: "js/ng-views/new.html",
    controller: "EntryNewController",
    controllerAs: "vm"
  })
  .state("entryShow", {
    url: "/entries/:id",
    controller: "EntryShowController",
    controllerAs: "vm",
    templateUrl: "js/ng-views/show.html"
  })
    .state("entryEdit", {
      url: "/entries/:id/edit",
      templateUrl: "js/ng-views/edit.html",
      controller: "EntryEditController",
      controllerAs: "vm"
    })
}

})();
