"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));require("../css/styles.css");var _excluded=["level","size","children","className"];function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}/**
 * All heading options
 *
 * @type {Array}
 */var sizes=["au-display-xs","au-display-sm","au-display-md","au-display-lg","au-display-xl","au-display-xxl","au-display-xxxl"];/**
 * DEFAULT
 * The headings component
 *
 * @param  {string} level            - The tag level (<h1/> <h2/> etc)
 * @param  {string} size             - The headings size
 * @param  {string} children         - Anything inside
 * @param  {string} className        - An additional class, optional
 * @param  {object} attributeOptions - Any other attribute options
 */var AUheading=function AUheading(_ref){var level=_ref.level,size=_ref.size,children=_ref.children,_ref$className=_ref.className,className=_ref$className===void 0?"":_ref$className,attributeOptions=_objectWithoutProperties(_ref,_excluded);var HeadingTag="h".concat(level);return/*#__PURE__*/_react["default"].createElement(HeadingTag,_extends({className:"au-display-".concat(size," ").concat(className)},attributeOptions),children)};AUheading.propTypes={level:_propTypes["default"].oneOf(["1","2","3","4","5","6"]).isRequired,size:_propTypes["default"].oneOf(["xs","sm","md","lg","xl","xxl","xxxl"]).isRequired,children:_propTypes["default"].node.isRequired,className:_propTypes["default"].string};var _default=AUheading;exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0LmVzNS5qcyJdLCJuYW1lcyI6WyJzaXplcyIsIkFVaGVhZGluZyIsImxldmVsIiwic2l6ZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiYXR0cmlidXRlT3B0aW9ucyIsIkhlYWRpbmdUYWciLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJub2RlIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiZ0dBU0Esb0RBQ0EsNkRBTUEsNkIsa21DQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxHQUFNQSxDQUFBQSxLQUFLLENBQUcsQ0FDYixlQURhLENBRWIsZUFGYSxDQUdiLGVBSGEsQ0FJYixlQUphLENBS2IsZUFMYSxDQU1iLGdCQU5hLENBT2IsaUJBUGEsQ0FBZCxDQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsR0FBTUMsQ0FBQUEsU0FBUyxDQUFHLFFBQVpBLENBQUFBLFNBQVksTUFBb0UsSUFBakVDLENBQUFBLEtBQWlFLE1BQWpFQSxLQUFpRSxDQUExREMsSUFBMEQsTUFBMURBLElBQTBELENBQXBEQyxRQUFvRCxNQUFwREEsUUFBb0QscUJBQTFDQyxTQUEwQyxDQUExQ0EsU0FBMEMseUJBQTlCLEVBQThCLGdCQUF2QkMsZ0JBQXVCLDBDQUNyRixHQUFNQyxDQUFBQSxVQUFVLFlBQVFMLEtBQVIsQ0FBaEIsQ0FFQSxtQkFDQyxnQ0FBQyxVQUFELFdBQVksU0FBUyxzQkFBa0JDLElBQWxCLGFBQTRCRSxTQUE1QixDQUFyQixFQUFxRUMsZ0JBQXJFLEVBQTBGRixRQUExRixDQUVELENBTkQsQ0FRQUgsU0FBUyxDQUFDTyxTQUFWLENBQXNCLENBQ3JCTixLQUFLLENBQUVPLHNCQUFVQyxLQUFWLENBQWdCLENBQUUsR0FBRixDQUFPLEdBQVAsQ0FBWSxHQUFaLENBQWlCLEdBQWpCLENBQXNCLEdBQXRCLENBQTJCLEdBQTNCLENBQWhCLEVBQWtEQyxVQURwQyxDQUVyQlIsSUFBSSxDQUFFTSxzQkFBVUMsS0FBVixDQUFnQixDQUFFLElBQUYsQ0FBUSxJQUFSLENBQWMsSUFBZCxDQUFvQixJQUFwQixDQUEwQixJQUExQixDQUFnQyxLQUFoQyxDQUF1QyxNQUF2QyxDQUFoQixFQUFpRUMsVUFGbEQsQ0FHckJQLFFBQVEsQ0FBRUssc0JBQVVHLElBQVYsQ0FBZUQsVUFISixDQUlyQk4sU0FBUyxDQUFFSSxzQkFBVUksTUFKQSxDQUF0QixDLGFBT2VaLFMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgQGdvbGQuYXUvaGVhZGluZ3MgdjMuMC4wICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKlxuICogaGVhZGluZ3MgZnVuY3Rpb25cbiAqXG4gKiBDbGFzcyBzdHlsZXMgZm9yIGRpc3BsYXkgaGVhZGluZ3MuXG4gKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuXG4vLyBUaGUgZm9sbG93aW5nIGxpbmUgd2lsbCBiZSByZXBsYWNlZCBhdXRvbWF0aWNhbGx5IHdpdGggZ2VuZXJpYyBpbXBvcnRzIGZvciB0aGUgRVM1IHBpcGVsaW5lLlxuLy8gWW91IGNhbiBzYWZlbHkgaWdub3JlIHRoaXMgYml0IGlmIHlvdSB1c2UgdGhpcyBtb2R1bGUgd2l0aCBwYW5jYWtlXG4vL1xuaW1wb3J0ICcuLi9jc3Mvc3R5bGVzLmNzcyc7XG5cbi8qKlxuICogQWxsIGhlYWRpbmcgb3B0aW9uc1xuICpcbiAqIEB0eXBlIHtBcnJheX1cbiAqL1xuY29uc3Qgc2l6ZXMgPSBbXG5cdCdhdS1kaXNwbGF5LXhzJyxcblx0J2F1LWRpc3BsYXktc20nLFxuXHQnYXUtZGlzcGxheS1tZCcsXG5cdCdhdS1kaXNwbGF5LWxnJyxcblx0J2F1LWRpc3BsYXkteGwnLFxuXHQnYXUtZGlzcGxheS14eGwnLFxuXHQnYXUtZGlzcGxheS14eHhsJyxcbl07XG5cblxuLyoqXG4gKiBERUZBVUxUXG4gKiBUaGUgaGVhZGluZ3MgY29tcG9uZW50XG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBsZXZlbCAgICAgICAgICAgIC0gVGhlIHRhZyBsZXZlbCAoPGgxLz4gPGgyLz4gZXRjKVxuICogQHBhcmFtICB7c3RyaW5nfSBzaXplICAgICAgICAgICAgIC0gVGhlIGhlYWRpbmdzIHNpemVcbiAqIEBwYXJhbSAge3N0cmluZ30gY2hpbGRyZW4gICAgICAgICAtIEFueXRoaW5nIGluc2lkZVxuICogQHBhcmFtICB7c3RyaW5nfSBjbGFzc05hbWUgICAgICAgIC0gQW4gYWRkaXRpb25hbCBjbGFzcywgb3B0aW9uYWxcbiAqIEBwYXJhbSAge29iamVjdH0gYXR0cmlidXRlT3B0aW9ucyAtIEFueSBvdGhlciBhdHRyaWJ1dGUgb3B0aW9uc1xuICovXG5jb25zdCBBVWhlYWRpbmcgPSAoeyBsZXZlbCwgc2l6ZSwgY2hpbGRyZW4sIGNsYXNzTmFtZSA9ICcnLCAuLi5hdHRyaWJ1dGVPcHRpb25zIH0pID0+IHtcblx0Y29uc3QgSGVhZGluZ1RhZyA9IGBoJHsgbGV2ZWwgfWA7XG5cblx0cmV0dXJuIChcblx0XHQ8SGVhZGluZ1RhZyBjbGFzc05hbWU9eyBgYXUtZGlzcGxheS0keyBzaXplIH0gJHsgY2xhc3NOYW1lIH1gIH0geyAuLi5hdHRyaWJ1dGVPcHRpb25zIH0+eyBjaGlsZHJlbiB9PC9IZWFkaW5nVGFnPlxuXHQpO1xufTtcblxuQVVoZWFkaW5nLnByb3BUeXBlcyA9IHtcblx0bGV2ZWw6IFByb3BUeXBlcy5vbmVPZihbICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicgXSkuaXNSZXF1aXJlZCxcblx0c2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsgJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJywgJ3h4bCcsICd4eHhsJyBdKS5pc1JlcXVpcmVkLFxuXHRjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcblx0Y2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQVVoZWFkaW5nO1xuIl19