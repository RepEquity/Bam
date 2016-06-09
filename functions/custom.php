<?php

	// Changing excerpt more

	function new_excerpt_more($more) {
		global $post;
		return '… <a href="'. get_permalink($post->ID) . '">' . '[Read More]' . '</a>';
	}

	// add_filter('excerpt_more', 'new_excerpt_more');

	function image_alt($attachment_id){
		$alt = trim(strip_tags( get_post_meta($attachment_id, '_wp_attachment_image_alt', true) ));
		return $alt;
	}

	function get_img_src($location) {
		echo get_template_directory_uri() . "/img/" . $location;
	}

?>
