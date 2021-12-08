<?

include_once "lib/php/functions.php";
include_once "parts/templates.php";

?>


<!DOCTYPE html>
<html lang="en">
<head>
	
	<title>YOSN Store</title>

	<?php include "parts/meta.php" ?>
	

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
	
	<?php include "parts/navbar.php" ?>

	

	<div class="view-window" style="background-image:url(img/webdesign.png);">
		<h2>YOSN Product</h2>
	</div>

	<div class="container">
		<div class="card soft text-center">
			<h2><a href="product_list.php">Welcome to my YOSN store</a></h2>



		</div>
	</div>


<div class="container">
      <h2>NEW GRAPHIC DESIGN PRODUCT</h2>

      <? recommendCategory('graphic') ?>
   </div>

   <div class="container">
      <h2>NEW BRANDING DESIGN PRODUCT</h2>

      <? recommendCategory('branding') ?>
   </div>



<footer class="footercontrol" >&copy; Made by Liz Li. All Rights Reserved.</footer>



</body>
</html>