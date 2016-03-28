<?php get_header(); ?>

<section class="hero-image">
	<div class="container">
		<h2><?php the_field('sub_heading', 'options') ?></h2>
		<a href="<?php the_field('call_to_action_link', 'options'); ?>" class='btn-cta'><?php the_field('call_to_action_text', 'options'); ?></a>
	</div>
</section>

<div class="container">

	<?php if(have_posts()); while (have_posts()) : the_post(); ?>

		<?php the_content(); ?>

	<?php endwhile; ?>

</div>

<?php get_footer(); ?>