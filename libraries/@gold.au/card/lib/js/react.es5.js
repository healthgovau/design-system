"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=exports.AUcardTitle=exports.AUcardFooter=exports.AUcardLink=exports.AUcardDivider=exports.AUcardImage=exports.AUcardHeader=exports.AUcardInner=void 0;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _excluded=["link","shadow","centred","dark","alt","clickable","className","children"],_excluded2=["className","children"],_excluded3=["className","level","alt","dark","children"],_excluded4=["src","className"],_excluded5=["className"],_excluded6=["link","text","className"],_excluded7=["dark","alt","children","className"],_excluded8=["children","className","level"];function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}/**
 * The card  component
 *
 * @param {string}   link               - The link that clicking the card goes to
 * @param {bool}     shadow             - Adds a box shadow to card if true
 * @param {bool}     centred            - Aligns all text to center if true
 * @param {bool}     clickable          - Aligns all text to center if true
 * @param {bool}     dark               - Dark theme variation
 * @param {bool}     alt                - Light theme variation
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */var AUcard=function AUcard(_ref){var link=_ref.link,shadow=_ref.shadow,centred=_ref.centred,dark=_ref.dark,alt=_ref.alt,clickable=_ref.clickable,className=_ref.className,children=_ref.children,attributesOptions=_objectWithoutProperties(_ref,_excluded);var CardContainer="div";if(link!==undefined){CardContainer="a";attributesOptions.href=link}var cardTheme="";if(dark||alt){cardTheme="au-body ".concat(dark?"au-body--dark":""," ").concat(alt?"au-body--alt":"")}return/*#__PURE__*/_react["default"].createElement(CardContainer,_extends({className:"au-card ".concat(className," ").concat(cardTheme)+"".concat(shadow?"au-card--shadow":""," ")+"".concat(centred?"au-card--centred":""," ")+"".concat(clickable?"au-card--clickable":"")},attributesOptions),children)};AUcard.propTypes={link:_propTypes["default"].string,dark:_propTypes["default"].bool,alt:_propTypes["default"].bool,shadow:_propTypes["default"].bool,centred:_propTypes["default"].bool,className:_propTypes["default"].string};AUcard.defaultProps={shadow:false,centred:false,clickable:false,dark:false,alt:false,className:""};/**
 * An inner container for the card, with padding of 1 rem
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */var AUcardInner=function AUcardInner(_ref2){var className=_ref2.className,children=_ref2.children,attributesOptions=_objectWithoutProperties(_ref2,_excluded2);return/*#__PURE__*/_react["default"].createElement("div",_extends({className:"au-card__inner ".concat(className)},attributesOptions),children)};exports.AUcardInner=AUcardInner;AUcardInner.propTypes={className:_propTypes["default"].string};AUcardInner.defaultProps={className:""};/**
 * An inner container for the card, with padding of 1 rem
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */var AUcardHeader=function AUcardHeader(_ref3){var className=_ref3.className,level=_ref3.level,alt=_ref3.alt,dark=_ref3.dark,children=_ref3.children,attributesOptions=_objectWithoutProperties(_ref3,_excluded3);var headerTheme="";if(dark||alt){headerTheme="au-body ".concat(dark?"au-body--dark":""," ").concat(alt?"au-body--alt":"")};if(level){var HeadingTag="h".concat(level);return/*#__PURE__*/_react["default"].createElement("div",_extends({className:headerTheme},attributesOptions),/*#__PURE__*/_react["default"].createElement(HeadingTag,{className:"au-card__header"},children))}else{return/*#__PURE__*/_react["default"].createElement("div",_extends({className:"au-card__header ".concat(headerTheme," ").concat(className)},attributesOptions),children)}};exports.AUcardHeader=AUcardHeader;AUcardHeader.propTypes={className:_propTypes["default"].string,dark:_propTypes["default"].bool,alt:_propTypes["default"].bool,level:_propTypes["default"].oneOf(["1","2","3","4","5","6"])};AUcardHeader.defaultProps={className:"",dark:false,alt:false};/**
 * An image inside the card
 * @param {string}   src                - Image source
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */var AUcardImage=function AUcardImage(_ref4){var src=_ref4.src,className=_ref4.className,attributesOptions=_objectWithoutProperties(_ref4,_excluded4);return/*#__PURE__*/_react["default"].createElement("img",_extends({className:"au-card__image ".concat(className),src:src},attributesOptions))};exports.AUcardImage=AUcardImage;AUcardImage.propTypes={src:_propTypes["default"].string.isRequired,className:_propTypes["default"].string};AUcardImage.defaultProps={className:""};/**
 * A horizontal rule used to divide content inside the card
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */var AUcardDivider=function AUcardDivider(_ref5){var className=_ref5.className,attributesOptions=_objectWithoutProperties(_ref5,_excluded5);return/*#__PURE__*/_react["default"].createElement("hr",_extends({className:"au-card__divider ".concat(className)},attributesOptions))};exports.AUcardDivider=AUcardDivider;AUcardDivider.propTypes={className:_propTypes["default"].string};AUcardDivider.defaultProps={className:""};/**
 * Use when making the entire click area of card clickable.
 * @param {string}   link               - The location of the link
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */var AUcardLink=function AUcardLink(_ref6){var link=_ref6.link,text=_ref6.text,className=_ref6.className,attributesOptions=_objectWithoutProperties(_ref6,_excluded6);return/*#__PURE__*/_react["default"].createElement("a",_extends({href:link,className:"au-card--clickable__link ".concat(className)},attributesOptions),text)};exports.AUcardLink=AUcardLink;AUcardLink.propTypes={link:_propTypes["default"].string.isRequired,text:_propTypes["default"].string.isRequired,className:_propTypes["default"].string};AUcardLink.defaultProps={className:""};/**
 * The footer section of the card
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */var AUcardFooter=function AUcardFooter(_ref7){var dark=_ref7.dark,alt=_ref7.alt,children=_ref7.children,className=_ref7.className,attributesOptions=_objectWithoutProperties(_ref7,_excluded7);var footerTheme="";if(dark||alt){footerTheme="au-body ".concat(dark?"au-body--dark":""," ").concat(alt?"au-body--alt":"")};return/*#__PURE__*/_react["default"].createElement("div",_extends({className:"au-card__footer ".concat(footerTheme," ").concat(className)},attributesOptions),children)};exports.AUcardFooter=AUcardFooter;AUcardFooter.propTypes={className:_propTypes["default"].string,dark:_propTypes["default"].bool,alt:_propTypes["default"].bool};AUcardFooter.defaultProps={className:"",dark:false,alt:false};/**
 * The footer section of the card
 * @param {string}   level              - The tag level (<h1/> <h2/> etc)
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */var AUcardTitle=function AUcardTitle(_ref8){var children=_ref8.children,className=_ref8.className,level=_ref8.level,attributeOptions=_objectWithoutProperties(_ref8,_excluded8);var HeadingTag="h".concat(level);return/*#__PURE__*/_react["default"].createElement(HeadingTag,_extends({className:"au-card__title ".concat(className)},attributeOptions),children)};exports.AUcardTitle=AUcardTitle;AUcardTitle.propTypes={level:_propTypes["default"].oneOf(["1","2","3","4","5","6"]).isRequired,className:_propTypes["default"].string};AUcardTitle.defaultProps={className:""};var _default=AUcard;exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0LmVzNS5qcyJdLCJuYW1lcyI6WyJBVWNhcmQiLCJsaW5rIiwic2hhZG93IiwiY2VudHJlZCIsImRhcmsiLCJhbHQiLCJjbGlja2FibGUiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImF0dHJpYnV0ZXNPcHRpb25zIiwiQ2FyZENvbnRhaW5lciIsInVuZGVmaW5lZCIsImhyZWYiLCJjYXJkVGhlbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiZGVmYXVsdFByb3BzIiwiQVVjYXJkSW5uZXIiLCJBVWNhcmRIZWFkZXIiLCJsZXZlbCIsImhlYWRlclRoZW1lIiwiSGVhZGluZ1RhZyIsIm9uZU9mIiwiQVVjYXJkSW1hZ2UiLCJzcmMiLCJpc1JlcXVpcmVkIiwiQVVjYXJkRGl2aWRlciIsIkFVY2FyZExpbmsiLCJ0ZXh0IiwiQVVjYXJkRm9vdGVyIiwiZm9vdGVyVGhlbWUiLCJBVWNhcmRUaXRsZSIsImF0dHJpYnV0ZU9wdGlvbnMiXSwibWFwcGluZ3MiOiIrT0FTQSxvREFDQSw2RCwrNUNBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsR0FBTUEsQ0FBQUEsTUFBTSxDQUFHLFFBQVRBLENBQUFBLE1BQVMsTUFBZ0csSUFBN0ZDLENBQUFBLElBQTZGLE1BQTdGQSxJQUE2RixDQUF2RkMsTUFBdUYsTUFBdkZBLE1BQXVGLENBQS9FQyxPQUErRSxNQUEvRUEsT0FBK0UsQ0FBdEVDLElBQXNFLE1BQXRFQSxJQUFzRSxDQUFoRUMsR0FBZ0UsTUFBaEVBLEdBQWdFLENBQTNEQyxTQUEyRCxNQUEzREEsU0FBMkQsQ0FBaERDLFNBQWdELE1BQWhEQSxTQUFnRCxDQUFyQ0MsUUFBcUMsTUFBckNBLFFBQXFDLENBQXhCQyxpQkFBd0IsMENBQzlHLEdBQUlDLENBQUFBLGFBQWEsQ0FBRyxLQUFwQixDQUVBLEdBQUlULElBQUksR0FBS1UsU0FBYixDQUF5QixDQUN4QkQs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QTJCLENBQzFCWCxTQUFTLENBQUUsRUFEZSxDQUEzQixDLGFBS2VQLE0iLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgQGdvbGQuYXUvY2FyZCB2MS4wLjAgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqXG4gKiBjYXJkIGZ1bmN0aW9uXG4gKlxuICogQSBjb250YWluZXIgZm9yIGFsbCB0eXBlcyBvZiBjb250ZW50XG4gKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBUaGUgY2FyZCAgY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9ICAgbGluayAgICAgICAgICAgICAgIC0gVGhlIGxpbmsgdGhhdCBjbGlja2luZyB0aGUgY2FyZCBnb2VzIHRvXG4gKiBAcGFyYW0ge2Jvb2x9ICAgICBzaGFkb3cgICAgICAgICAgICAgLSBBZGRzIGEgYm94IHNoYWRvdyB0byBjYXJkIGlmIHRydWVcbiAqIEBwYXJhbSB7Ym9vbH0gICAgIGNlbnRyZWQgICAgICAgICAgICAtIEFsaWducyBhbGwgdGV4dCB0byBjZW50ZXIgaWYgdHJ1ZVxuICogQHBhcmFtIHtib29sfSAgICAgY2xpY2thYmxlICAgICAgICAgIC0gQWxpZ25zIGFsbCB0ZXh0IHRvIGNlbnRlciBpZiB0cnVlXG4gKiBAcGFyYW0ge2Jvb2x9ICAgICBkYXJrICAgICAgICAgICAgICAgLSBEYXJrIHRoZW1lIHZhcmlhdGlvblxuICogQHBhcmFtIHtib29sfSAgICAgYWx0ICAgICAgICAgICAgICAgIC0gTGlnaHQgdGhlbWUgdmFyaWF0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gICBjbGFzc05hbWUgICAgICAgICAgLSBBbiBhZGRpdGlvbmFsIGNsYXNzLCBvcHRpb25hbFxuICogQHBhcmFtIHtvYmplY3R9ICAgYXR0cmlidXRlT3B0aW9ucyAgIC0gRGVmYXVsdCBIVE1MIGF0dHJpYnV0ZXNcbiAqL1xuY29uc3QgQVVjYXJkID0gKHsgbGluaywgc2hhZG93LCBjZW50cmVkLCBkYXJrLCBhbHQsIGNsaWNrYWJsZSwgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4uYXR0cmlidXRlc09wdGlvbnMgfSkgPT4ge1xuXHRsZXQgQ2FyZENvbnRhaW5lciA9ICdkaXYnO1xuXG5cdGlmKCBsaW5rICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0Q2FyZENvbnRhaW5lciA9ICdhJztcblx0XHRhdHRyaWJ1dGVzT3B0aW9ucy5ocmVmID0gbGluaztcblx0fVxuXG5cdGxldCBjYXJkVGhlbWUgPSBcIlwiO1xuXG5cdGlmICggZGFyayB8fCBhbHQgKSB7XG5cdFx0Y2FyZFRoZW1lID0gYGF1LWJvZHkgJHsgZGFyayA/IFwiYXUtYm9keS0tZGFya1wiIDogXCJcIiB9ICR7IGFsdCA/IFwiYXUtYm9keS0tYWx0XCIgOiBcIlwifWBcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PENhcmRDb250YWluZXIgY2xhc3NOYW1lPXtgYXUtY2FyZCAke2NsYXNzTmFtZX0gJHtjYXJkVGhlbWV9YCArXG5cdFx0XHRcdFx0XHRcdFx0YCR7c2hhZG93ID8gJ2F1LWNhcmQtLXNoYWRvdycgOiAnJ30gYCArXG5cdFx0XHRcdFx0XHRcdFx0YCR7Y2VudHJlZCA/ICdhdS1jYXJkLS1jZW50cmVkJyA6ICcnfSBgICtcblx0XHRcdFx0XHRcdFx0XHRgJHtjbGlja2FibGUgPyAnYXUtY2FyZC0tY2xpY2thYmxlJyA6ICcnfWB9XG5cdFx0XHRcdFx0XHRcdFx0ey4uLmF0dHJpYnV0ZXNPcHRpb25zfVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L0NhcmRDb250YWluZXI+XG5cdClcbn07XG5cbkFVY2FyZC5wcm9wVHlwZXMgPSB7XG5cdGxpbms6IFByb3BUeXBlcy5zdHJpbmcsXG5cdGRhcms6IFByb3BUeXBlcy5ib29sLFxuXHRhbHQ6IFByb3BUeXBlcy5ib29sLFxuXHRzaGFkb3c6IFByb3BUeXBlcy5ib29sLFxuXHRjZW50cmVkOiBQcm9wVHlwZXMuYm9vbCxcblx0Y2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuQVVjYXJkLmRlZmF1bHRQcm9wcyA9IHtcblx0c2hhZG93OiBmYWxzZSxcblx0Y2VudHJlZDogZmFsc2UsXG5cdGNsaWNrYWJsZTogZmFsc2UsXG5cdGRhcms6IGZhbHNlLFxuXHRhbHQ6IGZhbHNlLFxuXHRjbGFzc05hbWU6ICcnXG59O1xuXG5cbi8qKlxuICogQW4gaW5uZXIgY29udGFpbmVyIGZvciB0aGUgY2FyZCwgd2l0aCBwYWRkaW5nIG9mIDEgcmVtXG4gKiBAcGFyYW0ge3N0cmluZ30gICBjbGFzc05hbWUgICAgICAgICAgLSBBbiBhZGRpdGlvbmFsIGNsYXNzLCBvcHRpb25hbFxuICogQHBhcmFtIHtvYmplY3R9ICAgYXR0cmlidXRlT3B0aW9ucyAgIC0gRGVmYXVsdCBIVE1MIGF0dHJpYnV0ZXNcbiAqL1xuZXhwb3J0IGNvbnN0IEFVY2FyZElubmVyID0gKHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4uYXR0cmlidXRlc09wdGlvbnMgfSkgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT17YGF1LWNhcmRfX2lubmVyICR7Y2xhc3NOYW1lfWB9IHsuLi5hdHRyaWJ1dGVzT3B0aW9uc30+XG5cdFx0e2NoaWxkcmVufVxuXHQ8L2Rpdj5cbik7XG5cbkFVY2FyZElubmVyLnByb3BUeXBlcyA9IHtcblx0Y2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbkFVY2FyZElubmVyLmRlZmF1bHRQcm9wcyA9IHtcblx0Y2xhc3NOYW1lOiAnJ1xufVxuXG5cbi8qKlxuICogQW4gaW5uZXIgY29udGFpbmVyIGZvciB0aGUgY2FyZCwgd2l0aCBwYWRkaW5nIG9mIDEgcmVtXG4gKiBAcGFyYW0ge3N0cmluZ30gICBjbGFzc05hbWUgICAgICAgICAgLSBBbiBhZGRpdGlvbmFsIGNsYXNzLCBvcHRpb25hbFxuICogQHBhcmFtIHtvYmplY3R9ICAgYXR0cmlidXRlT3B0aW9ucyAgIC0gRGVmYXVsdCBIVE1MIGF0dHJpYnV0ZXNcbiAqL1xuZXhwb3J0IGNvbnN0IEFVY2FyZEhlYWRlciA9ICh7IGNsYXNzTmFtZSwgbGV2ZWwsIGFsdCwgZGFyaywgY2hpbGRyZW4sIC4uLmF0dHJpYnV0ZXNPcHRpb25zIH0pID0+IHtcblxuXHRsZXQgaGVhZGVyVGhlbWUgPSBcIlwiO1xuXG5cdGlmICggZGFyayB8fCBhbHQgKSB7XG5cdFx0aGVhZGVyVGhlbWUgPSBgYXUtYm9keSAkeyBkYXJrID8gXCJhdS1ib2R5LS1kYXJrXCIgOiBcIlwiIH0gJHsgYWx0ID8gXCJhdS1ib2R5LS1hbHRcIiA6IFwiXCJ9YFxuXHR9O1xuXG5cdGlmICggbGV2ZWwgKSB7XG5cdFx0Y29uc3QgSGVhZGluZ1RhZyA9IGBoJHsgbGV2ZWwgfWA7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtoZWFkZXJUaGVtZX0gey4uLmF0dHJpYnV0ZXNPcHRpb25zfT5cblx0XHRcdFx0PEhlYWRpbmdUYWcgY2xhc3NOYW1lPXtgYXUtY2FyZF9faGVhZGVyYH0+e2NoaWxkcmVufTwvSGVhZGluZ1RhZyA+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH0gZWxzZSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2BhdS1jYXJkX19oZWFkZXIgJHsgaGVhZGVyVGhlbWUgfSAke2NsYXNzTmFtZX1gfSB7Li4uYXR0cmlidXRlc09wdGlvbnN9PlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvZGl2PlxuXHQpXG5cdH1cbn07XG5cbkFVY2FyZEhlYWRlci5wcm9wVHlwZXMgPSB7XG5cdGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblx0ZGFyazogUHJvcFR5cGVzLmJvb2wsXG5cdGFsdDogUHJvcFR5cGVzLmJvb2wsXG5cdGxldmVsOiBQcm9wVHlwZXMub25lT2YoWyAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnIF0pLFxufVxuXG5BVWNhcmRIZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuXHRjbGFzc05hbWU6ICcnLFxuXHRkYXJrOiBmYWxzZSxcblx0YWx0OiBmYWxzZSxcbn1cblxuXG4vKipcbiAqIEFuIGltYWdlIGluc2lkZSB0aGUgY2FyZFxuICogQHBhcmFtIHtzdHJpbmd9ICAgc3JjICAgICAgICAgICAgICAgIC0gSW1hZ2Ugc291cmNlXG4gKiBAcGFyYW0ge3N0cmluZ30gICBjbGFzc05hbWUgICAgICAgICAgLSBBbiBhZGRpdGlvbmFsIGNsYXNzLCBvcHRpb25hbFxuICogQHBhcmFtIHtvYmplY3R9ICAgYXR0cmlidXRlT3B0aW9ucyAgIC0gRGVmYXVsdCBIVE1MIGF0dHJpYnV0ZXNcbiAqL1xuZXhwb3J0IGNvbnN0IEFVY2FyZEltYWdlID0gKHsgc3JjLGNsYXNzTmFtZSwgLi4uYXR0cmlidXRlc09wdGlvbnMgfSkgPT4gKFxuXHQ8aW1nIGNsYXNzTmFtZT17YGF1LWNhcmRfX2ltYWdlICR7Y2xhc3NOYW1lfWB9IHNyYz17IHNyYyB9IHsuLi5hdHRyaWJ1dGVzT3B0aW9uc30gLz5cbik7XG5cbkFVY2FyZEltYWdlLnByb3BUeXBlcyA9IHtcblx0c3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuQVVjYXJkSW1hZ2UuZGVmYXVsdFByb3BzID0ge1xuXHRjbGFzc05hbWU6ICcnXG59O1xuXG5cbi8qKlxuICogQSBob3Jpem9udGFsIHJ1bGUgdXNlZCB0byBkaXZpZGUgY29udGVudCBpbnNpZGUgdGhlIGNhcmRcbiAqIEBwYXJhbSB7c3RyaW5nfSAgIGNsYXNzTmFtZSAgICAgICAgICAtIEFuIGFkZGl0aW9uYWwgY2xhc3MsIG9wdGlvbmFsXG4gKiBAcGFyYW0ge29iamVjdH0gICBhdHRyaWJ1dGVPcHRpb25zICAgLSBEZWZhdWx0IEhUTUwgYXR0cmlidXRlc1xuICovXG5leHBvcnQgY29uc3QgQVVjYXJkRGl2aWRlciA9ICh7IGNsYXNzTmFtZSwgLi4uYXR0cmlidXRlc09wdGlvbnMgfSkgPT4gKFxuXHQ8aHIgY2xhc3NOYW1lPXtgYXUtY2FyZF9fZGl2aWRlciAke2NsYXNzTmFtZX1gfSB7Li4uYXR0cmlidXRlc09wdGlvbnN9IC8+XG4pO1xuXG5BVWNhcmREaXZpZGVyLnByb3BUeXBlcyA9IHtcblx0Y2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5BVWNhcmREaXZpZGVyLmRlZmF1bHRQcm9wcyA9IHtcblx0Y2xhc3NOYW1lOiAnJ1xufTtcblxuXG5cbi8qKlxuICogVXNlIHdoZW4gbWFraW5nIHRoZSBlbnRpcmUgY2xpY2sgYXJlYSBvZiBjYXJkIGNsaWNrYWJsZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSAgIGxpbmsgICAgICAgICAgICAgICAtIFRoZSBsb2NhdGlvbiBvZiB0aGUgbGlua1xuICogQHBhcmFtIHtzdHJpbmd9ICAgY2xhc3NOYW1lICAgICAgICAgIC0gQW4gYWRkaXRpb25hbCBjbGFzcywgb3B0aW9uYWxcbiAqIEBwYXJhbSB7b2JqZWN0fSAgIGF0dHJpYnV0ZU9wdGlvbnMgICAtIERlZmF1bHQgSFRNTCBhdHRyaWJ1dGVzXG4gKi9cbmV4cG9ydCBjb25zdCBBVWNhcmRMaW5rID0gKHsgbGluaywgdGV4dCwgY2xhc3NOYW1lLCAuLi5hdHRyaWJ1dGVzT3B0aW9ucyB9KSA9PiAoXG5cdDxhIGhyZWY9e2xpbmt9IGNsYXNzTmFtZT17YGF1LWNhcmQtLWNsaWNrYWJsZV9fbGluayAke2NsYXNzTmFtZX1gfSB7Li4uYXR0cmlidXRlc09wdGlvbnN9PlxuXHRcdHt0ZXh0fVxuXHQ8L2E+XG4pO1xuXG5BVWNhcmRMaW5rLnByb3BUeXBlcyA9IHtcblx0bGluazogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHR0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuQVVjYXJkTGluay5kZWZhdWx0UHJvcHMgPSB7XG5cdGNsYXNzTmFtZTogJydcbn07XG5cblxuXG4vKipcbiAqIFRoZSBmb290ZXIgc2VjdGlvbiBvZiB0aGUgY2FyZFxuICogQHBhcmFtIHtzdHJpbmd9ICAgY2xhc3NOYW1lICAgICAgICAgIC0gQW4gYWRkaXRpb25hbCBjbGFzcywgb3B0aW9uYWxcbiAqIEBwYXJhbSB7b2JqZWN0fSAgIGF0dHJpYnV0ZU9wdGlvbnMgICAtIERlZmF1bHQgSFRNTCBhdHRyaWJ1dGVzXG4gKi9cbmV4cG9ydCBjb25zdCBBVWNhcmRGb290ZXIgPSAoeyBkYXJrLCBhbHQsIGNoaWxkcmVuLCBjbGFzc05hbWUsIC4uLmF0dHJpYnV0ZXNPcHRpb25zIH0pID0+IHtcblxuXG5cdGxldCBmb290ZXJUaGVtZSA9IFwiXCI7XG5cblx0aWYgKCBkYXJrIHx8IGFsdCApIHtcblx0XHRmb290ZXJUaGVtZSA9IGBhdS1ib2R5ICR7IGRhcmsgPyBcImF1LWJvZHktLWRhcmtcIiA6IFwiXCIgfSAkeyBhbHQgPyBcImF1LWJvZHktLWFsdFwiIDogXCJcIn1gXG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17YGF1LWNhcmRfX2Zvb3RlciAke2Zvb3RlclRoZW1lfSAke2NsYXNzTmFtZX1gfSB7Li4uYXR0cmlidXRlc09wdGlvbnN9PlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvZGl2PlxuKX07XG5cbkFVY2FyZEZvb3Rlci5wcm9wVHlwZXMgPSB7XG5cdGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblx0ZGFyazogUHJvcFR5cGVzLmJvb2wsXG5cdGFsdDogUHJvcFR5cGVzLmJvb2wsXG59XG5cbkFVY2FyZEZvb3Rlci5kZWZhdWx0UHJvcHMgPSB7XG5cdGNsYXNzTmFtZTogJycsXG5cdGRhcms6IGZhbHNlLFxuXHRhbHQ6IGZhbHNlLFxufVxuXG5cblxuLyoqXG4gKiBUaGUgZm9vdGVyIHNlY3Rpb24gb2YgdGhlIGNhcmRcbiAqIEBwYXJhbSB7c3RyaW5nfSAgIGxldmVsICAgICAgICAgICAgICAtIFRoZSB0YWcgbGV2ZWwgKDxoMS8+IDxoMi8+IGV0YylcbiAqIEBwYXJhbSB7c3RyaW5nfSAgIGNsYXNzTmFtZSAgICAgICAgICAtIEFuIGFkZGl0aW9uYWwgY2xhc3MsIG9wdGlvbmFsXG4gKiBAcGFyYW0ge29iamVjdH0gICBhdHRyaWJ1dGVPcHRpb25zICAgLSBEZWZhdWx0IEhUTUwgYXR0cmlidXRlc1xuICovXG5leHBvcnQgY29uc3QgQVVjYXJkVGl0bGUgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBsZXZlbCwgLi4uYXR0cmlidXRlT3B0aW9ucyB9KSA9PiB7XG5cdGNvbnN0IEhlYWRpbmdUYWcgPSBgaCR7IGxldmVsIH1gO1xuXG5cdHJldHVybiAoXG5cdFx0PEhlYWRpbmdUYWcgY2xhc3NOYW1lPXsgYGF1LWNhcmRfX3RpdGxlICR7IGNsYXNzTmFtZSB9YCB9IHsgLi4uYXR0cmlidXRlT3B0aW9ucyB9PnsgY2hpbGRyZW4gfTwvSGVhZGluZ1RhZz5cblx0KTtcbn07XG5cbkFVY2FyZFRpdGxlLnByb3BUeXBlcyA9IHtcblx0bGV2ZWw6IFByb3BUeXBlcy5vbmVPZihbICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicgXSkuaXNSZXF1aXJlZCxcblx0Y2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5BVWNhcmRUaXRsZS5kZWZhdWx0UHJvcHMgPSB7XG5cdGNsYXNzTmFtZTogJydcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgQVVjYXJkO1xuIl19