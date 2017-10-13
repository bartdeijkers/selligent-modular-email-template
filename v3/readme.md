# selligent-modular-email-template
Template version : v3.0
--------------------------

## What's new?
---------------

Note: this v3.0 is a complete revision and lacks some functionality compared 
      to v2. However, it is more stable and compatible with SIM v6.3.4+.

* Better resposive styles (note the styles are now stored in a component named STYLES)
* NodeJS build scripts
* JSON article structure in WORD and PDF

## Requirements
---------------

Sim version V6.3.4 and up
Make sure the new article container has name "ARTICLES"
and create a new filter "MAIN" with missing content protection on.

## Create article table script
---------------

Create two article tables.
You are offcourse free to rename the tables to anything you like.

* ARTICLES_NEWSLETTER

use the 'Import Structure' button under tab 'Design' within the 
Campaign 'lists' section using the following file:
```
Documentation > ARTICLES_NEWSLETTER.xml
```

* ARTICLES_BUTTON_PRESETS

use the 'Import Structure' button under tab 'Design' within the 
Campaign 'lists' section using the following file:
```
Documentation > ARTICLES_BUTTON_PRESETS.xml
```


## Core article database columns
---------------

| Fieldname | Type | Length | SIM designer settings | Template version |
| --- | --- | --- | --- | --- |
| ID | Numeric | | Invisible | 2.2 |
| CREATED_DT | DateTime | | Invisible | 2.2 |
| MODIFIED_DT | DateTime | | Invisible | 2.2 |
| TAXONOMY | Text | 200 | Invisible | 2.2 |
| LANGUAGE | Text | 3 | Invisible | 2.2 |
| BLOCKTYPE | Text | 50 | List_singlesel, Required | 2.2 |
| OPTIONS | Text | 500 | List_multisel | 2.2 |
| REPORTING_TITLE | Text | 100 | Singleline, Required | 2.2 |
| GA_TAG | Text | 50 | Singleline | 2.2 |
| MEDIA | Text | 1000 | Image | 3.0.0 |
| MEDIA_ALT_TEXT | Text | 350 | SingleLine | 3.0.0 |
| MEDIA_CSS | Text | 350 | List_singlesel| 3.0.0 |
| MEDIA_MAX_WIDTH | Text | 350 | Singleline | 3.0.0 |
| TITLE | Text | 350 | Singleline | 2.2 |
| TITLE_COLOR | Text | 100 | List_singlesel | 2.2 |
| TITLE_CSS | Text | 100 | List_singlesel | 2.2 |
| SUBTITLE | Text | 350 | Singleline | 2.2 |
| SUBTITLE_COLOR | Text | 100 | List_singlesel | 2.2 |
| SUBTITLE_CSS | Text | 100 | List_singlesel | 2.2 |
| CONTENT | Long Text | | Html | 2.2 |
| CONTENT_COLOR | Text | 100 | List_singlesel | 2.2 |
| CONTENT_CSS | Text | | List_singlesel | 2.7.8 |
| LINK | Text | 350 | Hyperlink | 2.2 |
| LINK_TEXT | Text | 350 | Singleline | 2.2 |
| BUTTON_PRESET | Text | 1000 | List_singlesel | 3.0 |
| BUTTON_POSITION | Text | 50 | List_singlesel | 3.0 |
| ARTICLE_HEIGHT | Text | 255 | Singleline | 2.8.1.9 |
| BACKGROUND_COLOR | Text | 7 | List_singlesel | 2.2 |
| BORDER_COLOR | Text | 7 | List_singlesel | 2.2 |
| ADVERTORIAL_TEXT | Text | 350 | Singleline | 2.2 |
| DIVIDER_COLOR | Text | 7 | List_singlesel | 2.2 |
| SLIDER_OPTIONS | Text | 255 | List_multisel | 2.8.1.3 |

#### **BLOCKTYPE**
---------------

| Key | Value | Default | Template version |
| --- | --- | --- | --- |
| FULLWIDTH | Full Width | x | 2.2 |
| HALFWIDTH | Half Width | | 2.2 |
| THIRDWIDTH | Third Width | | 2.2 |
| QUARTERWIDTH | Quarter Width | | 2.2 |
| HALFWIDTH_ONETHIRD | Half Width 1/3 | | 2.2 |
| HALFWIDTH_TWOTHIRD | Half Width 2/3 | | 2.2 |
| HALFWIDTH_ONESIXTH | Half Width 1/6 | | 2.2 |
| HALFWIDTH_FIVESIXTH | Half Width 5/6 | | 2.2 |


#### **OPTIONS**
---------------

