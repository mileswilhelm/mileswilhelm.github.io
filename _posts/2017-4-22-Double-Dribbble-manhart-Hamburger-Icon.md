---
layout: post
title: 'Double Dribbble: manhart''s Hamburger Icon'
---

Dribbble is an awesome resource for practicing making design come to life in code. It is perfect for inspiring you with wonderful designs you just have to recreate. The Double Dribbble series are snippets of design I have found inspiration from and felt the need to bring to life in code.

This is my first Double Dribbble entry and it features a playful, yet simple hamburger icon animation. The original design work was created by the talented [John Manhart](http://manhart.io) and can be found on Dribbble [here](https://dribbble.com/shots/2903173-Hamburger-animation) and [here](https://dribbble.com/shots/2897013-Hamburger-Hamburger-Hamburger).

### Icon Animation

The secret sauce to making the first animation come to life is by making each bar of the burger icon it's own span. To recreate the effect of the middle bar becoming the X icon while the top and bottom bars leave, we need two burger bars stacked on top of one another in the middle. The code looks like this:

```html
<!-- Burger icon wrapper -->
<div class="burger-container">

  <!-- mmm, burgers -->
	<span class="burger-bar"></span>
  <!-- class close to style the middle bar before interaction -->
	<span class="burger-bar close"></span>
  <!-- class hidden to place this burger bar on top of the middle one -->
	<span class="burger-bar hidden"></span>
	<span class="burger-bar"></span>

</div>
```

**NOTE:** *You could target the burger-bars in the middle without using the classes* `close` *and* `hidden` *by targeting them with* `nth-of-type` *, but for simplicity I used classes.*

Make the border size for your `.burger-container` match the height of the `.burger-bar` elements. Calculate the margin and padding to give consistent spacing from the `.burger-container` to the `.burger-bar`s, and the `.burger-bar`s from themselves.

Position your 'hidden' `.burger-bar` absolutely to sit on top of the middle bar. Once all the pieces are in place, we can add the animation fun.

The styling is very simple in terms of code but has a great visual effect with four moving parts at once.

Style the `.burger-container` with `overflow: hidden` so the top and bottom `.burger-bar` can appear to exit.

You can achieve the exit effect by applying `transform: translateX(-#px)` to the first `.burger-bar` and `transform: translateX(#px)` to the last one.

For the X icon to appear, apply `transform: rotate(45deg)` to one of the middle bars and `transform: rotate(-45deg)` to the other. They will both cross at a perfect angle and resemble an X.

Finally, have the `border-color` of the `.burger-container` and the `background-color` of the `.burger-bar`s change on interaction. Make sure to add `transition` for all of the transforming styles. The end result looks like this, mimicking the original design.

<p data-height="265" data-theme-id="0" data-slug-hash="LyVyaB" data-default-tab="css,result" data-user="mileswilhelm" data-embed-version="2" data-pen-title="Double Dribbble: manhart's hamburger icon" class="codepen">See the Pen <a href="https://codepen.io/mileswilhelm/pen/LyVyaB/">Double Dribbble: manhart's hamburger icon</a> by Miles Wilhelm (<a href="http://codepen.io/mileswilhelm">@mileswilhelm</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### Icon with Menu Reveal

From the second linked design, the animation plays and then reveals a full-screen menu.

In your HTML, add a hidden menu with the links you want revealed. Add a function that toggles a class on both the icon and the menu. Include the `transform` and `opacity` changes to the menu and menu items to replicate the sliding effect.

A tangible example:

<p data-height="265" data-theme-id="0" data-slug-hash="qmOzKJ" data-default-tab="html,result" data-user="mileswilhelm" data-embed-version="2" data-pen-title="Double Dribbble: manhart's hamburger icon" class="codepen">See the Pen <a href="https://codepen.io/mileswilhelm/pen/qmOzKJ/">Double Dribbble: manhart's hamburger icon</a> by Miles Wilhelm (<a href="http://codepen.io/mileswilhelm">@mileswilhelm</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
