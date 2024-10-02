"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=exports.AUfooterEnd=exports.AUfooterNav=void 0;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));require("../css/styles.css");var _excluded=["children","className","ariaLabel"],_excluded2=["children","className"],_excluded3=["dark","alt","children","className"];function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}/**
 * A section for the footer that contains navigational elements
 *
 * @param  {node}   children         - The inside of this section
 * @param  {string} className        - An additional class, optional
 * @param  {string} ariaLabel        - The aria-label attribute, optional
 * @param  {object} attributeOptions - Any other attribute options
 */var AUfooterNav=function AUfooterNav(_ref){var children=_ref.children,_ref$className=_ref.className,className=_ref$className===void 0?"":_ref$className,ariaLabel=_ref.ariaLabel,attributeOptions=_objectWithoutProperties(_ref,_excluded);return/*#__PURE__*/_react["default"].createElement("nav",_extends({className:"au-footer__navigation ".concat(className),"aria-label":ariaLabel},attributeOptions),children)};exports.AUfooterNav=AUfooterNav;AUfooterNav.propTypes={children:_propTypes["default"].node.isRequired,className:_propTypes["default"].string,ariaLabel:_propTypes["default"].string};AUfooterNav.defaultProps={ariaLabel:"footer"};/**
 * A section for the footer that sits at the end
 *
 * @param  {node}   children         - The inside of this section
 * @param  {string} className        - An additional class, optional
 * @param  {object} attributeOptions - Any other attribute options
 */var AUfooterEnd=function AUfooterEnd(_ref2){var children=_ref2.children,_ref2$className=_ref2.className,className=_ref2$className===void 0?"":_ref2$className,attributeOptions=_objectWithoutProperties(_ref2,_excluded2);return/*#__PURE__*/_react["default"].createElement("div",_extends({className:"au-footer__end ".concat(className)},attributeOptions),children)};exports.AUfooterEnd=AUfooterEnd;AUfooterEnd.propTypes={children:_propTypes["default"].node.isRequired,className:_propTypes["default"].string};/**
 * DEFAULT
 * The footer component
 *
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {boolean} alt              - Add the alt variation class, optional
 * @param  {node}    children         - The inside of this section
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */var AUfooter=function AUfooter(_ref3){var dark=_ref3.dark,alt=_ref3.alt,children=_ref3.children,_ref3$className=_ref3.className,className=_ref3$className===void 0?"":_ref3$className,attributeOptions=_objectWithoutProperties(_ref3,_excluded3);return/*#__PURE__*/_react["default"].createElement("footer",_extends({className:"au-footer ".concat(className).concat(dark?" au-footer--dark":"").concat(alt?" au-footer--alt":""," ")},attributeOptions,{role:"contentinfo"}),children)};AUfooter.propTypes={dark:_propTypes["default"].bool,alt:_propTypes["default"].bool,children:_propTypes["default"].node.isRequired,className:_propTypes["default"].string};var _default=AUfooter;exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0LmVzNS5qcyJdLCJuYW1lcyI6WyJBVWZvb3Rlck5hdiIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiYXJpYUxhYmVsIiwiYXR0cmlidXRlT3B0aW9ucyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIiwiQVVmb290ZXJFbmQiLCJBVWZvb3RlciIsImRhcmsiLCJhbHQiLCJib29sIl0sIm1hcHBpbmdzIjoid0lBU0Esb0RBQ0EsNkRBTUEsNkIsb3JDQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDTyxHQUFNQSxDQUFBQSxXQUFXLENBQUcsUUFBZEEsQ0FBQUEsV0FBYyxVQUFHQyxDQUFBQSxRQUFILE1BQUdBLFFBQUgscUJBQWFDLFNBQWIsQ0FBYUEsU0FBYix5QkFBeUIsRUFBekIsZ0JBQTZCQyxTQUE3QixNQUE2QkEsU0FBN0IsQ0FBMkNDLGdCQUEzQyw2REFDMUIsZ0RBQUssU0FBUyxpQ0FBNEJGLFNBQTVCLENBQWQsQ0FBd0QsYUFBYUMsU0FBckUsRUFBc0ZDLGdCQUF0RixFQUNHSCxRQURILENBRDBCLENBQXBCLEMsZ0NBTVBELFdBQVcsQ0FBQ0ssU0FBWixDQUF3QixDQUN2QkosUUFBUSxDQUFFSyxzQkFBVUMsSUFBVixDQUFlQyxVQURGLENBRXZCTixTQUFTLENBQUVJLHNCQUFVRyxNQUZFLENBR3ZCTixTQUFTLENBQUVHLHNCQUFVRyxNQUhFLENBQXhCLENBTUFULFdBQVcsQ0FBQ1UsWUFBWixDQUEyQixDQUMxQlAsU0FBUyxDQUFFLFFBRGUsQ0FBM0IsQ0FLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNPLEdBQU1RLENBQUFBLFdBQVcsQ0FBRyxRQUFkQSxDQUFBQSxXQUFjLFdBQUdWLENBQUFBLFFBQUgsT0FBR0EsUUFBSCx1QkFBYUMsU0FBYixDQUFhQSxTQUFiLDBCQUF5QixFQUF6QixpQkFBZ0NFLGdCQUFoQywrREFDMUIsZ0RBQUssU0FBUywwQkFBcUJGLFNBQXJCLENBQWQsRUFBc0RFLGdCQUF0RCxFQUNHSCxRQURILENBRDBCLENBQXBCLEMsZ0NBTVBVLFdBQVcsQ0FBQ04sU0FBWixDQUF3QixDQUN2QkosUUFBUSxDQUFFSyxzQkFBVUMsSUFBVixDQUFlQyxVQURGLENBRXZCTixTQUFTLENBQUVJLHNCQUFVRyxNQUZFLENBQXhCLENBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxHQUFNRyxDQUFBQSxRQUFRLENBQUcsUUFBWEEsQ0FBQUEsUUFBVyxXQUFHQyxDQUFBQSxJQUFILE9BQUdBLElBQUgsQ0FBU0MsR0FBVCxPQUFTQSxHQUFULENBQWNiLFFBQWQsT0FBY0EsUUFBZCx1QkFBd0JDLFNBQXhCLENBQXdCQSxTQUF4QiwwQkFBb0MsRUFBcEMsaUJBQTJDRSxnQkFBM0MsK0RBQ2hCLG1EQUNDLFNBQVMscUJBQWlCRixTQUFqQixTQUErQlcsSUFBSSxDQUFHLGtCQUFILENBQXdCLEVBQTNELFNBQWtFQyxHQUFHLENBQUcsaUJBQUgsQ0FBdUIsRUFBNUYsS0FEVixFQUVNVixnQkFGTixFQUdDLElBQUksQ0FBQyxhQUhOLEdBS0dILFFBTEgsQ0FEZ0IsQ0FBakIsQ0FVQVcsUUFBUSxDQUFDUCxTQUFULENBQXFCLENBQ3BCUSxJQUFJLENBQUVQLHNCQUFVUyxJQURJLENBRXBCRCxHQUFHLENBQUVSLHNCQUFVUyxJQUZLLENBR3BCZCxRQUFRLENBQUVLLHNCQUFVQyxJQUFWLENBQWVDLFVBSEwsQ0FJcEJOLFNBQVMsQ0FBRUksc0JBQVVHLE1BSkQsQ0FBckIsQyxhQU9lRyxRIiwic291cmNlc0NvbnRlbnQiOlsiLyohIEBnb2xkLmF1L2Zvb3RlciB2NC4wLjAgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqXG4gKiBmb290ZXIgZnVuY3Rpb25cbiAqXG4gKiBGb290ZXJzIGhlbHAgdXNlcnMgd2hvIHJlYWNoIHRoZSBib3R0b20gb2YgYSBwYWdlIHdpdGhvdXQgZmluZGluZyB3aGF0IHRoZXkgd2FudC5cbiAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5cbi8vIFRoZSBmb2xsb3dpbmcgbGluZSB3aWxsIGJlIHJlcGxhY2VkIGF1dG9tYXRpY2FsbHkgd2l0aCBnZW5lcmljIGltcG9ydHMgZm9yIHRoZSBFUzUgcGlwZWxpbmUuXG4vLyBZb3UgY2FuIHNhZmVseSBpZ25vcmUgdGhpcyBiaXQgaWYgeW91IHVzZSB0aGlzIG1vZHVsZSB3aXRoIHBhbmNha2Vcbi8vXG5pbXBvcnQgJy4uL2Nzcy9zdHlsZXMuY3NzJztcblxuXG5cbi8qKlxuICogQSBzZWN0aW9uIGZvciB0aGUgZm9vdGVyIHRoYXQgY29udGFpbnMgbmF2aWdhdGlvbmFsIGVsZW1lbnRzXG4gKlxuICogQHBhcmFtICB7bm9kZX0gICBjaGlsZHJlbiAgICAgICAgIC0gVGhlIGluc2lkZSBvZiB0aGlzIHNlY3Rpb25cbiAqIEBwYXJhbSAge3N0cmluZ30gY2xhc3NOYW1lICAgICAgICAtIEFuIGFkZGl0aW9uYWwgY2xhc3MsIG9wdGlvbmFsXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGFyaWFMYWJlbCAgICAgICAgLSBUaGUgYXJpYS1sYWJlbCBhdHRyaWJ1dGUsIG9wdGlvbmFsXG4gKiBAcGFyYW0gIHtvYmplY3R9IGF0dHJpYnV0ZU9wdGlvbnMgLSBBbnkgb3RoZXIgYXR0cmlidXRlIG9wdGlvbnNcbiAqL1xuZXhwb3J0IGNvbnN0IEFVZm9vdGVyTmF2ID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSA9ICcnLCBhcmlhTGFiZWwsIC4uLmF0dHJpYnV0ZU9wdGlvbnMgfSkgPT4gKFxuXHQ8bmF2IGNsYXNzTmFtZT17YGF1LWZvb3Rlcl9fbmF2aWdhdGlvbiAkeyBjbGFzc05hbWUgfWB9IGFyaWEtbGFiZWw9eyBhcmlhTGFiZWwgfSB7IC4uLmF0dHJpYnV0ZU9wdGlvbnMgfT5cblx0XHR7IGNoaWxkcmVuIH1cblx0PC9uYXY+XG4pO1xuXG5BVWZvb3Rlck5hdi5wcm9wVHlwZXMgPSB7XG5cdGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuXHRjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdGFyaWFMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkFVZm9vdGVyTmF2LmRlZmF1bHRQcm9wcyA9IHtcblx0YXJpYUxhYmVsOiAnZm9vdGVyJyxcbn1cblxuXG4vKipcbiAqIEEgc2VjdGlvbiBmb3IgdGhlIGZvb3RlciB0aGF0IHNpdHMgYXQgdGhlIGVuZFxuICpcbiAqIEBwYXJhbSAge25vZGV9ICAgY2hpbGRyZW4gICAgICAgICAtIFRoZSBpbnNpZGUgb2YgdGhpcyBzZWN0aW9uXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNsYXNzTmFtZSAgICAgICAgLSBBbiBhZGRpdGlvbmFsIGNsYXNzLCBvcHRpb25hbFxuICogQHBhcmFtICB7b2JqZWN0fSBhdHRyaWJ1dGVPcHRpb25zIC0gQW55IG90aGVyIGF0dHJpYnV0ZSBvcHRpb25zXG4gKi9cbmV4cG9ydCBjb25zdCBBVWZvb3RlckVuZCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgPSAnJywgLi4uYXR0cmlidXRlT3B0aW9ucyB9KSA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPXtgYXUtZm9vdGVyX19lbmQgJHsgY2xhc3NOYW1lIH1gfSB7IC4uLmF0dHJpYnV0ZU9wdGlvbnMgfT5cblx0XHR7IGNoaWxkcmVuIH1cblx0PC9kaXY+XG4pO1xuXG5BVWZvb3RlckVuZC5wcm9wVHlwZXMgPSB7XG5cdGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuXHRjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5cbi8qKlxuICogREVGQVVMVFxuICogVGhlIGZvb3RlciBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0gIHtib29sZWFufSBkYXJrICAgICAgICAgICAgIC0gQWRkIHRoZSBkYXJrIHZhcmlhdGlvbiBjbGFzcywgb3B0aW9uYWxcbiAqIEBwYXJhbSAge2Jvb2xlYW59IGFsdCAgICAgICAgICAgICAgLSBBZGQgdGhlIGFsdCB2YXJpYXRpb24gY2xhc3MsIG9wdGlvbmFsXG4gKiBAcGFyYW0gIHtub2RlfSAgICBjaGlsZHJlbiAgICAgICAgIC0gVGhlIGluc2lkZSBvZiB0aGlzIHNlY3Rpb25cbiAqIEBwYXJhbSAge3N0cmluZ30gIGNsYXNzTmFtZSAgICAgICAgLSBBbiBhZGRpdGlvbmFsIGNsYXNzLCBvcHRpb25hbFxuICogQHBhcmFtICB7b2JqZWN0fSAgYXR0cmlidXRlT3B0aW9ucyAtIEFueSBvdGhlciBhdHRyaWJ1dGUgb3B0aW9uc1xuICovXG5jb25zdCBBVWZvb3RlciA9ICh7IGRhcmssIGFsdCwgY2hpbGRyZW4sIGNsYXNzTmFtZSA9ICcnLCAuLi5hdHRyaWJ1dGVPcHRpb25zIH0pID0+IChcblx0PGZvb3RlclxuXHRcdGNsYXNzTmFtZT17IGBhdS1mb290ZXIgJHsgY2xhc3NOYW1lIH0keyBkYXJrID8gJyBhdS1mb290ZXItLWRhcmsnIDogJycgfSR7IGFsdCA/ICcgYXUtZm9vdGVyLS1hbHQnIDogJycgfSBgfVxuXHRcdHsgLi4uYXR0cmlidXRlT3B0aW9ucyB9XG5cdFx0cm9sZT1cImNvbnRlbnRpbmZvXCJcblx0PlxuXHRcdHsgY2hpbGRyZW4gfVxuXHQ8L2Zvb3Rlcj5cbik7XG5cbkFVZm9vdGVyLnByb3BUeXBlcyA9IHtcblx0ZGFyazogUHJvcFR5cGVzLmJvb2wsXG5cdGFsdDogUHJvcFR5cGVzLmJvb2wsXG5cdGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuXHRjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBVWZvb3RlcjtcbiJdfQ==