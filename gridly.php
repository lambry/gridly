<?php
/**
 * Plugin Name: Gridly
 * Plugin URI: https://github.com/lambry/gridly/
 * Description: A bare bones responsive grid block for WordPress.
 * Version: 0.1.0
 * Author: Lambry
 * Author URI: https://lambry.com/
 * License: GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: gridly
 */

namespace Lambry\Gridly;

class Init
{
	/**
     * Setup actions and filters.
     */
    public function __construct()
    {
		add_action('init', [$this, 'block']);
		add_filter('site_transient_update_plugins', [$this, 'updates']);
	}

	/**
	 * Register block and assets.
	 */
	public function block()
	{
		$asset = include plugin_dir_path(__FILE__) . 'build/index.asset.php';

		wp_register_script('gridly-script', plugins_url('build/index.js', __FILE__), $asset['dependencies'], $asset['version']);

		wp_register_style('gridly-style', plugins_url('build/index.css', __FILE__ ), [], $asset['version']);

		register_block_type('lambry/gridly-grid', [
			'editor_script' => 'gridly-script',
			'editor_style'  => 'gridly-style',
		]);

		register_block_type('lambry/gridly-column', [
			'editor_script' => 'gridly-script',
			'editor_style'  => 'gridly-style',
		]);
	}

	/**
	 * Remove update notifications as this plugin isn't managed
	 * via the WordPress plugins repo, and the name already exists.
	 */
	function updates($updates)
	{
		unset($updates->response[plugin_basename(__FILE__)]);

		return $updates;
	}
}

new Init();
