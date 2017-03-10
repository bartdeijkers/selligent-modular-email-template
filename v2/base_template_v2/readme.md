# Base SIM template
Template version : v2.7
--------------------------

## Requirements
---------------

Make sure the new article container has name "ARTICLES"
and create a new filter "MAIN" with missing content protection on.

### create article table script
```SQL
CREATE TABLE [messagent].[ARTICLES_TITEL_NEWSLETTER](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[CREATED_DT] [datetime] NULL,
	[MODIFIED_DT] [datetime] NULL,
	[TAXONOMY] [nvarchar](200) NULL,
	[BLOCKTYPE] [nvarchar](50) NOT NULL,
  [OPTIONS] [nvarchar](500) NULL,
	[REPORTING_TITLE] [nvarchar](100) NOT NULL,
	[GA_TAG] [nvarchar](50) NULL,
	[IMAGE] [nvarchar](350) NULL,
	[IMAGE_ALT_TEXT] [nvarchar](350) NULL,
	[TITLE] [nvarchar](350) NULL,
	[TITLE_COLOR] [nvarchar](350) NULL,
	[TITLE_CSS] [nvarchar](350) NULL,
	[SUBTITLE] [nvarchar](350) NULL,
	[SUBTITLE_COLOR] [nvarchar](350) NULL,
	[SUBTITLE_CSS] [nvarchar](350) NULL,
	[CONTENT] [ntext] NULL,
	[CONTENT_COLOR] [nvarchar](350) NULL,
	[LINK_URL] [nvarchar](350) NULL,
	[LINK_TEXT] [nvarchar](350) NULL,
	[LINK_TEXT_FONTSIZE] [nvarchar](350) NULL,
  [LINK_COLOR] [nvarchar](7) NULL,
	[BUTTON_TYPE] [nvarchar](350) NULL,
	[BUTTON_POSITION] [nvarchar](350) NULL,
	[BUTTON_ICON] [nvarchar](350) NULL,
	[BUTTON_ICON_POSITION] [nvarchar](255) NULL,
	[BUTTON_OPTIONS] [nvarchar](350) NULL,
	[BUTTON_RADIUS_OUTLOOK] [nvarchar](350) NULL,
	[BUTTON_RADIUS_WEBVERSION] [nvarchar](350) NULL,
	[BUTTON_BACKGROUND_COLOR] [nvarchar](350) NULL,
	[BUTTON_PADDING] [nvarchar](350) NULL,
	[BUTTON_WEBVERSION_CSS] [nvarchar](350) NULL,
	[BUTTON_OUTLOOK_CSS] [nvarchar](350) NULL,
	[BACKGROUND_COLOR] [nvarchar](7) NULL,
	[BORDER_COLOR] [nvarchar](7) NULL,
	[ADVERTORIAL_TEXT] [nvarchar](7) NULL,
	[DIVIDER_COLOR] [nvarchar](7) NULL,
	[LINK_TEXT_ALIGN] [nvarchar](10) NULL,
	[LANGUAGE] [nvarchar](3) NULL
PRIMARY KEY CLUSTERED
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
```
#### Core article database columns

