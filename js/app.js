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
    FactoryFunction
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

function EntryFactoryFunction($resource){
  return $resource("http://localhost:3000/entries/:id");
}



();
