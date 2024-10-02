"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _linkList=_interopRequireDefault(require("@gold.au/link-list"));require("../css/styles.css");var _excluded=["dark","label","items","linkComponent","className"];function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}/**
 * DEFAULT
 * The breadcrumbs component
 *
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {string}  label            - The aria label of the component
 * @param  {array}   items            - Items inside the breadcrumbs passed on to AUlinkList
 * @param  {string}  linkComponent    - The component used for the link
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */var AUbreadcrumbs=function AUbreadcrumbs(_ref){var dark=_ref.dark,label=_ref.label,items=_ref.items,linkComponent=_ref.linkComponent,_ref$className=_ref.className,className=_ref$className===void 0?"":_ref$className,attributeOptions=_objectWithoutProperties(_ref,_excluded);return/*#__PURE__*/_react["default"].createElement("nav",_extends({className:"au-breadcrumbs ".concat(className).concat(dark?" au-breadcrumbs--dark":""),"aria-label":label},attributeOptions),/*#__PURE__*/_react["default"].createElement(_linkList["default"],{inline:true,linkComponent:linkComponent,items:items}))};AUbreadcrumbs.propTypes={dark:_propTypes["default"].bool,label:_propTypes["default"].string.isRequired,items:_propTypes["default"].arrayOf(_propTypes["default"].shape({link:_propTypes["default"].string,text:_propTypes["default"].string.isRequired})).isRequired,linkComponent:_propTypes["default"].oneOfType([_propTypes["default"].string,_propTypes["default"].func])};AUbreadcrumbs.defaultProps={linkComponent:"a"};var _default=AUbreadcrumbs;exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0LmVzNS5qcyJdLCJuYW1lcyI6WyJBVWJyZWFkY3J1bWJzIiwiZGFyayIsImxhYmVsIiwiaXRlbXMiLCJsaW5rQ29tcG9uZW50IiwiY2xhc3NOYW1lIiwiYXR0cmlidXRlT3B0aW9ucyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiIsInNoYXBlIiwibGluayIsInRleHQiLCJvbmVPZlR5cGUiLCJmdW5jIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiZ0dBU0Esb0RBQ0EsNkRBRUEsb0VBT0EsNkIsK21DQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxHQUFNQSxDQUFBQSxhQUFhLENBQUcsUUFBaEJBLENBQUFBLGFBQWdCLFVBQUdDLENBQUFBLElBQUgsTUFBR0EsSUFBSCxDQUFTQyxLQUFULE1BQVNBLEtBQVQsQ0FBZ0JDLEtBQWhCLE1BQWdCQSxLQUFoQixDQUF1QkMsYUFBdkIsTUFBdUJBLGFBQXZCLHFCQUFzQ0MsU0FBdEMsQ0FBc0NBLFNBQXRDLHlCQUFrRCxFQUFsRCxnQkFBeURDLGdCQUF6RCw2REFDckIsZ0RBQ0MsU0FBUywwQkFBc0JELFNBQXRCLFNBQW9DSixJQUFJLENBQUcsdUJBQUgsQ0FBNkIsRUFBckUsQ0FEVixDQUVDLGFBQWFDLEtBRmQsRUFHTUksZ0JBSE4sZUFLQyxnQ0FBQyxvQkFBRCxFQUFZLE1BQU0sS0FBbEIsQ0FBbUIsYUFBYSxDQUFHRixhQUFuQyxDQUFtRCxLQUFLLENBQUdELEtBQTNELEVBTEQsQ0FEcUIsQ0FBdEIsQ0FVQUgsYUFBYSxDQUFDTyxTQUFkLENBQTBCLENBQ3pCTixJQUFJLENBQUVPLHNCQUFVQyxJQURTLENBRXpCUCxLQUFLLENBQUVNLHNCQUFVRSxNQUFWLENBQWlCQyxVQUZDLENBR3pCUixLQUFLLENBQUVLLHNCQUFVSSxPQUFWLENBQ05KLHNCQUFVSyxLQUFWLENBQWdCLENBQ2ZDLElBQUksQ0FBRU4sc0JBQVVFLE1BREQsQ0FFZkssSUFBSSxDQUFFUCxzQkFBVUUsTUFBVixDQUFpQkMsVUFGUixDQUFoQixDQURNLEVBS0xBLFVBUnVCLENBU3pCUCxhQUFhLENBQUVJLHNCQUFVUSxTQUFWLENBQW9CLENBQUVSLHNCQUFVRSxNQUFaLENBQW9CRixzQkFBVVMsSUFBOUIsQ0FBcEIsQ0FUVSxDQUExQixDQVlBakIsYUFBYSxDQUFDa0IsWUFBZCxDQUE2QixDQUM1QmQsYUFBYSxDQUFFLEdBRGEsQ0FBN0IsQyxhQUllSixhIiwic291cmNlc0NvbnRlbnQiOlsiLyohIEBnb2xkLmF1L2JyZWFkY3J1bWJzIHY0LjAuMCAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICpcbiAqIGJyZWFkY3J1bWJzIGZ1bmN0aW9uXG4gKlxuICogQnJlYWRjcnVtYnMgaGVscCB1c2VycyB1bmRlcnN0YW5kIHdoZXJlIHRoZXkgYXJlIGluIHRoZSBzZXJ2aWNlIGFuZCBob3cgdGhleSBnb3QgdGhlcmUuXG4gKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEFVbGlua0xpc3QgZnJvbSAnQGdvbGQuYXUvbGluay1saXN0Jztcbi8vIEVTNiBkZXBlbmRlbmN5OiBpbXBvcnQgQVVsaW5rTGlzdCBmcm9tICcuL2xpbmstbGlzdCc7XG5cblxuLy8gVGhlIGZvbGxvd2luZyBsaW5lIHdpbGwgYmUgcmVwbGFjZWQgYXV0b21hdGljYWxseSB3aXRoIGdlbmVyaWMgaW1wb3J0cyBmb3IgdGhlIEVTNSBwaXBlbGluZS5cbi8vIFlvdSBjYW4gc2FmZWx5IGlnbm9yZSB0aGlzIGJpdCBpZiB5b3UgdXNlIHRoaXMgbW9kdWxlIHdpdGggcGFuY2FrZVxuLy9cbmltcG9ydCAnLi4vY3NzL3N0eWxlcy5jc3MnO1xuXG5cbi8qKlxuICogREVGQVVMVFxuICogVGhlIGJyZWFkY3J1bWJzIGNvbXBvbmVudFxuICpcbiAqIEBwYXJhbSAge2Jvb2xlYW59IGRhcmsgICAgICAgICAgICAgLSBBZGQgdGhlIGRhcmsgdmFyaWF0aW9uIGNsYXNzLCBvcHRpb25hbFxuICogQHBhcmFtICB7c3RyaW5nfSAgbGFiZWwgICAgICAgICAgICAtIFRoZSBhcmlhIGxhYmVsIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSAge2FycmF5fSAgIGl0ZW1zICAgICAgICAgICAgLSBJdGVtcyBpbnNpZGUgdGhlIGJyZWFkY3J1bWJzIHBhc3NlZCBvbiB0byBBVWxpbmtMaXN0XG4gKiBAcGFyYW0gIHtzdHJpbmd9ICBsaW5rQ29tcG9uZW50ICAgIC0gVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgbGlua1xuICogQHBhcmFtICB7c3RyaW5nfSAgY2xhc3NOYW1lICAgICAgICAtIEFuIGFkZGl0aW9uYWwgY2xhc3MsIG9wdGlvbmFsXG4gKiBAcGFyYW0gIHtvYmplY3R9ICBhdHRyaWJ1dGVPcHRpb25zIC0gQW55IG90aGVyIGF0dHJpYnV0ZSBvcHRpb25zXG4gKi9cbmNvbnN0IEFVYnJlYWRjcnVtYnMgPSAoeyBkYXJrLCBsYWJlbCwgaXRlbXMsIGxpbmtDb21wb25lbnQsIGNsYXNzTmFtZSA9ICcnLCAuLi5hdHRyaWJ1dGVPcHRpb25zIH0pID0+IChcblx0PG5hdlxuXHRcdGNsYXNzTmFtZT17IGBhdS1icmVhZGNydW1icyAkeyBjbGFzc05hbWUgfSR7IGRhcmsgPyAnIGF1LWJyZWFkY3J1bWJzLS1kYXJrJyA6ICcnIH1gIH1cblx0XHRhcmlhLWxhYmVsPXsgbGFiZWwgfVxuXHRcdHsgLi4uYXR0cmlidXRlT3B0aW9ucyB9XG5cdD5cblx0XHQ8QVVsaW5rTGlzdCBpbmxpbmUgbGlua0NvbXBvbmVudD17IGxpbmtDb21wb25lbnQgfSBpdGVtcz17IGl0ZW1zIH0gLz5cblx0PC9uYXY+XG4pO1xuXG5BVWJyZWFkY3J1bWJzLnByb3BUeXBlcyA9IHtcblx0ZGFyazogUHJvcFR5cGVzLmJvb2wsXG5cdGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihcblx0XHRQcm9wVHlwZXMuc2hhcGUoe1xuXHRcdFx0bGluazogUHJvcFR5cGVzLnN0cmluZyxcblx0XHRcdHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHR9KVxuXHQpLmlzUmVxdWlyZWQsXG5cdGxpbmtDb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuYyBdKVxufTtcblxuQVVicmVhZGNydW1icy5kZWZhdWx0UHJvcHMgPSB7XG5cdGxpbmtDb21wb25lbnQ6ICdhJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFVYnJlYWRjcnVtYnM7XG4iXX0=