<?
include_once "lib/php/functions.php";
?>


<!DOCTYPE html>
<html lang="en">
<head>
	<title>About Us</title>
	<? include "parts/meta.php"; ?>

	<style>
/* contact form */
input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #b7cfc8;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #549050;
  color: white;
  padding: 16px 22px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #b7cfc8;
}

.container_form {
  border-radius: 5px;
  background-color: #e5e5e1;
  padding: 20px;
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
	<? include "parts/navbar.php"; ?>

	<div class="container">
		<div class="card soft">
			<h2>About Us</h2>

			<p>YOSN is a creative design company based in the San Francisco Bay Area. YOSN means young mountain in Chinses, which stands for the power of new generation. We have expertise in UX, UI, graphic, branding, video, typography, coding, etc.</p>
			<p>Listening, communicating and executing with precision sets us apart. Creativity promotes problem solving, maximizes outcomes and allows us to differentiate your style and brand. Deadlines are important and we stick to them. You’ll get a project calendar to keep everybody on the same page. We’re proactive and committed to your success and an awesome experience.</p>
			<p>We combine industry knowledge and years of experience into our process, which results in more leads and sales for you. We build bold brands that make everyday life better for people, the planet and animals.</p>
			<p>By applying behavioral science to customer experience, we design engaging designs. We create human-centered design that has the polished and snappy feel. We help you build websites that tell your brand's story nicely. Let’s work together to improve your business outcomes, processes, and your relationship with your audiences.</p>
			<p>When you collaborate with YOSN, it's not just a business decision—you're joining an ecosystem of knowledge-hungry individuals who are committed to helping each other learn and grow. Our team is made up of diverse, unique and curious individuals who are constantly craving knowledge acquisition. We combine our personal backgrounds, professional experiences and research data in order to bring strategic solutions that drive results.</p>
			<p>To make an honest connection with your consumers, start by being real with yourself. YOSN can help you find and cultivate the real in your brand from the inside out.</p>
			<p>Being Bold — It’s better to stand for something clear than be everything to everyone. Trust begins with being true to who you are, inside and out.</p>
			<p>Distinct Design — Great branding is not a trend. Design should be custom-made based on what’s right for each brand.</p>
			<p>Real Conversations — Strong brands question, listen, learn, and evolve. We believe in asking tough questions and sharing honest perspectives.</p>



				<h3>Contact Us</h3>

			<div class="container_form">
			  <form action="index.php">
			    <label for="fname">First Name</label>
			    <input type="text" id="fname" name="firstname" placeholder="Your name..">

			    <label for="lname">Last Name</label>
			    <input type="text" id="lname" name="lastname" placeholder="Your last name..">

			    <label for="country">Country</label>
			    <select id="country" name="country">
			      <option value="australia">USA</option>
			      <option value="canada">China</option>
			      <option value="usa">Others</option>
			    </select>

			    <label for="subject">Subject</label>
			    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

			    <input type="submit" value="Submit">
			  </form>
			</div>



		</div>



	</div>





	
<footer class="footercontrol" >&copy; Made by Liz Li. All Rights Reserved.</footer>

</body>
</html>