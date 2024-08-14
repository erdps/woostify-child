<?php
/**
 * Woostify Child Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Woostify Child Theme
 * @since 1.0.0
 */

function your_custom_function_name() {
	
// Enqueue menu script from child-theme.

	if ( defined( 'WOOSTIFY_VERSION' ) ) {
		wp_enqueue_script(
			'woostify-navigation',
			get_stylesheet_directory_uri() . '/js/navigation.js',
			array( 'jquery' ),
			woostify_version(),
			true
		);
	}
}