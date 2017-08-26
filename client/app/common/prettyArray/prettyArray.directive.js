class PrettyArrayDirective {
    constructor() {
        "ngInject";
        this.restrict = 'A';
        this.scope = {
            prettyArrayItem: '='
        }
    }
    
    link = ($scope, $element, $attrs) => {
        $scope.$watchCollection('prettyArrayItem', (newValue, previousValue) => {
            let text = newValue.toString().replace(/[,]/g, '');
            $element.html(text);
        });
    };
}

export default PrettyArrayDirective;