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

	

	<div class="view-window" style="background-image:url(img/indexframebg.jpg);">
		<h2>YOSN Product</h2>
	</div>

	<div class="container">
		<div class="card soft text-center">
			<h2><a href="product_list.php">Welcome to YOSN store</a></h2>



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



<br>
<br>
<h2 style="text-align: center;">YOSN Address</h2>


  	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1561671387094!2d-122.40157458487984!3d37.78637977975733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581b66f3a4575%3A0x2682755af8b13396!2s180%20New%20Montgomery!5e0!3m2!1sen!2sus!4v1639557262717!5m2!1sen!2sus" width="100%" style="border: 0.1em solid #566660;" allowfullscreen="" loading="lazy"></iframe>






<footer class="footercontrol" >&copy; Made by Liz Li. All Rights Reserved.</footer>



</body>
</html>