| Fieldname | Type | Length | SIM designer settings | Template version |
| --- | --- | --- | --- | --- |
| ID | Numeric | | Invisible | 2.2 |
| CREATED_DT | DateTime | | Invisible | 2.2 |
| MODIFIED_DT | DateTime | | Invisible | 2.2 |
| TAXONOMY | Text | 200 | Invisible | 2.2 |
| BLOCKTYPE | Text | 50 | List_singlesel, Required | 2.2 |
| OPTIONS | Text | 50 | List_multisel | 2.2 |
| REPORTING_TITLE | Text | 100 | Singleline, Required | 2.2 |
| GA_TAG | Text | 50 | Singleline | 2.2 |
| IMAGE | Text | 350 | Image | 2.2 |
| IMAGE_ALT_TEXT | Text | 350 | SingleLine | 2.6.2 |
| TITLE | Text | 350 | Singleline | 2.2 |
| TITLE_COLOR | Text | 100 | List_singlesel | 2.2 |
| TITLE_CSS | Text | 100 | List_singlesel | 2.2 |
| SUBTITLE | Text | 350 | Singleline | 2.2 |
| SUBTITLE_COLOR | Text | 100 | List_singlesel | 2.2 |
| SUBTITLE_CSS | Text | 100 | List_singlesel | 2.2 |
| CONTENT | Long Text | | Html | 2.2 |
| CONTENT_COLOR | Text | 100 | List_singlesel | 2.2 |
| CONTENT_CSS | Text | |  | 2.7.8 |
| LINK_URL | Text | 350 | Hyperlink | 2.2 |
| LINK_TEXT | Text | 350 | Singleline | 2.2 |
| LINK_TEXT_FONTSIZE | Text | 350 | Singleline | 2.6.4 |
| LINK_COLOR | Text | 255 | List_singlesel | 2.2 |
| BUTTON_TYPE | Text | 255 | List_singlesel | 2.2 |
| BUTTON_POSITION | Text | 255 | List_singlesel | 2.2 |
| BUTTON_ICON | Text | 255 | List_singlesel | 2.2 |
| BUTTON_ICON_POSITION | Text | 255 | List_singlesel | 2.2 |
| BUTTON_OPTIONS | Text | 255 | List_multisel | 2.2 |
| BUTTON_BACKGROUND_COLOR | Text | 255 | List_singlesel | 2.2 |
| BUTTON_RADIUS_OUTLOOK | Text | 255 | List_singlesel | 2.6 |
| BUTTON_RADIUS_WEBVERSION | Text | 255 | List_singlesel | 2.6 |
| BUTTON_PADDING | Text | 350 | Singleline | 2.6.4 |
| BUTTON_WEBVERSION_CSS | Text | 350 | Singleline | 2.6.4 |
| BUTTON_OUTLOOK_CSS | Text | 350 | Singleline | 2.6.4 |
| BACKGROUND_COLOR | Text | 7 | List_singlesel | 2.2 |
| BORDER_COLOR | Text | 7 | List_singlesel | 2.2 |
| ADVERTORIAL_TEXT | Text | 350 | Singleline | 2.2 |
| DIVIDER_COLOR | Text | 7 | List_singlesel | 2.2 |
| LANGUAGE | Text | 3 | Invisible | 2.2 |


#### **BLOCKTYPE**
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
| Key | Value | Default | Template version |
| --- | --- | --- | --- |
| HIDE_DIVIDER | Hide divider line after block | x | 2.2 |
| ADVERTORIAL | Advertorial notice above block | | 2.2 |
| NO_INNER_PADDING | No left/right padding on mobile | | 2.2 |
| MOBILE_FULLWIDTH | Stretch block to full width on mobile | | 2.2 |
| MOBILE_HIDE	Hide | block on mobile | | 2.2 |
| DESKTOP_RIGHT | Reorder blocks in this row 'right to left' | | 2.2 |
| CENTER_TITLE | Center the title within the block | | 2.2 |
| CENTER_SUBTITLE | Center the subtitle within the block | | 2.2 |
| CENTER_CONTENT | Center the content within the block | | 2.2 |
| TITLE_IMAGE | Place Title and subtitle above image | | 2.2 |
| NO_PADDING_BOTTOM | No Padding Bottom | | 2.6.1 |
| TITLE_TOP_PADDING | Add extra padding above title | | 2.6.4 |
| TITLE_BOTTOM_PADDING | Add extra padding below title | | 2.6.4 |
| SOCIAL_FB | Add FB icon | | 2.7.2 |
| SOCIAL_TWITTER | Add Twitter icon | | 2.7.2 |
| SOCIAL_INSTAGRAM | Add Instagram icon | | 2.7.2 |
| SOCIAL_YOUTUBE | Add Youtube icon | | 2.7.2 |
| SOCIAL_WHATSAPP | Add Whatsapp icon | | 2.7.2 |
| SOCIAL_GOOGLEPLUS | Add Google+ icon | | 2.7.2 |
| SOCIAL_MAIL | Add Mail icon | | 2.7.2 |
| SUBTITLE_TOP_PADDING | Add extra padding above subtitle | | 2.7.4 |
| ADD_PADDING_TOP | Add extra padding above container | | 2.7.4 |
| ADD_PADDING_BOTTOM_IMAGE | Add extra bottom padding image | x | 2.7.8 |
| FILL_PADDING_BACKGROUND_COLOR | Fill article paddings with selected background color |  | 2.7.8 |


