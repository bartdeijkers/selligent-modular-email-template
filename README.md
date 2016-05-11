# selligent-modular-email-template
A modular email template for Selligent Interactive Marketing. Optimized for SIM Express (v5) and SIM Campaign (v6) 

## Setup

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
	[TITLE] [nvarchar](350) NULL,
	[SUBTITLE] [nvarchar](350) NULL,
	[CONTENT] [ntext] NULL,
	[LINKURL] [nvarchar](350) NULL,
	[LINKTEXT] [nvarchar](350) NULL,
	[LINKTEXT_ICON] [nvarchar](100) NULL,
	[LINKTEXT_ICON_RIGHT] [int] NULL,
    [LINKTEXT_TEXT_COLOR] [nvarchar](7) NULL,
    [LINKTEXT_BACKGROUND_COLOR] [nvarchar](7) NULL,
	[TEXT_COLOR] [nvarchar](7) NULL,
	[BACKGROUND_COLOR] [nvarchar](7) NULL,
	[BORDER_COLOR] [nvarchar](7) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
```
#### Core article database columns

| Fieldname | Type | Length | SIM designer settings |
| --- | --- | --- | --- |
|ID | Numeric | | Invisible |
| CREATED_DT | DateTime | | Invisible |
| MODIFIED_DT | DateTime | | Invisible |
| TAXONOMY | Text | 200 | Invisible |
| BLOCKTYPE | Text | 50 | List_singlesel, Required |
| OPTIONS | Text | 50 | List_multisel |
| REPORTING_TITLE | Text | 100 | Singleline, Required |
| GA_TAG | Text | 50 | Singleline |
| IMAGE | Text | 350 | Image |
| TITLE | Text | 350 | Singleline |
| SUBTITLE | Text | 350 | Singleline |
| CONTENT | Long Text | | Html |
| LINKURL | Text | 350 | Hyperlink |
| LINKTEXT | Text | 350 | Singleline |
| LINKTEXT_ICON | Text | 100 | List_singlesel |
| LINKTEXT_ICON_RIGHT | Numeric | | Checkbox |
| LINKTEXT_BACKGROUND_COLOR | Text | 7 | List_singlesel |
| LINKTEXT_TEXT_COLOR | Text | 7 | List_singlesel |
| TEXT_COLOR | Text | 7 | List_singlesel |
| BACKGROUND_COLOR | Text | 7 | List_singlesel |
| BORDER_COLOR | Text | 7 | List_singlesel |

* **BLOCKTYPE**

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

* **OPTIONS**

| Key | Value | Default |
| --- | --- | --- |
| HIDE_DIVIDER | Hide divider line after block | |
| ADVERTORIAL | Advertorial notice above block | |
| NO_INNER_PADDING | No left/right padding on mobile | |
| MOBILE_FULLWIDTH | Stretch block to full width on mobile | |
| MOBILE_HIDE	Hide | block on mobile | |
| DESKTOP_RIGHT | Reorder blocks in this row 'right to left' | |
| CENTER_TITLE | Center the title within the block | |
| CENTER_SUBTITLE | Center the subtitle within the block | |
| CENTER_CONTENT | Center the content within the block | |

* **LINKTEXT_ICON**

Note:
Use http://fa2png.io/ to create new icons. Make sure background is not 
set and width is 128px.
Upload and change base path in template to use.

| Key | Value | Default |
| --- | --- | --- |
| fa-play-circle | Play Circle | |
| fa-chevron-right | Chevron Right | |
| fa-caret-right | Caret Right | |
| fa-facebook | Facebook | |
| fa-twitter | Twitter | |
| fa-instagram | Instagram | |
| fa-pinterest | Pinterest | |
| fa-google-plus | Google Plus | |
| fa-whatsapp | Whatsapp | |
| fa-youtube | youtube | |

* **LINKTEXT_ICON_RIGHT**

Field Alias:
Button icon on the right side

* **LINKTEXT_TEXT_COLOR**

| Key | Value | Default |
| --- | --- | --- |
| 000001 | Black | |
| ffffff | White | |

* **LINKTEXT_BACKGROUND_COLOR** 

| Key | Value | Default |
| --- | --- | --- |
| ffffff | White | |

* **TEXT_COLOR**

| Key | Value | Default |
| --- | --- | --- |
| 000001 | Black | |
| ffffff | White | |

* **BACKGROUND_COLOR** 

| Key | Value | Default |
| --- | --- | --- |
| ffffff | White | |

* **BORDER_COLOR** 

| Key | Value | Default |
| --- | --- | --- |
| 000001 | Black | |
| ffffff | White | |

### Default sensors

| ID | Name | Type | Url |
| --- | --- | --- | --- |
| 0 | Web Version | Blank | |
| 9 | List Unsubscribe | Flow | |
| 100 | Homepage | Url | |
| 101 | Hyperlink | Url | ~ITEM.LINKURL~ |
| 102 | Privacy and Cookies | Url | |
| 103 | Unsubscribe | Flow | |
| 104 | Contact | Url | |
| 105 | Advertise | Url | |
| 301 | Social - Facebook | Url | |
| 302 | Social - Twitter | Url | |
| 303 | Social - Instagram | Url | |

### Designer Content Parameters

| Parameter | Type | Default | Notes |
| --- | --- | --- | --- |
| PREHEADER | TEXT | | |
| ARTICLES | CONTAINER | | Must contain 'MAIN' filter |
| LOGO | Image | | default width: 300px |
| HEADER | Html | | |
| FOOTER | Html | | |