| Key | Value | Default | Template version |
| --- | --- | --- | --- |
| DESKTOP_RIGHT | Reorder blocks in this row 'right to left' | | 2.2 |
| MOBILE_HIDE | Hide on mobile | | 2.2 |
| MOBILE_FULLWIDTH|  Mobile fullwidth | | 2.2 |
| ADD_MEDIA_PADDING_TOP | Add extra padding above media | | 3.0.0 |
| ADD_MEDIA_PADDING_RIGHT | Add extra padding right of media | | 3.0.0 |
| ADD_MEDIA_PADDING_BOTTOM | Add extra padding below media | | 3.0.0 |
| ADD_MEDIA_PADDING_LEFT | Add extra padding left of media | | 3.0.0 |
| NO_MARGIN_TOP | Remove top article margin | 3.0.0 |
| NO_MARGIN_RIGHT | Remove right article margin | 3.0.0 |
| NO_MARGIN_BOTTOM | Remove bottom article margin | 3.0.0 |
| NO_MARGIN_LEFT | Remove left article margin | 3.0.0 |
| NO_PADDING | remove article padding | 3.0.0 |
| NO_PADDING_BOTTOM | remove only bottom article padding | 3.0.0 |
| SHOW_DIVIDER | Show divider line after block | | 2.8.1.8 |
| CENTER_TITLE | Center the title within the block | | 2.7.8.4 |
| CENTER_SUBTITLE | Center the subtitle within the block | | 2.7.8.4 |
| CENTER_CONTENT | Center the content within the block | | 2.7.8.4 |
| CENTER_MEDIA | Center the media within the block | | 3.0.0 |

The options are saved with "|" in the database. If a key is defined, then it's checked in SIM.
For example the value of OPTIONS could be "SHOW_DIVIDER|ADD_MEDIA_PADDING_TOP".


#### **TITLE_COLOR**
---------------

| Key | Value | Default | Template version |
| --- | --- | --- | --- |
| FFFFFF | WHITE | | 2.2 |
| 000001 | BLACK | x | 2.2 |


#### **TITLE_CSS**
---------------

| Key | Value | Default | Template version |
| --- | --- | --- | --- |


#### **SUBTITLE_COLOR**
---------------

| Key | Value | Default | Template version |
| --- | --- | --- | --- |
| FFFFFF | WHITE | | 2.2 |
| 000001 | BLACK | x | 2.2 |


#### **SUBTITLE_CSS**
---------------

| Key | Value | Default | Template version |
| --- | --- | --- | --- |


#### **CONTENT_COLOR**
---------------

| Key | Value | Default | Temkplate version |
| --- | --- | --- | --- |
| FFFFFF | WHITE | | 2.2 |
| 000001 | BLACK | x | 2.2 |


#### **BUTTON_POSITION**
---------------

| Key | Value | Default | Template version |
| --- | --- | --- | --- |
| FULLWIDTH | Fullwidth | x | 2.2 |
| LEFT | Left |  | 2.2 |
| CENTER | Centered |  | 2.2 |
| RIGHT | Right |  | 2.2 |


#### **BUTTON_PRESET**
---------------

example DEFAULT_BUTTON_PRESET
```
280px;38px;99c739;https://imgur.com/clZqdfM.gif;7ea613;3px;ffffff;13px;center;http://via.placeholder.com/16x16;16px;right;null;10px;null;10px;Arial,sans-serif
```

| CSV index | field | Default value | Template version |
| --- | --- | --- || --- |
| 1 | width | null | v3.0.0 |
| 2 | height | null | v3.0.0 |
| 3 | bg-color | null | v3.0.0 |
| 4 | bg-image | null | v3.0.0 |
| 5 | border-color | null | v3.0.0 |
| 6 | border-radius | null | v3.0.0 |
| 7 | font-color | null | v3.0.0 |
| 8 | font-size | null | v3.0.0 |
| 9 | text-postion | null | v3.0.0 |
| 10 | icon-image | null | v3.0.0 |
| 11 | icon-image-width | null | v3.0.0 |
| 12 | icon_position | null | v3.0.0 |
| 13 | padding-top | null | v3.0.0 |
| 14 | padding-right | null | v3.0.0 |
| 15 | padding-bottom | null | v3.0.0 |
| 16 | padding-left | null | v3.0.0 |
| 17 | font-family | null | v3.0.0 |

empty value must be 'null' in order to make this work

Note:
Use http://fa2png.io/ to create new icons. Make sure background is not
set and width is 128px.
Upload and change base path in template to use.

| Key | Value | Default | Template version |
| --- | --- | --- | --- |
| `~SYSTEM.MAILAGENT_DOMAIN~optiext/images/_fa/fa-chevron-right_128_0_000000_none.png` | Chevron Right Black | | 2.8 |
| `~SYSTEM.MAILAGENT_DOMAIN~optiext/images/_fa/fa-chevron-right_128_0_ffffff_none.png` | Chevron Right White | | 2.8 |
| `~SYSTEM.MAILAGENT_DOMAIN~optiext/images/_fa/font-awesome_4-7-0_play-circle_128_0_000000_none.png` | Play Circle Black | | 2.8 |
| `~SYSTEM.MAILAGENT_DOMAIN~optiext/images/_fa/font-awesome_4-7-0_play-circle_128_0_ffffff_none.png` | Play Circle White | | 2.8 |