#### **TITLE_COLOR**
| Key | Value | Default | Template version |
| --- | --- | --- | --- |
| FFFFFF | WHITE | | 2.2 |
| 000001 | BLACK | x | 2.2 |


#### **TITLE_CSS**
| Key | Value | Default | Template version |
| --- | --- | --- | --- |


#### **SUBTITLE_COLOR**
| Key | Value | Default | Template version |
| --- | --- | --- | --- |
| FFFFFF | WHITE | | 2.2 |
| 000001 | BLACK | x | 2.2 |


#### **SUBTITLE_CSS**
| Key | Value | Default | Template version |
| --- | --- | --- | --- |


#### **CONTENT_COLOR**
| Key | Value | Default | Temkplate version |
| --- | --- | --- | --- |
| FFFFFF | WHITE | | 2.2 |
| 000001 | BLACK | x | 2.2 |


#### **LINK_COLOR**
| Key | Value | Default | Template version |
| --- | --- | --- | --- |
| FFFFFF | WHITE | | 2.2 |
| 000001 | BLACK | x | 2.2 |

#### **LINK_TEXT_FONTSIZE**
| Key | Value | Default | Template version |
| --- | --- | --- | --- |
| 1 | 1px | | 2.6.4 |
| 2 | 2px | | 2.6.4 |
| 3 | 3px | | 2.6.4 |
| 4 | 4px | | 2.6.4 |
| 5 | 5px | | 2.6.4 |
| 6 | 6px | | 2.6.4 |
| 7 | 7px | | 2.6.4 |
| 8 | 8px | | 2.6.4 |
| 9 | 9px | | 2.6.4 |
| 10 | 10px | | 2.6.4 |
| 11 | 11px | | 2.6.4 |
| 12 | 12px | | 2.6.4 |
| 13 | 13px | | 2.6.4 |
| 14 | 14px | | 2.6.4 |
| 15 | 15px | | 2.6.4 |
| 16 | 16px | | 2.6.4 |
| 17 | 17px | | 2.6.4 |
| 18 | 18px | | 2.6.4 |
| 19 | 19px | | 2.6.4 |
| 20 | 20px | | 2.6.4 |
| 25 | 25px | | 2.6.4 |
| 30 | 30px | | 2.6.4 |



#### **BUTTON_TYPE**
| Key | Value | Default | Template version |
| --- | --- | --- | --- |
| NONE | No button | x | 2.2 |
| BLOCK | Blocked button |  | 2.2 |
| ROUNDED | Rounded button |  | 2.2 |


#### **BUTTON_POSITION**
| Key | Value | Default | Template version |
| --- | --- | --- | --- |
| FULLWIDTH | Fullwidth | x | 2.2 |
| LEFT | Left |  | 2.2 |
| CENTER | Centered |  | 2.2 |
| RIGHT | Right |  | 2.2 |


#### **BUTTON_ICON**
Note:
Use http://fa2png.io/ to create new icons. Make sure background is not
set and width is 128px.
Upload and change base path in template to use.

| Key | Value | Default | Template version |
| --- | --- | --- | --- |
| fa-play-circle | Play Circle | | 2.2 |
| fa-chevron-right | Chevron Right | | 2.2 |
| fa-caret-right | Caret Right | | 2.2 |
| fa-facebook | Facebook | | 2.2 |
| fa-twitter | Twitter | | 2.2 |
| fa-instagram | Instagram | | 2.2 |
| fa-pinterest | Pinterest | | 2.2 |
| fa-google-plus | Google Plus | | 2.2 |
| fa-whatsapp | Whatsapp | | 2.2 |
| fa-youtube | youtube | | 2.2 |


#### **BUTTON_ICON_POSITION**
| Key | Value | Default | Template version |
| --- | --- | --- | --- |
| LEFT | Left | x | 2.2 |
| RIGHT | Right |  | 2.2 |


