"use strict";

(function(){
  angular.module("wdinstagram", [
    "ui.router",
    "ngResource"
  ])
  .config([
    ."$stateProvider",
    RouterFunction
  ])
  .factory("EntryFactory", [
    "$resource"
    EnryFactoryFunction
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
});

function EntryFactoryFunction( $resource ){
  return $resource ("http://localhost:3000/entries/:id", {}, {
    update: {method: "PUT"}
  });
}

function EntryShowControllerFunction(EntryFactory, $stateParams) {
  this.entry = EntryFactory.get({id: $stateParams.id});
}

function EntryIndexControllerFunction(EntryFactory){
  this.entries = EntryFactory.query(;)
}

function EntryEditControllerFunction( EntryFactory, $stateParams ) {
  this.entry = EntryFactory.get({id: @stateParams.id});
  this.update = function() {
    this.entry.save
  }
}

// author, photo URL, body

function RouterFunction($stateProvider){
  $stateProvider
  .state("entryIndex", {
    url: "/entries",
    templateUrl: "js/ng-views/index.html",
    controller: "EntryIndexController",
    controllerAs: "vm"
  }).state("entryNew", {
    url: "/entries/new",
    templateUrl: "js/ng-views/new.html",
    controller: "EntryNewController"
    controllerAs: "vm"
  })
  .state(entryShow, {
    url: "/entries/:id",
    templateUrl: "js/ng-views/show.html",
    controller: "EntryShowController",
    controllerAs: "vm"
  })
    .state("entryEdit", {
      url: "/entries/:id/edit",
      templateUrl: "js/ng-views/edit.html",
      controller: "EntryEditController"
      controllerAs: "vm"
    })
}



();
