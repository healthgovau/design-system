"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));require("../css/styles.css");var _excluded=["as","alt","dark","children","className"];function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}/**
 * All different kind of alerts
 *
 * @type {Object}
 */var options={info:"au-page-alerts--info",warning:"au-page-alerts--warning",error:"au-page-alerts--error",success:"au-page-alerts--success"};/**
 * DEFAULT
 * Page alert
 *
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {boolean} alt              - Add the alt variation class, optional
 * @param  {string}  as               - What kind of alert this is, takes: 'info', 'warning', 'error', 'success'
 * @param  {node}    children         - Anything inside the component
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */var AUpageAlert=function AUpageAlert(_ref){var as=_ref.as,alt=_ref.alt,dark=_ref.dark,children=_ref.children,_ref$className=_ref.className,className=_ref$className===void 0?"":_ref$className,attributeOptions=_objectWithoutProperties(_ref,_excluded);return/*#__PURE__*/_react["default"].createElement("div",_extends({className:"au-body au-page-alerts ".concat(className," ").concat(dark?" au-page-alerts--dark au-body--dark":"").concat(alt?" au-page-alerts--alt au-body--alt":""," ").concat(options[as])},attributeOptions),children)};AUpageAlert.propTypes={as:_propTypes["default"].oneOf(["info","warning","error","success"]).isRequired,alt:_propTypes["default"].bool,dark:_propTypes["default"].bool,children:_propTypes["default"].node.isRequired,className:_propTypes["default"].string};var _default=AUpageAlert;exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0LmVzNS5qcyJdLCJuYW1lcyI6WyJvcHRpb25zIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsInN1Y2Nlc3MiLCJBVXBhZ2VBbGVydCIsImFzIiwiYWx0IiwiZGFyayIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiYXR0cmlidXRlT3B0aW9ucyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJub2RlIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiZ0dBU0Esb0RBQ0EsNkRBTUEsNkIscW1DQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxHQUFNQSxDQUFBQSxPQUFPLENBQUcsQ0FDZkMsSUFBSSxDQUFFLHNCQURTLENBRWZDLE9BQU8sQ0FBRSx5QkFGTSxDQUdmQyxLQUFLLENBQUUsdUJBSFEsQ0FJZkMsT0FBTyxDQUFFLHlCQUpNLENBQWhCLENBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNBLEdBQU1DLENBQUFBLFdBQVcsQ0FBRyxRQUFkQSxDQUFBQSxXQUFjLFVBQUdDLENBQUFBLEVBQUgsTUFBR0EsRUFBSCxDQUFPQyxHQUFQLE1BQU9BLEdBQVAsQ0FBWUMsSUFBWixNQUFZQSxJQUFaLENBQWtCQyxRQUFsQixNQUFrQkEsUUFBbEIscUJBQTRCQyxTQUE1QixDQUE0QkEsU0FBNUIseUJBQXdDLEVBQXhDLGdCQUErQ0MsZ0JBQS9DLDZEQUNuQixnREFDQyxTQUFTLGtDQUE2QkQsU0FBN0IsYUFDUkYsSUFBSSxDQUNELHFDQURDLENBRUQsRUFISyxTQUtSRCxHQUFHLENBQ0EsbUNBREEsQ0FFQSxFQVBLLGFBUUhQLE9BQU8sQ0FBRU0sRUFBRixDQVJKLENBRFYsRUFTOEJLLGdCQVQ5QixFQVdHRixRQVhILENBRG1CLENBQXBCLENBZ0JBSixXQUFXLENBQUNPLFNBQVosQ0FBd0IsQ0FDdkJOLEVBQUUsQ0FBRU8sc0JBQVVDLEtBQVYsQ0FBZ0IsQ0FBRSxNQUFGLENBQVUsU0FBVixDQUFxQixPQUFyQixDQUE4QixTQUE5QixDQUFoQixFQUEyREMsVUFEeEMsQ0FFdkJSLEdBQUcsQ0FBRU0sc0JBQVVHLElBRlEsQ0FHdkJSLElBQUksQ0FBRUssc0JBQVVHLElBSE8sQ0FJdkJQLFFBQVEsQ0FBRUksc0JBQVVJLElBQVYsQ0FBZUYsVUFKRixDQUt2QkwsU0FBUyxDQUFFRyxzQkFBVUssTUFMRSxDQUF4QixDLGFBUWViLFciLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgQGdvbGQuYXUvcGFnZS1hbGVydHMgdjMuMC4wICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKlxuICogUGFnZSBhbGVydCBmdW5jdGlvblxuICpcbiAqIFVzZSBwYWdlIGFsZXJ0IHRvIG5vdGlmeSBhbmQgYWxlcnQgdXNlcnMgb2YgaW1wb3J0YW50IGFwcGxpY2F0aW9uIGV2ZW50cy5cbiAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5cbi8vIFRoZSBmb2xsb3dpbmcgbGluZSB3aWxsIGJlIHJlcGxhY2VkIGF1dG9tYXRpY2FsbHkgd2l0aCBnZW5lcmljIGltcG9ydHMgZm9yIHRoZSBFUzUgcGlwZWxpbmUuXG4vLyBZb3UgY2FuIHNhZmVseSBpZ25vcmUgdGhpcyBiaXQgaWYgeW91IHVzZSB0aGlzIG1vZHVsZSB3aXRoIHBhbmNha2Vcbi8vXG5pbXBvcnQgJy4uL2Nzcy9zdHlsZXMuY3NzJztcblxuLyoqXG4gKiBBbGwgZGlmZmVyZW50IGtpbmQgb2YgYWxlcnRzXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqL1xuY29uc3Qgb3B0aW9ucyA9IHtcblx0aW5mbzogJ2F1LXBhZ2UtYWxlcnRzLS1pbmZvJyxcblx0d2FybmluZzogJ2F1LXBhZ2UtYWxlcnRzLS13YXJuaW5nJyxcblx0ZXJyb3I6ICdhdS1wYWdlLWFsZXJ0cy0tZXJyb3InLFxuXHRzdWNjZXNzOiAnYXUtcGFnZS1hbGVydHMtLXN1Y2Nlc3MnLFxufTtcblxuXG4vKipcbiAqIERFRkFVTFRcbiAqIFBhZ2UgYWxlcnRcbiAqXG4gKiBAcGFyYW0gIHtib29sZWFufSBkYXJrICAgICAgICAgICAgIC0gQWRkIHRoZSBkYXJrIHZhcmlhdGlvbiBjbGFzcywgb3B0aW9uYWxcbiAqIEBwYXJhbSAge2Jvb2xlYW59IGFsdCAgICAgICAgICAgICAgLSBBZGQgdGhlIGFsdCB2YXJpYXRpb24gY2xhc3MsIG9wdGlvbmFsXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICBhcyAgICAgICAgICAgICAgIC0gV2hhdCBraW5kIG9mIGFsZXJ0IHRoaXMgaXMsIHRha2VzOiAnaW5mbycsICd3YXJuaW5nJywgJ2Vycm9yJywgJ3N1Y2Nlc3MnXG4gKiBAcGFyYW0gIHtub2RlfSAgICBjaGlsZHJlbiAgICAgICAgIC0gQW55dGhpbmcgaW5zaWRlIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSAge3N0cmluZ30gIGNsYXNzTmFtZSAgICAgICAgLSBBbiBhZGRpdGlvbmFsIGNsYXNzLCBvcHRpb25hbFxuICogQHBhcmFtICB7b2JqZWN0fSAgYXR0cmlidXRlT3B0aW9ucyAtIEFueSBvdGhlciBhdHRyaWJ1dGUgb3B0aW9uc1xuICovXG5jb25zdCBBVXBhZ2VBbGVydCA9ICh7IGFzLCBhbHQsIGRhcmssIGNoaWxkcmVuLCBjbGFzc05hbWUgPSAnJywgLi4uYXR0cmlidXRlT3B0aW9ucyB9KSA9PiAoXG5cdDxkaXZcblx0XHRjbGFzc05hbWU9e2BhdS1ib2R5IGF1LXBhZ2UtYWxlcnRzICR7IGNsYXNzTmFtZSB9ICR7XG5cdFx0XHRkYXJrXG5cdFx0XHRcdD8gJyBhdS1wYWdlLWFsZXJ0cy0tZGFyayBhdS1ib2R5LS1kYXJrJ1xuXHRcdFx0XHQ6ICcnXG5cdFx0XHR9JHtcblx0XHRcdGFsdFxuXHRcdFx0XHQ/ICcgYXUtcGFnZS1hbGVydHMtLWFsdCBhdS1ib2R5LS1hbHQnXG5cdFx0XHRcdDogJydcblx0XHRcdH0gJHsgb3B0aW9uc1sgYXMgXSB9YH0geyAuLi5hdHRyaWJ1dGVPcHRpb25zIH1cblx0PlxuXHRcdHsgY2hpbGRyZW4gfVxuXHQ8L2Rpdj5cbik7XG5cbkFVcGFnZUFsZXJ0LnByb3BUeXBlcyA9IHtcblx0YXM6IFByb3BUeXBlcy5vbmVPZihbICdpbmZvJywgJ3dhcm5pbmcnLCAnZXJyb3InLCAnc3VjY2VzcycgXSkuaXNSZXF1aXJlZCxcblx0YWx0OiBQcm9wVHlwZXMuYm9vbCxcblx0ZGFyazogUHJvcFR5cGVzLmJvb2wsXG5cdGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuXHRjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBVXBhZ2VBbGVydDtcbiJdfQ==