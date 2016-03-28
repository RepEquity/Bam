<?php 
 /* 
	Template Name: Faq Template
 */
 ?>


<div class="container">

	<?php if(have_posts()); while (have_posts()) : the_post(); ?>

		<?php the_content(); ?>

	<?php endwhile; ?>
	
</div>

<?php get_footer(); ?>