#### **BUTTON_OPTIONS**
| Key | Value | Default | Template version |
| --- | --- | --- | --- |
| BUTTONS_PADDING | Add extra padding left and right | | 2.2 |


#### **BUTTON_BACKGROUND_COLOR**
| Key | Value | Default | Template version |
| --- | --- | --- | --- |
| FFFFFF | WHITE | | 2.2 |
| 000001 | BLACK | x | 2.2 |


#### **BACKGROUND_COLOR**
| Key | Value | Default | Template version |
| --- | --- | --- | --- |
| ffffff | White | | 2.2 |


#### **BUTTON_RADIUS_OUTLOOK**
| Key | Value | Default | Template version |
| --- | --- | --- | --- |
| 50 | 50% | x | 2.6 |


#### **BUTTON_RADIUS_WEBVERSION**
| Key | Value | Default | Template version |
| --- | --- | --- | --- |
| 20 | 20px | x | 2.6 |


#### **BUTTON_PADDING**
| Key | Value | Default | Template version |
| --- | --- | --- | --- |
| 1 | 1px | | 2.6.4 |
| 2 | 2px | | 2.6.4 |
| 3 | 3px | | 2.6.4 |
| 4 | 4px | | 2.6.4 |
| 5 | 5px | | 2.6.4 |
| 6 | 6px | | 2.6.4 |
| 7 | 7px | | 2.6.4 |
| 8 | 8px | | 2.6.4 |
| 9 | 9px | | 2.6.4 |
| 10 | 10px | | 2.6.4 |
| 11 | 11px | | 2.6.4 |
| 12 | 12px | | 2.6.4 |
| 13 | 13px | | 2.6.4 |
| 14 | 14px | | 2.6.4 |
| 15 | 15px | | 2.6.4 |
| 16 | 16px | | 2.6.4 |
| 17 | 17px | | 2.6.4 |
| 18 | 18px | | 2.6.4 |
| 19 | 19px | | 2.6.4 |
| 20 | 20px | | 2.6.4 |
| 25 | 25px | | 2.6.4 |
| 30 | 30px | | 2.6.4 |


#### **BUTTON_WEBVERSION_CSS**
| Key | Value | Default | Template version |
| --- | --- | --- | --- |


#### **BUTTON_OUTLOOK_CSS**
| Key | Value | Default | Template version |
| --- | --- | --- | --- |


#### **BORDER_COLOR**
| Key | Value | Default | Template version |
| --- | --- | --- | --- |
| 000001 | Black | | 2.2 |
| ffffff | White | | 2.2 |


#### **DIVIDER_COLOR**
| Key | Value | Default | Template version |
| --- | --- | --- | --- |
| 000001 | Black | x | 2.2 |
| ffffff | White | | 2.2 |


### Default sensors

