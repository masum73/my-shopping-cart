function getTextElementById(elementId){
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementValue = parseInt(elementString);

    return elementValue;
}
function setTextElementById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}
function calculateSubTotal(){
    //calculate total
    const currentPhoneTotal = getTextElementById('phone-total');
    const currentCaseTotal = getTextElementById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementById('sub-total', currentSubTotal);

    //calculate tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementById('tax-amount', taxAmount);

    //final 
    const finalAmount = currentSubTotal + taxAmount;
    setTextElementById('final-total', finalAmount);
}

