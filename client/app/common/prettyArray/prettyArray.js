import angular from 'angular';
import directive from './prettyArray.directive';

/**
 * https://github.com/toddmotto/angularjs-styleguide#directives
 * es5 directive as class based rather than object
 */

let prettyArrayDirective = angular.module('app.common.prettyArrayDirective', [

])

.directive('prettyArray', () => new directive()) 

.name;

export default prettyArrayDirective;
