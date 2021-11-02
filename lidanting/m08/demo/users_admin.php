<?

include "../lib/php/functions.php";

$users = file_get_json("users.json");



function showUserPage($user) {

$classes = implode(", ", $user->classes);

// heredoc

echo <<<HTML
<nav class="nav crumbs">
   	<ul>
		<li><a href="{$_SERVER['PHP_SELF']}">Back</a></li>
	</ul>
</nav>
<div>
	<h2>$user->name</h2>
	<div>
		<strong>Type</strong>
		<span>$user->type</span>
	</div>
	<div>
		<strong>Email</strong>
		<span>$user->email</span>
	</div>
	<div>
		<strong>Classes</strong>
		<span>$classes</span>
	</div>
</div> 
HTML;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<title>Document</title>
	<?php include "../parts/meta.php"; ?>


	<style>
		body {background-color: rgba(219, 235, 227, 1.0);
			color: #e9c893; }
	</style>


</head>
<body>
	<header>
		<div class="container display-flex">
			<div class="flex-none">
				<h1>Users Admin</h1>
			</div>
			<div class="flex-stretch"></div>
			<nav class="nav flex-none">
				<ul>
					<li><a href="<?= $_SERVER['PHP_SELF'] ?>">List</a></li>
				</ul>
			</nav>
		</div>
	</header>

	<div class="container">
		<div class="card soft">
			<?

			if(isset($_GET['id'])){
				showUserPage($users[$_GET['id']]);
			} else {

			?>

			<h2>User List</h2>

			<ul>
				
				<?
				for($i=0; $i<count($users);$i++) {
					echo "<li>
					<a href='{$_SERVER['PHP_SELF']}?id=$i'>{$users[$i]->name}</a>
					</li>";
				}


				?>
			</ul>
			<?
				}
			?>


		</div>
	</div>
	
</body>
</html>