angular.module('invoice2', ['finance2'])
.controller('InvoiceController', ['currencyConverter', function(currencyConverter) {
  this.qty = 1;
  this.cost = 2;
  this.inCurr = 'EUR';
  this.currencies = currencyConverter.currencies;
  this.paymentAmount = 0;
  this.total = function total(outCurr) {

    paymentAmount =  currencyConverter.convert(this.qty * this.cost, this.inCurr, outCurr);
    return paymentAmount;
  };

  this.pay = function pay() {
    window.alert("Thanks!" );
  };
  
}]);