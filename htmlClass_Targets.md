#HTML/CSS Class Content - What to expect

##HTML

* Browser / Server interaction
* DOCTYPE
* Meta Data Tags
	* head
	* title
	* base
	* link
	* meta
		* charset
		* http-equiv
		* default-style
		* refresh
		* set-cookie
		* application-name
		* author
		* description
		* generator
		* keywords
		* viewport
	* style
* Types of Tags
	* inline
		* goes with the flow of the content
	* block
		* wants to have a line to itself and wants it's width to be 100% of it's parent.
* Tags
	* Tag relationships
		* Parent / Descendent / Child
	* Layout/Grouping tags
		* using 'div' tags
		* using 'span' tags
		* boxes vs. handles		
	* Content tags 
		* block elements
			* header
			* blockquote
			* dd
			* address
			* audio
			* dl
			* fieldset
			* figure
			* form
			* h1,h2,h3, etc.
		* Typical inline elements
			* p
			* ul, ol			
			* dt
			* hr
			* a
			* strong
			* pre
			* code
			* img
			* br
			* sub
			* sup
		* form elements
			* button
			* input
			* label
			* textarea
			* select
		* tables
			* Use for Tablular data only!
			* thead
			* tbody
			* tr
			* td			
		* using attributes to expand the meaning of tags
			* href
			* title
			* rel
			* data
			* alt
		* Embeddable Content
			* iframe
			* img
			* object
			* param
			* video
			* audio
			* source
			* track
	* Identifying elements
		* ID's
			* only use once per page
		* Classes	
			* multiple uses
			* adding multiple classes to a single element				
* HTML 5 Specific tags
	* header
	* hgroup
	* figcaption
	* figure
	* nav
	* footer
	* article
	* aside
	* canvas
	* block
	* audio
	* video
* HTML 5 Data Storage
	* Index DB
	* Local Storage
	* Web SQL
* User Agents
	* Browser detection possibility vs. Capability Detection

	

##CSS
* Order of precedence
* How the cascade works
	* tag cascade
* syntax of rules
	* selector, curly brace, rules.
	* must end with ';'
* Colors
	* Multiple methods for notation
		* hexcode 
			* \#efefef
		* rgb(0,0,0)
		* rgba(255,255,255,0.5) (rgb with alpha channel)
		* keywords
			- https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
			- white
			- maroon
			- blue
* Block level elements
	* div
	* html5 elements
		* article
		* aside
		* nav
		* footer
		* header
	* h1,h2,h3, etc.
	* img
* Inline elements
* Traditional Box Model
* adding rules in the html page
* using the 'link' tag to load a separate css file
* Selector syntax
	* Parent
	* descendent 
	* child '>'
	* sibling '+'
	* attribute selectors
		* ~=
		* =
* Positioning
	* absolute
	* static
	* relative
	* fixed.
* Float
	* left
	* right
	* clearing floats
* Display
	* block
	* inline
	* inline-block
	* table
	* table-cell
	* table-row
	* flex
	* inline-flex
* box-sizing
* font-
	* size
	* weight
	* style
	* family
		* setting types
	* variant
	* line-height
* text-
	* align
	* transform
	* decoration
	* indent
	* shadow
* margin
	* four (4) values
	* shorthand
* padding
	* four (4) values
	* shorthand
* border
	* 4 values
	* shorthand
* background
	* position
	* repeat
	* color
	* image
	* shorthand
	* multiple
		- https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_multiple_backgrounds
* Effects
	- text-shadow
	- box-shadow
	- border-radius
	- gradients
		+ http://css-tricks.com/css3-gradients/
		+ http://www.colorzilla.com/gradient-editor/
		
* @media queries
	* https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries
	* min/max-width
	* min/max-height
	* orientation
	* aspect ration
	* resolution
		* min-resolution: 2dppx
		
##Other
* ARIA
	* https://developermozilla.org/en-US/docs/Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets
	

	
	
