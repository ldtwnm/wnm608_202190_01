<?

include_once "lib/php/functions.php";

?>


<!DOCTYPE html>
<html lang="en">
<head>
	
	<title>YOSN Store</title>

	<? include "parts/meta.php" ?>
	



	<style>
		* {
  box-sizing: border-box;
}

/* Create three equal columns that floats next to each other */
.column {
  float: left;
  width: 33.33%;
  padding: 10px;
  border-style: solid;
  border-width: 0.5px;
  border-color: #1e392a;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}





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
	
	<? include "parts/navbar.php" ?>

	

	




	<div class="view-window" style="background-image:url(img/webdesign.png);">
		<h2>YOSN Product</h2>
	</div>

	<div class="container">
		<div class="card soft text-center">
			<h2><a href="product_list.php">Welcome to my YOSN store</a></h2>







			<div class="row">
			  <div class="column" style="border-color: #1e392a;">
			    <h2>Visual Design</h2>
			    <img style="width: 70%;" src="img/pringdesign.png">
			  </div>
			  <div class="column" style="border-color: #1e392a;">
			    <h2>Visual Design</h2>
			    <img style="width: 70%;" src="img/pringdesign.png">
			  </div>
			  <div class="column" style="border-color: #1e392a;">
			    <h2>Visual Design</h2>
			    <img style="width: 70%;" src="img/pringdesign.png">
			  </div>
			  <div class="column" style="border-color: #1e392a;">
			    <h2>Visual Design</h2>
			    <img style="width: 70%;" src="img/pringdesign.png">
			  </div>
			  <div class="column" style="border-color: #1e392a;">
			    <h2>Visual Design</h2>
			    <img style="width: 70%;" src="img/pringdesign.png">
			  </div>
			  <div class="column" style="border-color: #1e392a;">
			    <h2>Visual Design</h2>
			    <img style="width: 70%;" src="img/pringdesign.png">
			  </div>
			</div>





		</div>
	</div>






<footer class="footercontrol" >&copy; Made by Danting Li.</footer>






</body>
</html>