| ID | Name | Type | Url | Template version |
| --- | --- | --- | --- | --- |
| 0 | Web Version | Blank | | 2.2 |
| 9 | List Unsubscribe | Flow | | 2.2 |
| 100 | Homepage | Url | http://www.my.site/ | 2.2 |
| 101 | Hyperlink | Url | ~ITEM.LINK_URL~ | 2.2 |
| 102 | Privacy and Cookies | Url | http://www.my.site/ | 2.2 |
| 103 | Unsubscribe | Flow | | 2.2 |
| 104 | Contact | Url | http://www.my.site/ | 2.2 |
| 105 | Advertise | Url | http://www.my.site/ | 2.2 |
| 106 | Data privacy policy | Url | http://www.my.site/ | 2.2 |
| 107 | Brand title url | Url | ~DYNCONTENT.BRAND_TITLE_URL~ | 2.2 |
| 300 | Logo url | Url | ~DYNCONTENT.LOGO_URL~ | 2.2 |
| 301 | Social 1 - Facebook | Url | https://www.facebook.com/ | 2.2 |
| 302 | Social 2 - Twitter | Url | https://twitter.com/ | 2.2 |
| 303 | Social 3 - Instagram | Url | https://www.instagram.com/ | 2.2 |
| 304 | Social 4 - Pinterest | Url | http://www.pinterest.com/ | 2.2 |
| 305 | Social 5 - Google Plus | Url | http://plus.google.com/ | 2.3.4 |
| 306 | Social 6 | Url | http://www.my.site/ | 2.5 |
| 307 | Social 7 | Url | http://www.my.site/ | 2.5 |
| 308 | Social 8 | Url | http://www.my.site/ | 2.5 |
| 309 | Social 9 | Url | http://www.my.site/ | 2.5 |
| 310 | Social 10 | Url | http://www.my.site/ | 2.5 |
| 400 | Close Alert Like | Url | ~DYNCONTENT.CLOSE_ALERT_URL~positive?campaign=~SYSTEM.CAMPAIGNNAME~&amp;email=~mail~&amp;mail_url=~probe(0)~ | 2.6.4.1 |
| 401 | Close Alert Dislike | Url | ~DYNCONTENT.CLOSE_ALERT_URL~negative?campaign=~SYSTEM.CAMPAIGNNAME~&amp;email=~mail~&amp;mail_url=~probe(0)~ | 2.6.4.1 |
| 600 | FB Share | Url | http://www.facebook.com/sharer.php?u=~(URLENCODE(ITEM.LINK_URL))~ | 2.7.2 |
| 601 | Twitter Share | Url | http://twitter.com/intent/tweet?text=~(URLENCODE(ITEM.TITLE))~%20~(URLENCODE(ITEM.LINK_URL))~ | 2.7.2 |
| 602 | Instagram Share | Url | http://www.instagram.com | 2.7.2 |
| 603 | YouTube Share | Url | http://www.youtube.com | 2.7.2 |
| 604 | Pinterest Share | Url | http://www.pinterest.com | 2.7.2 |
| 605 | Whatsapp Share | Url | whatsapp://send?text=~ITEM.LINK_URL~ | 2.7.2 |
| 606 | Google+ Share | Url | https://plus.google.com | 2.7.2 |
| 607 | Mail Share | Url | mailto:?subject=~ITEM.TITLE~&body=~ITEM.TITLE~ ~ITEM.LINK_URL~ | 2.7.2 |
| 1000 | Optin renewal | Flow |  | 2.7.7 |


### Designer Content Parameters

