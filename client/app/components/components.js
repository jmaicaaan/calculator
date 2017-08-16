import angular from 'angular';
import Home from './home/home';
import Calculator from './calculator/calculator';

let componentModule = angular.module('app.components', [
  Home,
  Calculator
])

.name;

export default componentModule;
