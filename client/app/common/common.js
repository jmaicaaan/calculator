import angular from 'angular';
import prettyArray from './prettyArray/prettyArray';

let commonModule = angular.module('app.common', [
    prettyArray
])
  
.name;

export default commonModule;
