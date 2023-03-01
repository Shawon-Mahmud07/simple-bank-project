// to get input field value
function getValueById(InputValueId) {
  const inputField = document.getElementById(InputValueId);
  const inputValue = inputField.value;
  const totalInputValue = parseFloat(inputValue);
  inputField.value = "";
  return totalInputValue;
}
// to get innerText value
function getTextElementById(TextValue) {
  const textElement = document.getElementById(TextValue);
  const TextAmount = textElement.innerText;
  const textAmountTotal = parseFloat(TextAmount);
  return textAmountTotal;
}
//set amount to innerText element
function setTextAmount(getElementId, amount) {
  const innerTextElement = document.getElementById(getElementId);
  innerTextElement.innerText = amount;
}

// ==================================================================

// Deposit button Click function
document.getElementById("btn-deposit").addEventListener("click", function () {
  const inputValueTotal = getValueById("deposit-input");
  if (isNaN(inputValueTotal)) {
    alert("please, type number");
    return;
  }
  if (inputValueTotal <= 0) {
    alert("please, enter valid number");
    return;
  }

  const previousAmountTotal = getTextElementById("deposit-amount");

  // for deposit
  const newAmount = previousAmountTotal + inputValueTotal;
  setTextAmount("deposit-amount", newAmount);
  // for balance
  const balanceAmountText = getTextElementById("balance-amount");
  const previousBalanceAmount = balanceAmountText + inputValueTotal;
  setTextAmount("balance-amount", previousBalanceAmount);
});

// Withdraw button Click function
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawInputValue = getValueById("withdraw-input");
  if (isNaN(withdrawInputValue)) {
    alert("please, type number");
    return;
  }
  const withdrawTextValue = getTextElementById("withdraw-amount");
  const withdrawBalanceAmountText = getTextElementById("balance-amount");

  if (withdrawInputValue > withdrawBalanceAmountText) {
    alert("you have not enough money");
    return;
  }
  // for Withdraw
  const WithdrawAmountTotal = withdrawTextValue + withdrawInputValue;
  setTextAmount("withdraw-amount", WithdrawAmountTotal);
  // for balance
  const WithdrawBalanceAmount = withdrawBalanceAmountText - withdrawInputValue;
  setTextAmount("balance-amount", WithdrawBalanceAmount);
});
