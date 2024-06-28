---
title: Versioning
label: Versioning
---

<div class="au-body">
    <p class="au-introduction">The HDS uses semantic versioning to help understand the potential impact of a new version.</p>
</div>

## Semantic versioning
Semantic Versioning (SemVer) is a versioning scheme for software that aims to make version numbers meaningful and informative about the nature of changes in a release. The format for SemVer is MAJOR.MINOR.PATCH, where each segment of the version number indicates the type of changes that have been made. Here’s a breakdown:

### Major releases
These releases may contain breaking changes, it will almost always be necessary to refactor some of your code and check for usage of deprecated components.

Example: `v2.0.0`

### Minor releases
These releases can contain new components, or non breaking changes. These are changes where the HTML template remains the same, but the SCSS may have been updated.
If your project does not override the SCSS, there will be no impact.

Example: `v2.1.0`

### Patch releases
These are bug fixes so rarerly impact your product. In addition to the HDS code itself, the codebase contains the style guide (what you're reading now). Sometimes, we may simply update the style guide without making changes the HDS code. Given the rules of semantic versioning, we will push these changes as a patch release. Refer to the release notes for more information.

Example: `v2.0.1`

### Pre-release

A pre-release version number may be denoted by appending a string immediately following the patch version and a decimal point. These releases should be used with caution in a production environment.

Example: `v2.0.0-beta2`


## Version history

Version history is available in the 
[Health Design System releases](https://github.com/healthgovau/health-design-system/releases).