| Parameter | Type | Default | Notes | Template version |
| --- | --- | --- | --- | --- |
| PREHEADER | TEXT | | DEPRECATED | 2.2 |
| ARTICLES | CONTAINER | | Must contain 'MAIN' filter | 2.2 |
| HEADER | Html | | DEPRECATED? | 2.2 |
| CONTENT_BACKGROUND_COLOR | TEXT | | | 2.2 |
| BRAND_TITLE | TEXT | my.site | Footer brand title | 2.2 |
| BRAND_TITLE_URL | TEXT | http://www.my.site/ | Footer brand title url | 2.2 |
| BRAND_TITLE_CSS | TEXT | | Footer brand css | 2.2 |
| COMPANY_TEXT | TEXT | My B.V. | | 2.2 |
| PART_OF_TEXT | TEXT | onderdeel van My Group | | 2.2 |
| UNSUBSCRIBE_TEXT | TEXT | Unsubscribe | Unsubscribe text | 2.2 |
| UNSUBSCRIBE_TEXT_CSS | TEXT | | Unsubscribe text css | 2.2 |
| WEBVERSION_TEXT | TEXT | webversion | Webversion text | 2.2 |
| WEBVERSION_CSS | TEXT | | Webversion text css | 2.2 |
| HEADER_WRAPPER_BACKGROUND_COLOR | TEXT | | Header wrapper background color | 2.2 |
| HEADER_BACKGROUND_COLOR | TEXT | | Header background color | 2.2 |
| FOOTER_WRAPPER_BACKGROUND_COLOR | TEXT | | Footer wrapper background color | 2.2 |
| FOOTER_BACKGROUND_COLOR | TEXT | | Footer background color | 2.2 |
| LOGO | TEXT | https://placeholdit.imgix.net/~text?w=580&h=128 | max width 580px | 2.2 |
| LOGO_URL | TEXT | http://www.my.site/ | | 2.2 |
| LOGO_MAX_WIDTH | TEXT | 580 | Max width for the logo to be responsive | 2.4 |
| FOOTER_TEXT_CSS | TEXT | | | 2.2 |
| FOOTER_TEXT | TEXT | | | 2.2 |
| FOOTER_MENU_CSS | TEXT | | | 2.2 |
| FOOTER_COPYRIGHT_CSS | TEXT | | | 2.2 |
| FOOTER_TEXT_TRAILER | TEXT | | | 2.2 |
| CONTENT_WRAPPER_BACKGROUND_COLOR | TEXT | | | 2.2 |
| CUSTOM_DIVIDER | TEXT | | A custom divider template to overwrite the default divider. | 2.2 |
| CUSTOM_FOOTER | TEXT | | Option to place a custom footer template. This will be added to the current footer. | 2.2 |
| FOOTER_URL_TEXT_1 | TEXT | | Footer text link 1 text. If empty, the link is not visible | 2.2 |
| FOOTER_URL_TEXT_2 | TEXT | | Footer text link 2 text. If empty, the link is not visible | 2.2 |
| FOOTER_URL_TEXT_3 | TEXT | | Footer text link 3 text. If empty, the link is not visible | 2.2 |
| FOOTER_URL_TEXT_4 | TEXT | | Footer text link 4 text. If empty, the link is not visible | 2.2 |
| FOOTER_URL_TEXT_5 | TEXT | | Footer text link 5 text. If empty, the link is not visible | 2.2 |
| ADVERTORIAL_BACKGROUND_COLOR | TEXT | eeeeee | Advertorial background color | 2.3 |
| ADVERTORIAL_TEXT_CSS | TEXT |  |  | 2.7.3 |
| ADVERTORIAL_CSS | TEXT |  |  | 2.7.8 |
| SOCIAL_1 | TEXT | <img border="0" src="https://placeholdit.imgix.net/~text?w=128&h=128"  width="32" style="display:block;width:32px;max-width:128px;"> | Social icon 1 | 2.5 |
| SOCIAL_2 | TEXT | <img border="0" src="https://placeholdit.imgix.net/~text?w=128&h=128"  width="32" style="display:block;width:32px;max-width:128px;"> | Social icon 2 | 2.5 |
| SOCIAL_3 | TEXT | <img border="0" src="https://placeholdit.imgix.net/~text?w=128&h=128"  width="32" style="display:block;width:32px;max-width:128px;"> | Social icon 3 | 2.5 |
| SOCIAL_4 | TEXT | <img border="0" src="https://placeholdit.imgix.net/~text?w=128&h=128"  width="32" style="display:block;width:32px;max-width:128px;"> | Social icon 4 | 2.5 |
| SOCIAL_5 | TEXT | <img border="0" src="https://placeholdit.imgix.net/~text?w=128&h=128"  width="32" style="display:block;width:32px;max-width:128px;"> | Social icon 5 | 2.5 |
| SOCIAL_6 | TEXT |  | Social icon 6 | 2.5 |
| SOCIAL_7 | TEXT |  | Social icon 7 | 2.5 |
| SOCIAL_8 | TEXT |  | Social icon 8 | 2.5 |
| SOCIAL_9 | TEXT |  | Social icon 9 | 2.5 |
| SOCIAL_10 | TEXT |  | Social icon 10 | 2.5 |
| BACKGROUND_IMAGE | TEXT |  |  | 2.6.3 |
| CLOSE_ALERT_TEXT | TEXT | Wat vind jij van deze email? |  | 2.6.4.1 |
| CLOSE_ALERT_URL | TEXT |  |  | 2.6.4.1 |
| LOGO_ALIGN | TEXT |  | center | 2.6.4.2 |
| CLOSE_ALERT_TEXT_COLOR | TEXT |  |  | 2.7.1 |
| CLOSE_ALERT_TEXT_CSS | TEXT |  |  | 2.7.1 |
| CLOSE_ALERT_CSS | TEXT |  |  | 2.7.1 |
| WRAPPER_CSS | TEXT |  |  | 2.7.1 |
| WRAPPER_BACKGROUND_COLOR | TEXT |  |  | 2.7.1 |
| SHARE_FB_ICON | TEXT |  |  | 2.7.2 |
| SHARE_TWITTER_ICON | TEXT |  |  | 2.7.2 |
| SHARE_INSTAGRAM_ICON | TEXT |  |  | 2.7.2 |
| SHARE_YOUTUBE_ICON | TEXT |  |  | 2.7.2 |
| SHARE_PINTEREST_ICON | TEXT |  |  | 2.7.2 |
| SHARE_WHATSAPP_ICON | TEXT |  |  | 2.7.2 |
| SHARE_GOOGLEPLUS_ICON | TEXT |  |  | 2.7.2 |
| SHARE_MAIL_ICON | TEXT |  |  | 2.7.2 |
| STYLES | TEXT |  | Styles for in the HTML/HEAD section  | 2.7.5 |
| USER_CUSTOM_DATA_BACKGROUND_COLOR | TEXT |  |  | 2.7.8 |


