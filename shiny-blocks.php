<?php
/**
 * Plugin Name:       Shiny Blocks
 * Description:       Build your WordPress website with Stunning Gutenberg Blocks.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Mak Alamin
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       shiny-blocks
 *
 * @package           shiny-blocks
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function shiny_blocks_shiny_blocks_block_init()
{
	register_block_type(__DIR__ . '/build/typing-text', array(
		'script' => 'shiny-blocks-typing-text',
		// 'editor_script' => 'shiny-blocks-admin-js',
	));

	register_block_type(__DIR__ . '/build/advance-image');
	register_block_type(__DIR__ . '/build/post-grid');
}
add_action('init', 'shiny_blocks_shiny_blocks_block_init');

/**
 * Add category for blocks 
 */
function shiny_blocks_register_blocks_category($categories, $post)
{
	array_unshift($categories, array('slug' => 'shiny-blocks', 'title' => 'Shiny Blocks'));

	return $categories;
}

if (version_compare(get_bloginfo('version'), '5.8', '>=')) {
	add_filter('block_categories_all', 'shiny_blocks_register_blocks_category', 99, 2);
} else {
	add_filter('block_categories', 'shiny_blocks_register_blocks_category', 99,2);
}

/**
 * Enqueue Scripts
 */
add_action( 'wp_enqueue_scripts', 'shiny_blocks_enqueue_plugin_js' ); // Loads on frontend
function shiny_blocks_enqueue_plugin_js() {
	wp_register_script('shiny-blocks-typing-text',plugin_dir_url( __FILE__ ) . 'assets/js/typed.min.js', array('jquery'), time(), false );

	wp_enqueue_script(
	  'shiny-blocks-frontend',
	  plugin_dir_url( __FILE__ ) . 'assets/js/frontend.js',
	  ['wp-element'],
	  time(), // Change this to null for production
	  true
	);
}

add_action( 'enqueue_block_editor_assets', 'shiny_blocks_enqueue_admin_js' );
function shiny_blocks_enqueue_admin_js() {
	wp_register_script('shiny-blocks-typing-text',plugin_dir_url( __FILE__ ) . 'assets/js/typed.min.js', array('jquery'), time(), true );

	wp_register_script('shiny-blocks-admin-js',plugin_dir_url( __FILE__ ) . 'assets/js/admin.js', array('shiny-blocks-typing-text'), time(), true);
}