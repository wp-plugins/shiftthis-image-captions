=== ShiftThis | Image Captions ===
Contributors: shiftthis
Donate link: https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=paypal%40shiftthis%2enet&item_name=WordPress%20Plugin%20Development%20Donation&no_shipping=0&return=http%3a%2f%2fwww%2eshiftthis%2enet%2f&no_note=1&tax=0&currency_code=CAD&lc=CA&bn=PP%2dDonationsBF&charset=UTF%2d8&notify_url=http%3a%2f%2fwww%2eshiftthis%2enet%2f
Tags: image, captions
Requires at least: 2.0.2
Tested up to: 2.1.3
Stable tag: 1.2

This plugin will create a caption under all Post & Page images using the image's alt text. 

== Description ==

This plugin will create a caption under all Post & Page images using the images's alt text. Javascript dynamically puts the image in a div with the alt text as the caption below. The images title attribute is then removed for redundancy and the alt attribute is set to blank. Captions are not displayed if no alt text is present or if the alt text matches the image name (Wordpress’s default habit). It also dynamically switches the images align attribute to a float attribute on the div for proper web standards text wrapping. You can then style using the div's “caption” class and the containing span element.

== Installation ==


1. Upload the 'shiftthis-image-captions' folder to the 'wp-content\plugins' directory
2. Activate the plugin titled 'ShiftThis | Image Captions' through the 'Plugins' menu in WordPress
3. Enter your Image Captions within the WordPress image upload Title or manually add to the images alt property.
4. Style the image and caption using the .caption class and the span tag.

== How it works ==

In your WP text editor the image code generally looks something like this:

`<img src="http://www.yoursite.com/wp-content/uploads/someimage.jpg" alt="My image caption" title="My image caption" height="150" width="250" align="right" />`

It will output on your website like this:

`<div style="width: 250px; float: right;" class="caption">
<img src="http://www.yoursite.com/wp-content/uploads/someimage.jpg" height="150" width="250" /><br>
<span>My image caption</span>
</div>`


== Frequently Asked Questions ==

= How can I make the caption text wrap so that it stays within the width of the image =

You need to give the image a height and width property so that the caption knows the maximum width it can span.  To do this within the Rich Editor, simply click on one of the resize squares on the image without dragging, this will automatically set the correct height and width.

= Where can I ask support questions for this plugin? =

[support.ShiftThis.net](http://support.shiftthis.net)

== Screenshots ==
1. Example Output of styled Image Caption.
