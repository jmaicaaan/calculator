class CalculatorController {
  constructor($state, $stateParams, hotkeys) {
    "ngInject";
    this.hotkeys = hotkeys;
    this.result = '0';
    this.userInputs = [];
    this.registerNumberBindings();
  }

  getResult = () => {
    this.result += 5;
  };

  addUserInputs = (userInput) => {
    let temp = this.result;
    let operator = this.getOperatorSymbol(userInput);
    if (operator) {
      this.userInputs.push(temp);
      this.userInputs.push(operator);
      temp = '0';
    } else {
      if (temp === '0') temp = ''; // mimics the display as zero (0)
      temp += userInput;
    }
    this.result = temp;
  };
  
  clearUserInputs = (isReset) => {
    if (isReset) {
      this.userInputs = [];
      this.result = '0';
    } else {
      this.userInputs.pop();
    }
  };

  getOperatorSymbol = (operatorName) => {
    if (operatorName) {
      let operator = {
        add: '+',
        subtract: '-',
        multiply: '*',
        divide: '/'
      };
      return operator[operatorName];
    }
    return;
  };

  registerNumberBindings = () => {
    this.hotkeys.add({
      combo: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
      callback: (event, hotkey) => {
        if (event && event.key) {
          let num = +event.key;
          this.addUserInputs(num);
        }
      }
    });
  };
}

export default CalculatorController;
