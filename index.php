<?php get_header(); ?>


<div class="container">
	<?php if(have_posts()); while (have_posts()) : the_post(); ?>
		<div class="post">
			<div class="publisher">
				<span><?php the_field('publisher'); ?></span> | <?php the_field('date_published'); ?>
			</div>
			<div class="url">
				<a href="<?php the_field('url'); ?>"><?php the_title(); ?></a>
			</div>
		</div>
	<?php endwhile; ?>
</div>

<?php get_footer(); ?>