#### **BUTTON_ICON_POSITION**
---------------

| Key | Value | Default | Template version |
| --- | --- | --- | --- |
| LEFT | Left | x | 2.2 |
| RIGHT | Right |  | 2.2 |

#### **BACKGROUND_COLOR**
---------------

| Key | Value | Default | Template version |
| --- | --- | --- | --- |
| ffffff | White | | 2.2 |


#### **BORDER_COLOR**
---------------

| Key | Value | Default | Template version |
| --- | --- | --- | --- |
| 000001 | Black | | 2.2 |
| ffffff | White | | 2.2 |


## Default sensors
---------------

| ID | Name | Type | Url | Template version |
| --- | --- | --- | --- | --- |
| 0 | Web Version | Blank | | 2.2 |
| 9 | List Unsubscribe | Flow | | 2.2 |
| 100 | Homepage | Url | `http://www.example.com` | 2.2 |
| 101 | Hyperlink | Url | `~ITEM.LINK_URL~` | 2.2 |

## Designer Content Parameters
---------------

| Parameter | Type | Default | Notes | Template version |
| --- | --- | --- | --- | --- |
| ARTICLES | CONTAINER | | Must contain 'MAIN' filter | 2.2 |
| BUTTON_PRESETS | CONTAINER | | Must contain 'MAIN' filter | 3.0.0 |
| DEFAULT_BUTTON_PRESET | TEXT | | | 3.0.0 |
| WEBVERSION_TEXT | TEXT | webversion | Webversion text | 2.2 |
| WEBVERSION_CSS | TEXT | | Webversion text css | 2.2 |
| CUSTOM_DIVIDER | TEXT | | A custom divider template to overwrite the default divider. | 2.2 |
| DIVIDER_COLOR | TEXT |  |  | 3.0.0 |
| CONTENT_BACKGROUND_COLOR | TEXT | | | 2.2 |
| BODY_BACKGROUND_IMAGE | TEXT |  |  | 3.0.0 |
| BODY_BACKGROUND_COLOR | TEXT |  |  | 3.0.0 |
| STYLES | TEXT |  | Styles for in the HTML/HEAD section  | 2.7.5 |


## Servicemail JSON structure
---------------

If you use an actionlist (for example the service mail), please use the servicemail.json for the right JSON structure. The JSON structure is an example, you don't have to use all the article fieldnames.

To verify your JSON you can use http://jsonlint.com/ to validate your JSON syntax.
To store the JSON in the database, the JSON needs to be flattend. You can use the JSON formatter (http://www.freeformatter.com/json-formatter.html#ad-output). Make sure you select select 'Compact (1 line)' at the Indentation level option.



### Styles
---------------

As of v2.7.8 the styles are no longer placed in a section. There is a component/container named "STYLES". This is where you put your styles. The container is now placed in the `<head>` section. This was done because prior v2.7.8 the base template was not repsonsive with Gmail.


## Recommended image dimensions
---------------

| Blocktype | Max width |
| --- | --- |
| FULLWIDTH | 580px |
| HALFWIDTH | 280px |
| THIRDWIDTH | 180px |
| QUARTERWIDTH | 130px |
| HALFWIDTH_ONETHIRD | 180px |
| HALFWIDTH_TWOTHIRD | 380px |
| HALFWIDTH_ONESIXTH | 80px |
| HALFWIDTH_FIVESIXTH | 480px |


## NodeJS
---------------

The build scripts are NodeJS scripts. To use the script you need to install NodeJS on your computer (https://nodejs.org/en/).
After you installed NodeJS, open your terminal and navigate to the build/ folder and install the modules :

`$ npm install`


### Build scripts

The build scripts are situated in the build/ folder.

* create_base_html.js

This will create a new base_template.html. To run the script:

`$ node create_base_html.js`


* create_servicemail_content.js

This will create the service mail variant content html. To run the script:

`$ node create_servicemail_content.js`


* create_servicemail_textversion.js

This will create the service mail textversion variant content html. To run the script:

`$ node create_servicemail_textversion.js`

A shortcut to run all the scripts :

`$ node create_base_html.js && node create_servicemail_content.js && node create_servicemail_textversion.js`


## JSON documentation
---------------

There is a WORD and PDF document about the JSON article structure. This can be used to pass to external developers who wants to send the articles via JSON.
You can find the documents in base_template_v2/documentation/
