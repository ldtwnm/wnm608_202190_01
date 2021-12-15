<?

include_once "lib/php/functions.php";

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<title>Product Checkout</title>
	<? include "parts/meta.php"; ?>
	<style>

/* cancel button style */
.button_cancel {
  background-color: #92565a;
  border: none;
  border-radius: 1em;
  color: white;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  opacity: 0.8;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
}

.button_cancel:hover {opacity: 1}


/* pay button style */
.button_pay {
	background-color: #549050;
  border: 0.1em solid #549050;
  border-radius: 1em;
  color: white;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  opacity: 0.9;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
}

.button_pay:hover {opacity: 1}





/* footer */
.footercontrol {
			padding: 100px;
			text-align: center;
			font-size: 0.7em;
			background-color: black;
			color: white;
			margin-top: 100px;
			margin-bottom: 0px;
		}
	</style>
</head>
<body>
	<? include "parts/navbar.php"; ?>

	<div class="container">
		<div class="card soft">

			<h2>Product Checkout</h2>

			<button class="button_cancel"><a href="index.php">Cancel</a></button>




			<div><h3>Fill in your Information Below</h3></div>









			<div class="container">
				
             
             	<div class="grid gap">
             		<div class="col-xs-12 col-md-6">
             			<div class="card soft">
             			<h3>Contact Info and Address</h3>
             <div class="form-control">
            <label for="name" class="form-label"><i class="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="input your billing address name here" class="form-input">
        	</div>
        <div class="form-control">
            <label for="email" class="form-label"><i class="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="input your email here" class="form-input">
        	</div>
        <div class="form-control">
            <label for="adr" class="form-label"><i class="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="input your address here" class="form-input">
        	</div>
        <div class="form-control">
            <label for="city" class="form-label"><i class="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="input your city here" class="form-input">
        </div>

            <div class="form-control">
                <label for="state" class="form-label">State</label>
                <input type="text" id="state" name="state" placeholder="input your state here" class="form-input">
            </div>
             
              <div class="form-control">
                <label for="zip" class="form-label">Zip Code</label>
                <input type="text" id="zip" name="zip" placeholder="input your zip code here" class="form-input">
            </div>

            	<img name="trustseal" alt="Trust Badges" style="border: 0;" src="https://trustlock.co/wp-content/uploads/2019/01/satisisfaction-guaranteed-free-trust-badges.png" width="171" height="75">


     


       				 </div>
       				</div>
  			
           


            
       		<div class="col-xs-12 col-md-6">
       			<div class="card soft">
            <h3>Payment</h3>
            
            <label class="form-label">Accepted Cards</label>
            
              <img alt="Credit Card Logos" title="Credit Card Logos" src="https://www.shift4shop.com/images/credit-card-logos/cc-3d-5.png" width="412" height="44" border="0" />
            
            <div class="form-control">
            <label for="cname" class="form-label">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="input your name on card here" class="form-input">
        </div>
        <div class="form-control">
            <label for="ccnum" class="form-label">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="input your card number here" class="form-input">
        </div>
        <div class="form-control">
            <label for="expmonth" class="form-label">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="input exp month here" class="form-input">
        </div>
        <div class="form-control">
            
                <label for="expyear" class="form-label">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="input exp year here" class="form-input">
            </div>
            <div class="form-control">
              
                <label for="cvv" class="form-label">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="input your card security code here" class="form-input">
            </div>
       		<img name="trustseal" alt="Trust Badges" style="border: 0;" src="https://trustlock.co/wp-content/uploads/2019/01/ssl-secure-checkout-trust-seal.png" width="171" height="75">



       
        </div>
    		</div>
              
          </div>
      </div>






      <br>



			<div class="button_pay"><a href="product_actions.php?action=reset-cart"><input type="submit" value="Pay" class="btn" ></a></div>

		</div>
	</div>

	<!--
	<footer class="footercontrol" >&copy; Made by Liz Li. All Rights Reserved.</footer>
	-->

</body>
</html>