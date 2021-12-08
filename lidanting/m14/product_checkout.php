<?

include_once "lib/php/functions.php";

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<title>Product Checkout</title>
	<? include "parts/meta.php"; ?>
	<style>
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

			<a href="index.php">Cancel</a>

			<div>Fill in your Information</div>
			<div><a href="product_actions.php?action=reset-cart">Pay</a></div>

		</div>
	</div>
	<footer class="footercontrol" >&copy; Made by Liz Li. All Rights Reserved.</footer>
</body>
</html>