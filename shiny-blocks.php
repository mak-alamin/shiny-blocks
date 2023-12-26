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
	register_block_type(__DIR__ . '/build/typing-text');
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
