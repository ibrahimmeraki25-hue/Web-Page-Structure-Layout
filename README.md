README – UI Components Homework
1. Card Component
Analysis

Main container: <section> يحتوي على جميع الكروت

Child elements:

كل كارد: عنوان (h3), وصف (p), زر (button)

Content vs Layout vs Decoration:

Content: العنوان، النص، الزر

Layout: ترتيب الكروت في صف باستخدام Flexbox

Decoration: حدود، ظل، padding

Planning

HTML Elements: section, div.card, h3, p, button

Layout: Flexbox لعرض الكروت في صف

Grouping: كل كارد داخل div.card داخل Section

Chunking

Section.cards-section (Parent container)

div.card (Reusable block)

h3 (Title)

p (Description)

button (Action)

Iterating

ضبط المسافات بين الكروت

تحسين class names لتكون واضحة

إضافة padding داخلي للكارد

2. Sidebar Component
Analysis

Main container: div.sidebar-container

Child elements:

aside.sidebar: قائمة روابط

div.sidebar-content: نص المحتوى

Content vs Layout vs Decoration:

Content: الروابط والنص

Layout: Flexbox (sidebar + content)

Decoration: خلفية، padding، border-radius

Planning

HTML Elements: aside, ul, li, a, div

Layout: Flexbox أفقي

Grouping: sidebar على اليسار والمحتوى على اليمين

Chunking

div.sidebar-container

aside.sidebar (Links)

div.sidebar-content (Text area)

Iterating

ضبط عرض sidebar والمحتوى

تحسين ألوان وخطوط العناصر

ترتيب العناصر بشكل متناسق

3. Form Component
Analysis

Main container: section.form-section

Child elements:

input (name, email)

textarea (message)

button (submit)

Content vs Layout vs Decoration:

Content: النصوص

Layout: ترتيب عمودي مع gap

Decoration: border-radius، padding

Planning

HTML Elements: form, label, input, textarea, button

Layout: Flexbox column

Grouping: كل label مع input/textarea

Chunking

section.form-section

form

label + input/textarea

button

Iterating

ضبط المسافات بين الحقول

تحسين حجم الحقول لتكون متناسقة

تحسين class names

4. Image Gallery Component
Analysis

Main container: section.gallery-section

Child elements:

div.gallery-item (مربع أو placeholder)

Content vs Layout vs Decoration:

Content: الصور أو المربعات الملونة

Layout: Grid أو Flexbox

Decoration: border-radius، gap

Planning

HTML Elements: section, div.gallery-container, div.gallery-item

Layout: Grid مع 4 أعمدة أو Flexbox

Grouping: كل عنصر داخل div.gallery-item

Chunking

section.gallery-section

div.gallery-container

div.gallery-item (reusable)

Iterating

ضبط المسافات بين العناصر

توحيد أحجام المربعات

تحسين class names