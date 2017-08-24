class CalculatorController {
  constructor($state, $stateParams, hotkeys) {
    "ngInject";
    this.hotkeys = hotkeys;
    this.result = '0';
    this.userInputs = [];
    this.registerKeyBindings();
  }

  getResult = () => {
    this.userInputs.push(this.result);
    let infixNotation = this.userInputs.toString().replace(/[,]/g, '');
    this.userInputs = [];
    this.result = eval(infixNotation);
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

  removeLastDigit = () => {
    this.result = this.result.slice(0, - 1);
    if (typeof this.result === 'string' && this.result.length <= 0) {
      this.result = '0';
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

  registerKeyBindings = () => {
    this.hotkeys.add({
      combo: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
      callback: (event, hotkey) => {
        if (event && event.key) {
          let num = +event.key;
          this.addUserInputs(num);
        }
      }
    });
    this.hotkeys.add({
      combo: ['+', '-', '*', '/'],
      callback: (event, hotkey) => {
        if (event && event.key) {
          let operator = event.key;
          this.addUserInputs(operator);
        }
      }
    });
    this.hotkeys.add({
      combo: ['enter'],
      callback: (event, hotkey) => {
        this.getResult();
      }
    });
    this.hotkeys.add({
      combo: ['esc'],
      callback: (event, hotkey) => {
        this.clearUserInputs(true);
      }
    });
    this.hotkeys.add({
      combo: ['backspace'],
      callback: (event, hotkey) => {
        this.removeLastDigit();
      }
    });
  };
}

export default CalculatorController;
