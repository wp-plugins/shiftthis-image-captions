<?php
/*
Plugin Name: ShiftThis | Image Captions
Plugin URI: http://www.shiftthis.net/wordpress-image-captions-plugin/
Description: Create a caption under an image using the image alt text. Style using the "caption" class and span element.
Author: ShiftThis.net
Version: 1.2
Author URI: http://www.shiftthis.net

Features: 
 * Javascript dynamically puts an image in a div with the alt text as the caption below.  Title attribute is removed for reduntancy and Alt attribute is set to blank. Caption is not displayed if no alt text is present or if alt text matches the image name.
 * Javascript dynamically switches the images align attribute to a float attribute on the div for proper text wrapping.
 * Web Standards Compliant!
*/
#CONFIGURE st-image-captions.js LOCATION
$js_location = get_option('siteurl')."/wp-content/plugins/shiftthis-image-captions/";
$js = "st-image-captions.js";
$javascript = $js_location.$js;
function stic_js(){
global $javascript;
?>
<script type="text/javascript" src="<?php echo $javascript;?>"></script>

<?php

}
function stic_img_js($content){
		 $add_js = '/(\<img)/';  
	     $html = '<img class="captionimg"';
		// string replacement.
		$content = preg_replace($add_js, $html, $content);	
		
	return $content;
}
add_filter('the_content', 'stic_img_js');
add_action ( 'wp_head', 'stic_js');
?>