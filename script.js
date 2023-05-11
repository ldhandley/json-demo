
// receipt logo etc
document.write("<div id='receipt'>");
document.write("<div id='logo'>Chloe's</div>")

document.write("<div id='txt'><br>* * * * * * * * * * * * * * * * * *</div><br>")
document.write("<div id='txt'>CASH RECEIPT</div><br>")
document.write("<div id='txt'>* * * * * * * * * * * * * * * * * *</div>")

// JSON payload
var stock = {
  "item": [
   {"name": "Cream Soda", "price": 4.99},
   {"name": "Almond Butter", "price": 4.76},
   {"name": "Greek Yogurt", "price": 2.56},
   {"name": "Blueberries", "price": 4.99},
   {"name": "Toilet Paper", "price": 9.99}
 ]};

// display each item and cost from payload
document.write("<h2> Description <span>" + "Cost" + "</span></h2>")

for (i in stock.item) {
    document.write("<p>" + stock.item[i].name + " <span> $" + stock.item[i].price + "</span></p>");
}

var total = 0;

//calculate total by adding each cost together

for (i in stock.item) {
  total += stock.item[i].price;
}

// display total
document.write("<br><h2> TOTAL <span>" + " <span> $" + total.toFixed(2) + "</span></h2>")

// display thank you message

document.write("<div id='txt'><br>* * * * * * * * * * * * * * * * * *</div><br>")
document.write("<div id='txt'>THANKS 4 SHOPPING W/ US!</div><br>")
document.write("<div id='txt'>* * * * * * * * * * * * * * * * * *</div>")