const billInput = document.querySelector("#bill-amount-input");
const peopleCountInput = document.querySelector("#people-count-input");
const tipPercentages = document.querySelectorAll('input[type="checkbox"]');

const calculateTipAmount = (value) => {
  // Check select tip value existing
  // Check number of people value existing
  // Calculate the tip value
};

const calculateTotalAmount = (value) => {
  // Calculate total amount
};

const handleBillChange = (event) => {
  const billValue = event.target.value;

  calculateTipAmount(billValue);
  calculateTotalAmount(billValue);
};

const handlePeopleCountChange = (event) => {
  console.log("handlePeopleCountChange");
};

const handleTipPercentageChange = (event) => {
  console.log("handleTipPercentageChange");
};

billInput.addEventListener("input", handleBillChange);
peopleCountInput.addEventListener("input", handlePeopleCountChange);

tipPercentages.forEach((input) => {
  input.addEventListener("check", handleTipPercentageChange);
});
