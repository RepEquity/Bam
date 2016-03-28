<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<title>Municon</title>
	<link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>" type="text/css" media="screen" />
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
	
<header>
	<div class="top-header">
		<img src="<?php echo get_template_directory_uri();  ?>/images/main-logo.png" alt="">
		<ul>
			<li><a href="/About">About</a></li>
			<li><a href="faq">FAQ</a></li>
			<li><a href="/contact" class='btn-contact'>Contact</a></li>
		</ul>		
	</div>
	<div class="main-navigation">
		<div class="container">
			<?php wp_nav_menu( array( 'theme_location' => 'Main Menu' ) ); ?>
		</div>		
	</div>
</header>