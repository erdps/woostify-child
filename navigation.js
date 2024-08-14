/**
 * Navigation.js
 *
 * @package woostify-child
 */

'use strict';
// Open Menu mobile.

function nav() {
	var menuToggleBtn = document.getElementsByClassName( 'toggle-sidebar-menu-btn' );
	if ( ! menuToggleBtn.length ) {
		return;
	}
	for ( var i = 0, j = menuToggleBtn.length; i < j; i++ ) {
		menuToggleBtn[i].addEventListener(
			'click',
			function() {
				document.documentElement.classList.add( 'sidebar-menu-open' );
				closeAll();
			}
		);
	}
}
// Accordion menu on sidebar.

function sidebarMenu( node ) {
	var selector = ( arguments.length > 0 && undefined !== arguments[0] ) ? jQuery( node ) : jQuery( '.sidebar-menu .primary-navigation' ),
		itemMenu = selector.find( '.menu-item-has-children > a' );
	itemMenu.each(
		function( i, ele ) {
			jQuery( ele ).on(
				'click',
				function( e ) {
					e.preventDefault();
					var t           = jQuery( this ),
						nextSibling = t.siblings( 'ul' ),
						allSubMenu  = t.parent().parent().find( 'li .sub-menu' ),
						allItemMenu = t.parent().parent().find( '.menu-item-has-children > a' );
					if ( t.hasClass( 'active' ) ) {
						t.removeClass( 'active' );
					} else {
						allItemMenu.removeClass( 'active' );
						t.addClass( 'active' );
					}
					
// Hide sub-menu.

					if ( nextSibling.hasClass( 'show' ) ) {
						nextSibling.slideUp(
							200,
							function() {
								jQuery( this ).removeClass( 'show' );
							}
						);
					} else {
						
// Show sub-menu.

						allSubMenu.slideUp(
							200,
							function() {
								jQuery( this ).removeClass( 'show' );
							}
						);
						nextSibling.slideToggle(
							200,
							function() {
								jQuery( this ).toggleClass( 'show' );
							}
						);
					}
				}
			);
		}
	);
}
document.addEventListener(
	'DOMContentLoaded',
	function() {
		nav();
		sidebarMenu();
	}
);