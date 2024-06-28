---
title: Colours and variables
label: Colours and variables
---

## Colours

### Default colours
The Health Design System is pre-configured to apply the departmental visual identity. The default HDS colours should only be applied to department products that are delivered via the health.gov.au domain.

The Health brand has a range of colours in the palette which enable the creation of clear and accessible colour schemes.

<div class="au-body">
    <h3>Primary colours</h3>
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
    <h3>Complementary colours</h3>
    <ul class="colour__swatches">
    <li class="colour__swatch" style="background-color: #0077C8;">
        <p class="colour__info colour__info--dark">#0077C8</p>
    </li>
    <li class="colour__swatch" style="background-color: #910048;">
        <p class="colour__info colour__info--dark">#910048</p>
    </li>
    <li class="colour__swatch" style="background-color: #B5BD00;">
        <p class="colour__info colour__info--light">#B5BD00</p>
    </li>
    <li class="colour__swatch" style="background-color: #0057B8;">
        <p class="colour__info colour__info--dark">#0057B8</p>
    </li>
    <li class="colour__swatch" style="background-color: #0093B2;">
        <p class="colour__info colour__info--dark">#0093B2</p>
    </li>
    </ul>
    <h3>Accents colours</h3>
    <ul class="colour__swatches">
    <li class="colour__swatch" style="background-color: #D50032;">
        <p class="colour__info colour__info--dark">#D50032</p>
    </li>
    <li class="colour__swatch" style="background-color: #E86335;">
        <p class="colour__info colour__info--dark">#E86335</p>
    </li>
    <li class="colour__swatch" style="background-color: #CFB5000;">
        <p class="colour__info colour__info--dark">#CFB5000</p>
    </li>
    </ul>
    <h3>Neutral colours</h3>
    <ul class="colour__swatches">
    <li class="colour__swatch" style="background-color: #5B6770;">
        <p class="colour__info colour__info--dark">#5B6770</p>
    </li>
    <li class="colour__swatch" style="background-color: #A2AAAD;">
        <p class="colour__info colour__info--dark">#A2AAAD</p>
    </li>
    <li class="colour__swatch" style="background-color: #C1C6C8;">
        <p class="colour__info colour__info--dalightk">#C1C6C8</p>
    </li>
    <li class="colour__swatch" style="background-color: #ececec;">
        <p class="colour__info colour__info--light">#ececec</p>
    </li>
    <li class="colour__swatch" style="background-color: #f8f8f8;">
        <p class="colour__info colour__info--light">#f8f8f8</p>
    </li>
    </ul>
</div>

The full range of colours is specified as SCSS variables in `/source/sass/themes/health/_colours.scss`.

### Colours for aligned products
The above palette is reserved for products delivered via health.gov.au. Other departmental products should generate their own co-branded palette. The HDS has been architected to permit you to override the reserved palette easily.

<div class="au-callout">
    <p>More information about aligned products coming soon.</p>
</div>

The HDS contains a `/source/sass/themes/my-theme` folder. Colours and variables should be declared/overridden here, following the process of application described below.

## Applying to components
### SCSS colour variables 
The HDS uses many colours defined in the GOLD Design System.
It declares its own ones in `/source/sass/themes/health/_colours.scss`

### Mapping colours to their applications
If we declare `$blue: #0077C8` and apply this thoughout the HDS, it creates two issues:
- What happens when we wish to change blue to green?
- How do we know what $blue applies to?

Therefore, the HDS applies a mapping of SCSS colour variables to their applications. For example:

- Declare variable: `$blue: #0077C8`
- Map to application: `$header-border-colour: $blue`

This means that updates and remapping can be done with confidence.

### CSS custom variables
> New in v2.0.0

SCSS variables are only available pre-compilation. For example, applying the above variable to a selector like this:
```
.border {
    border-color: $header-border-colour;
}
```
compiles into
```
.border{
    border-color: #0077C8;
}
```
CSS custom variables allow much easier redeclaration/overrides and are accessible client-side (i.e. in the browser).

The file at `/source/sass/themes/health/_custom-property-map.scss` maps SCSS variables to CSS custom variables and the v2.0.0 update replaces the SCSS ones used by components.

Inspecting a product using the HDS shows the following CSS custom variables:

<div class="au-body">
    <div class="health-grid health-listing health-grid--4col-md ">
        <div><h4>Default variables</h4>
            <img src="../images/hga-vars.png" />
        </div>
        <div><h4>Overridden variables</h4>
            <img src="../images/cdc-vars.png" />
        </div>
    </div>
</div>


## Variables
Variables work in the same way as colours, but apply to other properties of components, such as a sizes.
```
// Hero
$hero-content-width--md: 60%;
$hero-content-width--lg: 60%;
$hero-image-width--md: 100%;
$hero-image-width--lg: 50%;
```
These are available in `/source/sass/themes/health/_variables.scss`