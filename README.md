# selligent-modular-email-template
Template version : v3.0.1
--------------------------

## What's new?
---------------

Note: this v3.0 is a complete revision and lacks some functionality compared 
      to v2. However, it is more stable and compatible with SIM v6.3.4+.

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
Resources > ARTICLES_NEWSLETTER.xml
```

* ARTICLES_BUTTON_PRESETS

use the 'Import Structure' button under tab 'Design' within the 
Campaign 'lists' section using the following file:
```
Resources > ARTICLES_BUTTON_PRESETS.xml
```

#### **BLOCKTYPE**
---------------

The BLOCKTYPE Article field requires a single selection list:

| Key | Value | Default |
| --- | --- | --- |
| FULLWIDTH | Full Width | x |
| HALFWIDTH | Half Width | |
| THIRDWIDTH | Third Width | |
| QUARTERWIDTH | Quarter Width | |
| HALFWIDTH_ONETHIRD | Half Width 1/3 | |
| HALFWIDTH_TWOTHIRD | Half Width 2/3 | |
| HALFWIDTH_ONESIXTH | Half Width 1/6 | |
| HALFWIDTH_FIVESIXTH | Half Width 5/6 | |


#### **OPTIONS**
---------------

The OPTIONS Article field requires a multi selection list:


| Key | Value | Default |
| --- | --- | --- |
| MOBILE_FULLWIDTH | Mobile fullwidth | |
| ADD_PADDING_TOP | Add top article padding | |
| ADD_PADDING_RIGHT | Add right article padding | |
| ADD_PADDING_BOTTOM | Add bottom article padding | |
| ADD_PADDING_LEFT | Add left article padding left | |
| NO_MARGIN_TOP | Remove top article margin | |
| NO_MARGIN_RIGHT | Remove right article margin | |
| NO_MARGIN_BOTTOM | Remove bottom article margin | |
| NO_MARGIN_LEFT | Remove left article margin | |
| SHOW_DIVIDER | Show divider line after block | |
| CENTER_TITLE | Center the title within the block | |
| CENTER_SUBTITLE | Center the subtitle within the block | |
| CENTER_CONTENT | Center the content within the block | |
| CENTER_MEDIA | Center the media within the block | |
| DESKTOP_RIGHT | Reorder blocks in this row 'right to left' | |
| TITLE_LINE | Short line above Title | |
| DESKTOP_FULLWIDTH | stretch fullwidth article on desktop | |
| MOBILE_NO_MARGIN | remove margins on mobile | |
| DESKTOP_ONLY | Show only on Desktop | |
| MOBILE_ONLY | Show only on mobile | |


The options are saved with "|" in the database. If a key is defined, then it's checked in SIM.
For example the value of OPTIONS could be "SHOW_DIVIDER|ADD_MEDIA_PADDING_TOP".


#### **TITLE_COLOR**
---------------

The TITLE_COLOR Article field requires a single selection list:

| Key | Value | Default |
| --- | --- | --- |
| FFFFFF | WHITE | |
| 000001 | BLACK | x |

#### **SUBTITLE_COLOR**
---------------

The TITLE_COLOR Article field requires a single selection list:

| Key | Value | Default |
| --- | --- | --- |
| FFFFFF | WHITE | |
| 000001 | BLACK | x |

#### **CONTENT_COLOR**
---------------

| Key | Value | Default |
| --- | --- | --- |
| FFFFFF | WHITE | |
| 000001 | BLACK | x |


#### **BUTTON_POSITION**
---------------

| Key | Value | Default | Template version |
| --- | --- | --- | --- |
| FULLWIDTH | Fullwidth | x |
| LEFT | Left |  |
| CENTER | Centered |  |
| RIGHT | Right |  |


#### **BUTTON_PRESET**
---------------

example DEFAULT_BUTTON_PRESET
```
200px|26px|#ffffff|null|#000000|13px|#000000|13px|center|null|16px|right|null|13px|null|13px|sans-serif|font-weight:bold;
```

| CSV index | field | Default value | Template version |
| --- | --- | --- | --- |
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
| 18 | font-css | null | v3.0.1 |

An empty value must be 'null' in order to make this work

Note:
Use http://fa2png.io/ to create new icons.

## Default sensors
---------------

| ID | Name | Type | Url | Template version |
| --- | --- | --- | --- | --- |
| 0 | Web Version | Blank | |
| 9 | List Unsubscribe | Flow | |
| 100 | Homepage | Url | `http://www.example.com` |
| 101 | Hyperlink | Url | `~ITEM.LINK~` |

## Designer Content Parameters
---------------

Create the ARTICLES and BUTTON_PRESETS article containers first.

afterwards the 'Parameters from template' option is available under the components right click menu. use the 'import' button to load the following file:

```
Resources > COMPONENTS.xml

```
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