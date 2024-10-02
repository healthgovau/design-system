"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=exports.AUlinkListItem=void 0;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));require("../css/styles.css");var _excluded=["text","link","linkComponent","li","children","onClick"],_excluded2=["inline","items","linkComponent","className"];function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}/**
 * An item inside the AUlinkList component
 *
 * @param  {node}   text             - The link Text or link html
 * @param  {string} link             - The link URL, optional
 * @param  {string} linkComponent    - The component used for the link
 * @param  {object} li               - An additional object to be spread into the wrapping element, optional
 * @param  {object} onClick          - The onClick event handler
 * @param  {object} attributeOptions - Any other attribute options, optional
 */var AUlinkListItem=function AUlinkListItem(_ref){var text=_ref.text,link=_ref.link,linkComponent=_ref.linkComponent,_ref$li=_ref.li,li=_ref$li===void 0?{}:_ref$li,children=_ref.children,onClick=_ref.onClick,attributeOptions=_objectWithoutProperties(_ref,_excluded);var LinkComponent=linkComponent;// If there is no link provided and an onClick function
if(typeof onClick==="function"){attributeOptions.onClick=onClick;// if we find an onClick event but no link we make it a link so onClick can be added (no button support yet)
if(!link){link="#"}}// If we are using a normal link
if(LinkComponent==="a"){attributeOptions.href=link}// If we are using a link component
else if(typeof LinkComponent==="function"){attributeOptions.to=link}if(link){return/*#__PURE__*/_react["default"].createElement("li",li,/*#__PURE__*/_react["default"].createElement(LinkComponent,attributeOptions,text),children)}return/*#__PURE__*/_react["default"].createElement("li",li,text,children)};exports.AUlinkListItem=AUlinkListItem;AUlinkListItem.propTypes={text:_propTypes["default"].node.isRequired,link:_propTypes["default"].string,li:_propTypes["default"].object,onClick:_propTypes["default"].func,linkComponent:_propTypes["default"].oneOfType([_propTypes["default"].string,_propTypes["default"].func])};AUlinkListItem.defaultProps={linkComponent:"a"};/**
 * DEFAULT
 * The Link List component
 *
 * @param  {array}   items            - All items inside the link list to be passed to AUlinkListItem, format: { link: '', text: '', onClick: () }
 * @param  {string}  className        - An additional class, optional
 * @param  {string}  linkComponent    - The component used for the link
 * @param  {object}  attributeOptions - Any other attribute options, optional
 */var AUlinkList=function AUlinkList(_ref2){var inline=_ref2.inline,items=_ref2.items,linkComponent=_ref2.linkComponent,_ref2$className=_ref2.className,className=_ref2$className===void 0?"":_ref2$className,attributeOptions=_objectWithoutProperties(_ref2,_excluded2);return/*#__PURE__*/_react["default"].createElement("ul",_extends({className:"au-link-list ".concat(className).concat(inline?" au-link-list--inline":"")},attributeOptions),items.map(function(item,i){return/*#__PURE__*/_react["default"].createElement(AUlinkListItem,_extends({linkComponent:linkComponent,key:i},item))}))};AUlinkList.propTypes={inline:_propTypes["default"].bool,items:_propTypes["default"].arrayOf(_propTypes["default"].shape({link:_propTypes["default"].string,text:_propTypes["default"].node.isRequired,li:_propTypes["default"].object})).isRequired,linkComponent:_propTypes["default"].oneOfType([_propTypes["default"].string,_propTypes["default"].func])};AUlinkList.defaultProps={linkComponent:"a"};var _default=AUlinkList;exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0LmVzNS5qcyJdLCJuYW1lcyI6WyJBVWxpbmtMaXN0SXRlbSIsInRleHQiLCJsaW5rIiwibGlua0NvbXBvbmVudCIsImxpIiwiY2hpbGRyZW4iLCJvbkNsaWNrIiwiYXR0cmlidXRlT3B0aW9ucyIsIkxpbmtDb21wb25lbnQiLCJocmVmIiwidG8iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsIm9iamVjdCIsImZ1bmMiLCJvbmVPZlR5cGUiLCJkZWZhdWx0UHJvcHMiLCJBVWxpbmtMaXN0IiwiaW5saW5lIiwiaXRlbXMiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiaSIsImJvb2wiLCJhcnJheU9mIiwic2hhcGUiXSwibWFwcGluZ3MiOiJ1SEFTQSxvREFDQSw2REFNQSw2Qiw4cUNBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDTyxHQUFNQSxDQUFBQSxjQUFjLENBQUcsUUFBakJBLENBQUFBLGNBQWlCLE1BQW9GLElBQWpGQyxDQUFBQSxJQUFpRixNQUFqRkEsSUFBaUYsQ0FBM0VDLElBQTJFLE1BQTNFQSxJQUEyRSxDQUFyRUMsYUFBcUUsTUFBckVBLGFBQXFFLGNBQXREQyxFQUFzRCxDQUF0REEsRUFBc0Qsa0JBQWpELEVBQWlELFNBQTdDQyxRQUE2QyxNQUE3Q0EsUUFBNkMsQ0FBbkNDLE9BQW1DLE1BQW5DQSxPQUFtQyxDQUF2QkMsZ0JBQXVCLDBDQUNqSCxHQUFNQyxDQUFBQSxhQUFhLENBQUdMLGFBQXRCLENBRUE7QUFDQSxHQUFJLE1BQU9HLENBQUFBLE9BQVAsR0FBbUIsVUFBdkIsQ0FBb0MsQ0FDbkNDLGdCQUFnQixDQUFDRCxPQUFqQixDQUEyQkEsT0FBM0IsQ0FFQTtBQUNBLEdBQUksQ0FBQ0osSUFBTCxDQUFZLENBQ1hBLElBQUksQ0FBRyxHQUNQLENBQ0QsQ0FFRDtBQUNBLEdBQUlNLGFBQWEsR0FBSyxHQUF0QixDQUE0QixDQUMzQkQsZ0JBQWdCLENBQUNFLElBQWpCLENBQXdCUCxJQUN4QixDQUNEO0FBSEEsSUFJSyxJQUFJLE1BQU9NLENBQUFBLGFBQVAsR0FBeUIsVUFBN0IsQ0FBMEMsQ0FDOUNELGdCQUFnQixDQUFDRyxFQUFqQixDQUFzQlIsSUFDdEIsQ0FFRCxHQUFJQSxJQUFKLENBQVUsQ0FDVCxtQkFDQyxxQ0FBU0UsRUFBVCxjQUNDLGdDQUFDLGFBQUQsQ0FBb0JHLGdCQUFwQixDQUF5Q04sSUFBekMsQ0FERCxDQUVHSSxRQUZILENBS0QsQ0FFRCxtQkFBUyxxQ0FBU0QsRUFBVCxDQUFnQkgsSUFBaEIsQ0FBd0JJLFFBQXhCLENBQ1QsQ0FoQ00sQyxzQ0FrQ1BMLGNBQWMsQ0FBQ1csU0FBZixDQUEyQixDQUMxQlYsSUFBSSxDQUFFVyxzQkFBVUMsSUFBVixDQUFlQyxVQURLLENBRTFCWixJQUFJLENBQUVVLHNCQUFVRyxNQUZVLENBRzFCWCxFQUFFLENBQUVRLHNCQUFVSSxNQUhZLENBSTFCVixPQUFPLENBQUVNLHNCQUFVSyxJQUpPLENBSzFCZCxhQUFhLENBQUVTLHNCQUFVTSxTQUFWLENBQW9CLENBQUVOLHNCQUFVRyxNQUFaLENBQW9CSCxzQkFBVUssSUFBOUIsQ0FBcEIsQ0FMVyxDQUEzQixDQVFBakIsY0FBYyxDQUFDbUIsWUFBZixDQUE4QixDQUM3QmhCLGFBQWEsQ0FBRSxHQURjLENBQTlCLENBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsR0FBTWlCLENBQUFBLFVBQVUsQ0FBRyxRQUFiQSxDQUFBQSxVQUFhLFdBQUdDLENBQUFBLE1BQUgsT0FBR0EsTUFBSCxDQUFXQyxLQUFYLE9BQVdBLEtBQVgsQ0FBa0JuQixhQUFsQixPQUFrQkEsYUFBbEIsdUJBQWlDb0IsU0FBakMsQ0FBaUNBLFNBQWpDLDBCQUE2QyxFQUE3QyxpQkFBb0RoQixnQkFBcEQsK0RBQ2xCLCtDQUFJLFNBQVMsd0JBQW9CZ0IsU0FBcEIsU0FBa0NGLE1BQU0sQ0FBRyx1QkFBSCxDQUE2QixFQUFyRSxDQUFiLEVBQStGZCxnQkFBL0YsRUFFRWUsS0FBSyxDQUFDRSxHQUFOLENBQ0MsU0FBRUMsSUFBRixDQUFRQyxDQUFSLHFCQUFlLGdDQUFDLGNBQUQsV0FBZ0IsYUFBYSxDQUFHdkIsYUFBaEMsQ0FBZ0QsR0FBRyxDQUFHdUIsQ0FBdEQsRUFBK0RELElBQS9ELEVBQWYsQ0FERCxDQUZGLENBRGtCLENBQW5CLENBVUFMLFVBQVUsQ0FBQ1QsU0FBWCxDQUF1QixDQUN0QlUsTUFBTSxDQUFFVCxzQkFBVWUsSUFESSxDQUV0QkwsS0FBSyxDQUFFVixzQkFBVWdCLE9BQVYsQ0FDTmhCLHNCQUFVaUIsS0FBVixDQUFnQixDQUNmM0IsSUFBSSxDQUFFVSxzQkFBVUcsTUFERCxDQUVmZCxJQUFJLENBQUVXLHNCQUFVQyxJQUFWLENBQWVDLFVBRk4sQ0FHZlYsRUFBRSxDQUFFUSxzQkFBVUksTUFIQyxDQUFoQixDQURNLEVBTUxGLFVBUm9CLENBU3RCWCxhQUFhLENBQUVTLHNCQUFVTSxTQUFWLENBQW9CLENBQUVOLHNCQUFVRyxNQUFaLENBQW9CSCxzQkFBVUssSUFBOUIsQ0FBcEIsQ0FUTyxDQUF2QixDQVlBRyxVQUFVLENBQUNELFlBQVgsQ0FBMEIsQ0FDekJoQixhQUFhLENBQUUsR0FEVSxDQUExQixDLGFBS2VpQixVIiwic291cmNlc0NvbnRlbnQiOlsiLyohIEBnb2xkLmF1L2xpbmstbGlzdCB2NC4wLjAgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqXG4gKiBsaW5rLWxpc3RzIGZ1bmN0aW9uXG4gKlxuICogQSBzaW1wbGUgbGlzdCBvZiBpbmxpbmUgbGlua3MuXG4gKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuXG4vLyBUaGUgZm9sbG93aW5nIGxpbmUgd2lsbCBiZSByZXBsYWNlZCBhdXRvbWF0aWNhbGx5IHdpdGggZ2VuZXJpYyBpbXBvcnRzIGZvciB0aGUgRVM1IHBpcGVsaW5lLlxuLy8gWW91IGNhbiBzYWZlbHkgaWdub3JlIHRoaXMgYml0IGlmIHlvdSB1c2UgdGhpcyBtb2R1bGUgd2l0aCBwYW5jYWtlXG4vL1xuaW1wb3J0ICcuLi9jc3Mvc3R5bGVzLmNzcyc7XG5cbi8qKlxuICogQW4gaXRlbSBpbnNpZGUgdGhlIEFVbGlua0xpc3QgY29tcG9uZW50XG4gKlxuICogQHBhcmFtICB7bm9kZX0gICB0ZXh0ICAgICAgICAgICAgIC0gVGhlIGxpbmsgVGV4dCBvciBsaW5rIGh0bWxcbiAqIEBwYXJhbSAge3N0cmluZ30gbGluayAgICAgICAgICAgICAtIFRoZSBsaW5rIFVSTCwgb3B0aW9uYWxcbiAqIEBwYXJhbSAge3N0cmluZ30gbGlua0NvbXBvbmVudCAgICAtIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIGxpbmtcbiAqIEBwYXJhbSAge29iamVjdH0gbGkgICAgICAgICAgICAgICAtIEFuIGFkZGl0aW9uYWwgb2JqZWN0IHRvIGJlIHNwcmVhZCBpbnRvIHRoZSB3cmFwcGluZyBlbGVtZW50LCBvcHRpb25hbFxuICogQHBhcmFtICB7b2JqZWN0fSBvbkNsaWNrICAgICAgICAgIC0gVGhlIG9uQ2xpY2sgZXZlbnQgaGFuZGxlclxuICogQHBhcmFtICB7b2JqZWN0fSBhdHRyaWJ1dGVPcHRpb25zIC0gQW55IG90aGVyIGF0dHJpYnV0ZSBvcHRpb25zLCBvcHRpb25hbFxuICovXG5leHBvcnQgY29uc3QgQVVsaW5rTGlzdEl0ZW0gPSAoeyB0ZXh0LCBsaW5rLCBsaW5rQ29tcG9uZW50LCBsaSA9IHt9LCBjaGlsZHJlbiwgb25DbGljaywgLi4uYXR0cmlidXRlT3B0aW9ucyB9KSA9PiB7XG5cdGNvbnN0IExpbmtDb21wb25lbnQgPSBsaW5rQ29tcG9uZW50O1xuXG5cdC8vIElmIHRoZXJlIGlzIG5vIGxpbmsgcHJvdmlkZWQgYW5kIGFuIG9uQ2xpY2sgZnVuY3Rpb25cblx0aWYoIHR5cGVvZiBvbkNsaWNrID09PSAnZnVuY3Rpb24nICkge1xuXHRcdGF0dHJpYnV0ZU9wdGlvbnMub25DbGljayA9IG9uQ2xpY2s7XG5cblx0XHQvLyBpZiB3ZSBmaW5kIGFuIG9uQ2xpY2sgZXZlbnQgYnV0IG5vIGxpbmsgd2UgbWFrZSBpdCBhIGxpbmsgc28gb25DbGljayBjYW4gYmUgYWRkZWQgKG5vIGJ1dHRvbiBzdXBwb3J0IHlldClcblx0XHRpZiggIWxpbmsgKSB7XG5cdFx0XHRsaW5rID0gJyMnO1xuXHRcdH1cblx0fVxuXG5cdC8vIElmIHdlIGFyZSB1c2luZyBhIG5vcm1hbCBsaW5rXG5cdGlmKCBMaW5rQ29tcG9uZW50ID09PSAnYScgKSB7XG5cdFx0YXR0cmlidXRlT3B0aW9ucy5ocmVmID0gbGluaztcblx0fVxuXHQvLyBJZiB3ZSBhcmUgdXNpbmcgYSBsaW5rIGNvbXBvbmVudFxuXHRlbHNlIGlmKCB0eXBlb2YgTGlua0NvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJyApIHtcblx0XHRhdHRyaWJ1dGVPcHRpb25zLnRvID0gbGluaztcblx0fVxuXG5cdGlmKCBsaW5rICl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxsaSB7IC4uLmxpIH0+XG5cdFx0XHRcdDxMaW5rQ29tcG9uZW50IHsgLi4uYXR0cmlidXRlT3B0aW9ucyB9PnsgdGV4dCB9PC9MaW5rQ29tcG9uZW50PlxuXHRcdFx0XHR7IGNoaWxkcmVuIH1cblx0XHRcdDwvbGk+XG5cdFx0KVxuXHR9XG5cblx0cmV0dXJuICggPGxpIHsgLi4ubGkgfT57IHRleHQgfXsgY2hpbGRyZW4gfTwvbGk+ICk7XG59O1xuXG5BVWxpbmtMaXN0SXRlbS5wcm9wVHlwZXMgPSB7XG5cdHRleHQ6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cdGxpbms6IFByb3BUeXBlcy5zdHJpbmcsXG5cdGxpOiBQcm9wVHlwZXMub2JqZWN0LFxuXHRvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcblx0bGlua0NvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jIF0pXG59O1xuXG5BVWxpbmtMaXN0SXRlbS5kZWZhdWx0UHJvcHMgPSB7XG5cdGxpbmtDb21wb25lbnQ6IFwiYVwiLFxufTtcblxuXG4vKipcbiAqIERFRkFVTFRcbiAqIFRoZSBMaW5rIExpc3QgY29tcG9uZW50XG4gKlxuICogQHBhcmFtICB7YXJyYXl9ICAgaXRlbXMgICAgICAgICAgICAtIEFsbCBpdGVtcyBpbnNpZGUgdGhlIGxpbmsgbGlzdCB0byBiZSBwYXNzZWQgdG8gQVVsaW5rTGlzdEl0ZW0sIGZvcm1hdDogeyBsaW5rOiAnJywgdGV4dDogJycsIG9uQ2xpY2s6ICgpIH1cbiAqIEBwYXJhbSAge3N0cmluZ30gIGNsYXNzTmFtZSAgICAgICAgLSBBbiBhZGRpdGlvbmFsIGNsYXNzLCBvcHRpb25hbFxuICogQHBhcmFtICB7c3RyaW5nfSAgbGlua0NvbXBvbmVudCAgICAtIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIGxpbmtcbiAqIEBwYXJhbSAge29iamVjdH0gIGF0dHJpYnV0ZU9wdGlvbnMgLSBBbnkgb3RoZXIgYXR0cmlidXRlIG9wdGlvbnMsIG9wdGlvbmFsXG4gKi9cbmNvbnN0IEFVbGlua0xpc3QgPSAoeyBpbmxpbmUsIGl0ZW1zLCBsaW5rQ29tcG9uZW50LCBjbGFzc05hbWUgPSAnJywgLi4uYXR0cmlidXRlT3B0aW9ucyB9KSA9PiAoXG5cdDx1bCBjbGFzc05hbWU9eyBgYXUtbGluay1saXN0ICR7IGNsYXNzTmFtZSB9JHsgaW5saW5lID8gJyBhdS1saW5rLWxpc3QtLWlubGluZScgOiAnJyB9YCB9IHsgLi4uYXR0cmlidXRlT3B0aW9ucyB9PlxuXHRcdHtcblx0XHRcdGl0ZW1zLm1hcChcblx0XHRcdFx0KCBpdGVtLCBpICkgPT4gPEFVbGlua0xpc3RJdGVtIGxpbmtDb21wb25lbnQ9eyBsaW5rQ29tcG9uZW50IH0ga2V5PXsgaSB9IHsgLi4uaXRlbSB9IC8+XG5cdFx0XHQpXG5cdFx0fVxuXHQ8L3VsPlxuKTtcblxuQVVsaW5rTGlzdC5wcm9wVHlwZXMgPSB7XG5cdGlubGluZTogUHJvcFR5cGVzLmJvb2wsXG5cdGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihcblx0XHRQcm9wVHlwZXMuc2hhcGUoe1xuXHRcdFx0bGluazogUHJvcFR5cGVzLnN0cmluZyxcblx0XHRcdHRleHQ6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cdFx0XHRsaTogUHJvcFR5cGVzLm9iamVjdCxcblx0XHR9KVxuXHQpLmlzUmVxdWlyZWQsXG5cdGxpbmtDb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuYyBdKVxufTtcblxuQVVsaW5rTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG5cdGxpbmtDb21wb25lbnQ6IFwiYVwiLFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBBVWxpbmtMaXN0O1xuIl19