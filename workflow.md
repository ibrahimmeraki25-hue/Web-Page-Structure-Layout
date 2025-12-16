WORKFLOW NOTES
================

Component 1: CARD
-----------------
1. Analysis
- Main container: `.card` wrapping the entire card.
- Child elements: image placeholder, title, supporting text, tag chips, primary and secondary buttons.
- Content: title text, body text, button labels.
- Layout: vertical stacking, spacing between sections, alignment of buttons in a row.
- Decoration: background color, border radius, drop shadow, hover states, tag chip colors.

2. Planning
- HTML elements: use `section.card-component` as a semantic region; inside use `article.card` for the card itself.
- Groupings: header group (`.card-media` for the image), body group (`.card-body` for title + text), footer group (`.card-footer` for tags and actions).
- Layout method: Flexbox inside the footer to arrange buttons and tags; normal block flow for vertical stacking in the card.

3. Chunking
- Parent container: `.card-component` (component wrapper) and `.card` (visual card box).
- Sub-sections: `.card-media`, `.card-body`, `.card-footer`.
- Reusable blocks: `.badge` for small label chips, `.btn` for buttons.

4. Prompting (Code Writing)
- Use semantic HTML: `section` with `h2` for the component heading, `article` for the card.
- Add meaningful class names like `.card-title`, `.card-text`, `.card-actions`.
- Style with clean CSS using Flexbox for footer alignment, padding for spacing, and consistent typography.

5. Iterating
- After first version, increased card padding and line-height for better readability.
- Adjusted button spacing and used a shared `.btn` class for consistency.
- Tweaked shadow and border radius to make the card feel more polished and professional.


Component 2: SIDEBAR
--------------------
1. Analysis
- Main container: `aside.sidebar` containing navigation and info.
- Child elements: logo/title, navigation list with links, section heading, small summary text, and a call-to-action button.
- Content: app name, nav labels, descriptive text.
- Layout: vertical stack of logo, nav, info block, and button.
- Decoration: background color panel, divider lines, hover states for links.

2. Planning
- HTML elements: use `aside` for semantic sidebar, `nav` for navigation, `ul`/`li` for menu items, and `a` for links.
- Groupings: `.sidebar-header` for title, `.sidebar-nav` for the main menu, `.sidebar-footer` for help text and action button.
- Layout method: Flexbox column layout for the sidebar; spacing via `gap` and margins.

3. Chunking
- Parent container: `.sidebar-component` wrapping `aside.sidebar`.
- Sub-sections: `.sidebar-header`, `.sidebar-nav`, `.sidebar-footer`.
- Reusable blocks: `.nav-link` style applied to all sidebar links.

4. Prompting (Code Writing)
- Use headings (`h2`, `h3`) to label the sidebar and navigation section.
- Use clear class names like `.sidebar-title`, `.sidebar-menu`, `.nav-link`.
- Style with Flexbox to push footer to the bottom and maintain even spacing.

5. Iterating
- Improved vertical rhythm by using `gap` instead of stacking many margins.
- Lightened link hover background and added left border highlight for active state.
- Normalized padding on the sidebar so content aligns visually with the main content area.


Component 3: FORM
-----------------
1. Analysis
- Main container: `section.form-component` with `.form-card` for visual form box.
- Child elements: headings, input fields with labels, helper text, and a submit button.
- Content: field labels, placeholder text, helper messages, and button label.
- Layout: vertical column, form controls aligned to the left with consistent width.
- Decoration: subtle border, background, focus outlines.

2. Planning
- HTML elements: use `form` element with `label`, `input`, `textarea`, and `button`.
- Groupings: `.form-group` wrapping each label + control pair; intro text in `.form-header`.
- Layout method: normal block flow for stacking, with max-width to keep the form compact.

3. Chunking
- Parent container: `.form-component` and inner `.form-card`.
- Sub-sections: `.form-header`, `.form-body`, `.form-actions`.
- Reusable blocks: `.form-group` and `.form-control` classes for consistency across fields.

4. Prompting (Code Writing)
- Add `for` and `id` attributes to connect labels and inputs for accessibility.
- Use semantic `button type="submit"` and `required` on key fields.
- Style inputs and buttons with consistent padding, borders, and focus states.

5. Iterating
- Increased spacing between `form-group` blocks and aligned labels to improve scanability.
- Simplified class names for inputs (`.form-control`) to reuse styles.
- Adjusted button width and alignment to visually match the card component’s buttons.


Component 4: IMAGE GALLERY
--------------------------
1. Analysis
- Main container: `section.gallery-component` with `.gallery-grid`.
- Child elements: individual `.gallery-item` boxes with placeholder imagery and short captions.
- Content: image alt text (descriptions) and captions.
- Layout: responsive grid of equal-height cards that wrap on small screens.
- Decoration: background color tiles, hover elevation, subtle border radius.

2. Planning
- HTML elements: `figure` for each image tile with `div` as placeholder image and `figcaption` for text.
- Groupings: `.gallery-grid` for all items, `.gallery-item` for each tile.
- Layout method: CSS Grid for the gallery to auto-fit items and maintain equal spacing.

3. Chunking
- Parent container: `.gallery-component`.
- Sub-sections: `.gallery-header`, `.gallery-grid`.
- Reusable blocks: `.gallery-item`, `.gallery-placeholder`, `.gallery-caption`.

4. Prompting (Code Writing)
- Use `figure`/`figcaption` for semantic image blocks.
- Apply CSS Grid with `repeat(auto-fit, minmax(...))` for responsiveness.
- Use colored `.gallery-placeholder` divs as mock images.

5. Iterating
- Increased grid gap and internal padding to prevent tiles from feeling crowded.
- Unified placeholder aspect ratio and border radius with the card component.
- Softened hover transform (`translateY`) so effects feel consistent and not jarring.

GLOBAL LAYOUT & ITERATION
-------------------------
- Initial layout placed the sidebar and main content using Flexbox; refined to a CSS Grid with fixed sidebar width and fluid content.
- Normalized typography, base colors, and spacing scale so all four components feel like part of one design system.
- Final pass focused on consistent naming (`*-component`, `*-header`, `.btn`, `.badge`) and uniform spacing units (multiples of 0.25rem).
-->