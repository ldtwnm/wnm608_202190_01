<?
	include_once "lib/php/functions.php";
	include_once "parts/templates.php";
?>




<!DOCTYPE html>
<html lang="en">
<head>
	<title>Product List</title>
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



	<div class="container">
		<div class="card soft">
			<h2>Product List</h2>

			<div class="grid gap">
				<?
				echo array_reduce(
					MYSQLIQuery("
						SELECT * 
						FROM `products`
						ORDER BY `title` DESC
						LIMIT 12
					"),
					'makeProductList'
				);

				?>
			</div>

		</div>
	</div>

	<footer class="footercontrol" >&copy; Made by Danting Li.</footer>

	
</body>
</html>