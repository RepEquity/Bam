<?php

// Register/Enqueue css and js
add_action( 'wp_print_scripts', 'engueue_theme_scripts' );
add_action( 'wp_print_styles', 'engueue_theme_styles' );


/**
 * Theme Scripts/Styles
 */


function engueue_theme_styles() {
	wp_register_style( 'main', get_template_directory_uri().'/styles/main.css' );

	wp_enqueue_style( 'main' );
}

function engueue_theme_scripts() {
	wp_register_script('modernizr', get_template_directory_uri().'/js/vendor/modernizr.js' );
	wp_register_script('respond', get_template_directory_uri().'/js/vendor/respond.js' );
	wp_register_script('script', get_template_directory_uri().'/js/script.js', array('jquery'));

	wp_enqueue_script( 'modernizr');
	wp_enqueue_script( 'respond');
	wp_enqueue_script( 'script');

}
