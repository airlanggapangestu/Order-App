document.getElementById("orderButton").onclick = function () {
    let foodPrice = parseInt(document.getElementById("food").value);
    let drinkPrice = parseInt(document.getElementById("drink").value);
  
    let totalPrice = foodPrice + drinkPrice;
    let discount = 0;
  
    if (totalPrice > 100) {
     discount = totalPrice * 0.1;
     totalPrice -= discount;
    }

    const resultDiv = document.getElementById("result");
    if (totalPrice > 0) {
        resultDiv.innerHTML= ` 
        Total : $${foodPrice + drinkPrice}<br>
        Discount : $${discount.toFixed(2)}<br>
        Final Price : $${totalPrice.toFixed(2)} `;
    }
    else {
        resultDiv.innerHTML = "Please Select both Food and drink"
    }

 

  };
