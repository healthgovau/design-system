---
title: Colours and variables
label: Colours and variables
---

## Colours
The health brand has a range of colours in the palette which enable users to create clear and accessible colour schemes. Any of these colours can be de-saturated or tinted to create lighter colours. Helper SASS functions `tint($colour, $percent)` and shade($colour, $percent) make this easy.

<div class="au-callout">
    <h2 class="au-display-md">Scope of application</h2>
    <p>This colour palette applies to primary Health products, such as www.health.gov.au.</p><p>Aligned products, such as Health applications or portfolio agencies can use their own pallete to co-brand. All colours are provided as SASS variables to allow simple override</p>
    <p><strong>More information about aligned products coming soon.</strong></p>
</div>
<ul class="colour__swatches">
    <li class="colour__swatch" style="background-color: #002058;">
        <p class="colour__info colour__info--dark">#002058</p>
    </li>
    <li class="colour__swatch" style="background-color: #041E42;">
        <p class="colour__info colour__info--dark">#041E42</p>
    </li>
    <li class="colour__swatch" style="background-color: #007680;">
        <p class="colour__info colour__info--dark">#007680</p>
    </li>
    <li class="colour__swatch" style="background-color: #006269;">
        <p class="colour__info colour__info--dark">#006269</p>
    </li>
</ul>

## Applying to components
Health's colour palette is applied to components of the Health Design System by default.

However Health-aligned products such as applications or portfolio agencies can override the colour palette to achieve co-branding.

### How to override colours
To simply applying an alternative colour palette, all colours in the Health Design System are provided as SASS variables in sass/themes and are mapped to specific applications.

### Variable and mappings
By using SASS variables, colours can be change in one place to be updated globally.

By mapping variable names to applications, users of the system are no stuck with a variable called $blue every though they have changed it to red!

#### Example
Health's primary blue colour uses the variable $colour-primary-blue and is used in many places in the HDS. Instead of using directly against components, the following SASS variable mapping is used:

```
$header-border-colour: $colour-primary-blue
$footer-bg-colour: $colour-primary-blue;
$callout-primary-border-colour: $colour-primary-blue;
```

To predictably apply new colours, new variables can be created and assigned like this: 

```
$my-product-red: #FF0000; 
$my-product-yellow: #FFFF0;
$header-border-colour: $my-product-red;
$footer-bg-colour: $my-product-yellow;
$callout-primary-border-colour: $my-product-red;
```