### SIM Articles XML
If you want to import the article structure. You can use the ARTICLES_BRANDNAME_NEWSLETTER.xml for the structure.


### Servicemail JSON structure
If you use an actionlist (for example the service mail), please use the servicemail.json for the right JSON structure. The JSON structure is an example, you don't have to use all the article fieldnames.


### Wrappers / content background colors
Basicly there are 3 sections :

- header
- content
- footer

Each section is divided in 2 sections: wrapper and content. The wrapper is the 100% fullwidth container. The content is the centered container (wich holds the real content). So to set the background color, you can us the following sections.

HEADER_WRAPPER_BACKGROUND_COLOR
|- HEADER_BACKGROUND_COLOR

CONTENT_WRAPPER_BACKGROUND_COLOR
|- CONTENT_BACKGROUND_COLOR

FOOTER_WRAPPER_BACKGROUND_COLOR
|- FOOTER_BACKGROUND_COLOR


### Background image and backup colors
As of v2.6.3 you can add a background image (container BACKGROUND_IMAGE). Some emailclients (like Outlook) blocks the images. To create a backup color you need to define the color in container WRAPPER_BACKGROUND_COLOR (v2.7.1). Note that HEADER_WRAPPER_BACKGROUND_COLOR, CONTENT_WRAPPER_BACKGROUND_COLOR and FOOTER_WRAPPER_BACKGROUND_COLOR are placed on top of the wrapper wich holds the background image, so any background color defined in those containers will "overrule" the BACKGROUND_IMAGE and WRAPPER_BACKGROUND_COLOR.

### Logo
You can use container LOGO to add a logo in the header. This is just an url. The logo container is default responsive max width 580px. So for example, when you have a logo wich is greater than 580px, the template will rescale it back to max 580px. Also when you have a logo wich is not greater than 580px, the template will rescale the logo also to max 580px. This means when you have a logo with a width of 100px, the logo will be rescaled to 580px (so the logo will be visually bigger). To counter this problem you can use LOGO_MAX_WIDTH (wich is default 580). You can set the max width for the logo to be responsive. So when you have a logo wich has a width of for example 100px, set the LOGO_MAX_WIDTH to 100.

Also the logo is default centered aligned. use LOGO_ALIGN to override the alignment (left/center/right).


### Button radius
So you can set a radius on the buttons to make the buttons round. There are two options :

- BUTTON_RADIUS_OUTLOOK
The radius to render in Outlook. The values are in %

- BUTTON_RADIUS_WEBVERSION
Other email clients radius. the values are in px


### Close Alert
As of v2.7 there is an option to activiate the close alert. In order to reveal the close alert in the template you must have the following set :

- CLOSE_ALERT_URL
The url is the BASE landing url on close alert. So a typical close alert would be (for example) :

http://feedback.closealert.com/campaigns/my-campaign/positive?campaign=
or
http://feedback.closealert.com/campaigns/my-campaign/negative?campaign=

The container CLOSE_ALERT_URL needs to have a base url : http://feedback.closealert.com/campaigns/my-campaign/

- CLOSE_ALERT_TEXT
This is the question you would like to ask.


### Recommended image dimensions

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
