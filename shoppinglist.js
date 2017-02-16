<script> 
  
var theform = document.forms{"order"}
​
var bakeryprices = new Array();
var mnsprices = new Array();
var produceprices = new Array();
var wineprices = new Array();
​
​
var totalPrice = getBakeryPrice()+getmnsPrice()+getproducePrice()+
    getwinePrice()
​
var shoppinglist = document.getElementById('totalPrice');
shoppinglist.style.display="block";
shoppinglist.innerHTML = "Your Order Total is $"+totalPrice;
}
​
function hideTotal()
{
    var shoppinglist = document.getElementById('totalPrice');
    shoppinglist.style.display='none';
}
​
</script>