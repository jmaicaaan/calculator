class CalculatorController {
  constructor($state, $stateParams) {
    "ngInject";
    this.result = 0;
    this.userInputs = [];
  }

  getResult = () => {
    this.result += 5;
  };

  addUserInputs = (char) => {
    this.userInputs.push(char);
  };
  
  clearUserInputs = (isReset) => {
    if (isReset) {
      this.userInputs = [];
    } else {
      this.userInputs.pop();
    }    
  };
}

export default CalculatorController;
