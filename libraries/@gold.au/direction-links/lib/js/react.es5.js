"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));require("../css/styles.css");var _excluded=["linkComponent","dark","link","text","direction","className"];function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}/**
 * All direction options
 *
 * @type {Object}
 */var directions={up:"au-direction-link__arrow--up",right:"au-direction-link__arrow--right",down:"au-direction-link__arrow--down",left:"au-direction-link__arrow--left"};/**
 * DEFAULT
 * The direction-links component
 *
 * @param  {string}  linkComponent    - The component used for the link
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {string}  link             - The link target, optional
 * @param  {string}  text             - The text of the CTA link
 * @param  {string}  direction        - The direction for the arrow; can be either: up right down left, default: 'right'
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */var AUdirectionLink=function AUdirectionLink(_ref){var linkComponent=_ref.linkComponent,dark=_ref.dark,link=_ref.link,text=_ref.text,direction=_ref.direction,_ref$className=_ref.className,className=_ref$className===void 0?"":_ref$className,attributeOptions=_objectWithoutProperties(_ref,_excluded);var LinkComponent=linkComponent;if(link){// If we are using a normal link
if(LinkComponent==="a"){attributeOptions.href=link}// If we are using a link component
else if(typeof LinkComponent==="function"){attributeOptions.to=link}return/*#__PURE__*/_react["default"].createElement(LinkComponent,_extends({className:"au-direction-link ".concat(className," ").concat(dark?" au-direction-link--dark":"")},attributeOptions),/*#__PURE__*/_react["default"].createElement(AUdirectionLinkInner,{direction:direction,text:text}))}else{return/*#__PURE__*/_react["default"].createElement("button",_extends({className:"au-direction-link ".concat(className," ").concat(dark?" au-direction-link--dark":"")},attributeOptions),/*#__PURE__*/_react["default"].createElement(AUdirectionLinkInner,{direction:direction,text:text}))}};AUdirectionLink.propTypes={dark:_propTypes["default"].bool,link:_propTypes["default"].string,text:_propTypes["default"].string.isRequired,direction:_propTypes["default"].oneOf(["up","right","down","left"]).isRequired,className:_propTypes["default"].string,linkComponent:_propTypes["default"].oneOfType([_propTypes["default"].string,_propTypes["default"].func])};AUdirectionLink.defaultProps={direction:"right",linkComponent:"a"};/**
 * The inner contents of the direction link. Includes the text and and the arrow.
 * @param  {string}  text             - The text of the direction link
 * @param  {string}  direction        - The direction for the arrow; can be either: up right down left, default: 'right'
 */var AUdirectionLinkInner=function AUdirectionLinkInner(_ref2){var direction=_ref2.direction,text=_ref2.text;if(direction==="left"){return/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement("span",{className:"au-direction-link__arrow ".concat(directions[direction]," "),"aria-hidden":"true"}),text)}else{return/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,text," ",/*#__PURE__*/_react["default"].createElement("span",{className:"au-direction-link__arrow ".concat(directions[direction]," "),"aria-hidden":"true"}))}};AUdirectionLinkInner.propTypes={direction:_propTypes["default"].oneOf(["up","down","left","right"]).isRequired,text:_propTypes["default"].string.isRequired};AUdirectionLinkInner.defaultProps={};var _default=AUdirectionLink;exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0LmVzNS5qcyJdLCJuYW1lcyI6WyJkaXJlY3Rpb25zIiwidXAiLCJyaWdodCIsImRvd24iLCJsZWZ0IiwiQVVkaXJlY3Rpb25MaW5rIiwibGlua0NvbXBvbmVudCIsImRhcmsiLCJsaW5rIiwidGV4dCIsImRpcmVjdGlvbiIsImNsYXNzTmFtZSIsImF0dHJpYnV0ZU9wdGlvbnMiLCJMaW5rQ29tcG9uZW50IiwiaHJlZiIsInRvIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJvbmVPZiIsIm9uZU9mVHlwZSIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJBVWRpcmVjdGlvbkxpbmtJbm5lciJdLCJtYXBwaW5ncyI6ImdHQVNBLG9EQUNBLDZEQU1BLDZCLHluQ0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsR0FBTUEsQ0FBQUEsVUFBVSxDQUFHLENBQ2xCQyxFQUFFLENBQUUsOEJBRGMsQ0FFbEJDLEtBQUssQ0FBRSxpQ0FGVyxDQUdsQkMsSUFBSSxDQUFFLGdDQUhZLENBSWxCQyxJQUFJLENBQUUsZ0NBSlksQ0FBbkIsQ0FRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxHQUFNQyxDQUFBQSxlQUFlLENBQUcsUUFBbEJBLENBQUFBLGVBQWtCLE1BQXlGLElBQXRGQyxDQUFBQSxhQUFzRixNQUF0RkEsYUFBc0YsQ0FBdkVDLElBQXVFLE1BQXZFQSxJQUF1RSxDQUFqRUMsSUFBaUUsTUFBakVBLElBQWlFLENBQTNEQyxJQUEyRCxNQUEzREEsSUFBMkQsQ0FBckRDLFNBQXFELE1BQXJEQSxTQUFxRCxxQkFBMUNDLFNBQTBDLENBQTFDQSxTQUEwQyx5QkFBOUIsRUFBOEIsZ0JBQXZCQyxnQkFBdUIsMENBQ2hILEdBQU1DLENBQUFBLGFBQWEsQ0FBR1AsYUFBdEIsQ0FFQSxHQUFJRSxJQUFKLENBQVcsQ0FDVjtBQUNBLEdBQUlLLGFBQWEsR0FBSyxHQUF0QixDQUE0QixDQUMzQkQsZ0JBQWdCLENBQUNFLElBQWpCLENBQXdCTixJQUN4QixDQUNEO0FBSEEsSUFJSyxJQUFJLE1BQU9LLENBQUFBLGFBQVAsR0FBeUIsVUFBN0IsQ0FBMEMsQ0FDOUNELGdCQUFnQixDQUFDRyxFQUFqQixDQUFzQlAsSUFDdEIsQ0FDRCxtQkFDQyxnQ0FBQyxhQUFELFdBQ0MsU0FBUyw2QkFBeUJHLFNBQXpCLGFBQXdDSixJQUFJLENBQUcsMEJBQUgsQ0FBZ0MsRUFBNUUsQ0FEVixFQUVNSyxnQkFGTixlQUdPLGdDQUFDLG9CQUFELEVBQXNCLFNBQVMsQ0FBR0YsU0FBbEMsQ0FBOEMsSUFBSSxDQUFFRCxJQUFwRCxFQUhQLENBTUEsQ0FoQkYsSUFpQkssQ0FDSixtQkFDQyxtREFBUSxTQUFTLDZCQUF5QkUsU0FBekIsYUFBd0NKLElBQUksQ0FBRywwQkFBSCxDQUFnQyxFQUE1RSxDQUFqQixFQUNTSyxnQkFEVCxlQUVJLGdDQUFDLG9CQUFELEVBQXNCLFNBQVMsQ0FBR0YsU0FBbEMsQ0FBOEMsSUFBSSxDQUFFRCxJQUFwRCxFQUZKLENBS0QsQ0FHRCxDQTlCRCxDQWdDQUosZUFBZSxDQUFDVyxTQUFoQixDQUE0QixDQUMzQlQsSUFBSSxDQUFFVSxzQkFBVUMsSUFEVyxDQUUzQlYsSUFBSSxDQUFFUyxzQkFBVUUsTUFGVyxDQUczQlYsSUFBSSxDQUFFUSxzQkFBVUUsTUFBVixDQUFpQkMsVUFISSxDQUkzQlYsU0FBUyxDQUFFTyxzQkFBVUksS0FBVixDQUFnQixDQUFFLElBQUYsQ0FBUSxPQUFSLENBQWlCLE1BQWpCLENBQXlCLE1BQXpCLENBQWhCLEVBQW1ERCxVQUpuQyxDQUszQlQsU0FBUyxDQUFFTSxzQkFBVUUsTUFMTSxDQU0zQmIsYUFBYSxDQUFFVyxzQkFBVUssU0FBVixDQUFvQixDQUFFTCxzQkFBVUUsTUFBWixDQUFvQkYsc0JBQVVNLElBQTlCLENBQXBCLENBTlksQ0FBNUIsQ0FTQWxCLGVBQWUsQ0FBQ21CLFlBQWhCLENBQStCLENBQzlCZCxTQUFTLENBQUUsT0FEbUIsQ0FFOUJKLGFBQWEsQ0FBRSxHQUZlLENBQS9CLENBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNBLEdBQU1tQixDQUFBQSxvQkFBb0IsQ0FBRyxRQUF2QkEsQ0FBQUEsb0JBQXVCLE9BQXlCLElBQXRCZixDQUFBQSxTQUFzQixPQUF0QkEsU0FBc0IsQ0FBWEQsSUFBVyxPQUFYQSxJQUFXLENBQ3JELEdBQUtDLFNBQVMsR0FBSyxNQUFuQixDQUE0QixDQUMzQixtQkFDRSxnQ0FBQyxpQkFBRCxDQUFPLFFBQVAsbUJBQ0Msd0NBQU0sU0FBUyxvQ0FBZ0NWLFVBQVUsQ0FBRVUsU0FBRixDQUExQyxLQUFmLENBQTRFLGNBQVksTUFBeEYsRUFERCxDQUN3R0QsSUFEeEcsQ0FJRixDQU5ELElBT0ssQ0FDSixtQkFDQyxnQ0FBQyxpQkFBRCxDQUFPLFFBQVAsTUFDRUEsSUFERixrQkFDUSx3Q0FBTSxTQUFTLG9DQUFnQ1QsVUFBVSxDQUFFVSxTQUFGLENBQTFDLEtBQWYsQ0FBNEUsY0FBWSxNQUF4RixFQURSLENBSUQsQ0FDRCxDQWZELENBaUJBZSxvQkFBb0IsQ0FBQ1QsU0FBckIsQ0FBaUMsQ0FDaENOLFNBQVMsQ0FBRU8sc0JBQVVJLEtBQVYsQ0FBZ0IsQ0FBRSxJQUFGLENBQVEsTUFBUixDQUFnQixNQUFoQixDQUF3QixPQUF4QixDQUFoQixFQUFtREQsVUFEOUIsQ0FFaENYLElBQUksQ0FBRVEsc0JBQVVFLE1BQVYsQ0FBaUJDLFVBRlMsQ0FBakMsQ0FLQUssb0JBQW9CLENBQUNELFlBQXJCLENBQW9DLEVBQXBDLEMsYUFJZW5CLGUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgQGdvbGQuYXUvZGlyZWN0aW9uLWxpbmtzIHY0LjAuMCAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICpcbiAqIGRpcmVjdGlvbi1saW5rcyBmdW5jdGlvblxuICpcbiAqIFVzZSBkaXJlY3Rpb24gbGlua3MgdG8gbGluayB1cCBhbmQgZG93biB3aXRoaW4gdGhlIERPTSBvciBiYWNrIHRvIGEgcGFyZW50IHBhZ2UuXG4gKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuXG4vLyBUaGUgZm9sbG93aW5nIGxpbmUgd2lsbCBiZSByZXBsYWNlZCBhdXRvbWF0aWNhbGx5IHdpdGggZ2VuZXJpYyBpbXBvcnRzIGZvciB0aGUgRVM1IHBpcGVsaW5lLlxuLy8gWW91IGNhbiBzYWZlbHkgaWdub3JlIHRoaXMgYml0IGlmIHlvdSB1c2UgdGhpcyBtb2R1bGUgd2l0aCBwYW5jYWtlXG4vL1xuaW1wb3J0ICcuLi9jc3Mvc3R5bGVzLmNzcyc7XG5cblxuLyoqXG4gKiBBbGwgZGlyZWN0aW9uIG9wdGlvbnNcbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5jb25zdCBkaXJlY3Rpb25zID0ge1xuXHR1cDogJ2F1LWRpcmVjdGlvbi1saW5rX19hcnJvdy0tdXAnLFxuXHRyaWdodDogJ2F1LWRpcmVjdGlvbi1saW5rX19hcnJvdy0tcmlnaHQnLFxuXHRkb3duOiAnYXUtZGlyZWN0aW9uLWxpbmtfX2Fycm93LS1kb3duJyxcblx0bGVmdDogJ2F1LWRpcmVjdGlvbi1saW5rX19hcnJvdy0tbGVmdCcsXG59O1xuXG5cbi8qKlxuICogREVGQVVMVFxuICogVGhlIGRpcmVjdGlvbi1saW5rcyBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICBsaW5rQ29tcG9uZW50ICAgIC0gVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgbGlua1xuICogQHBhcmFtICB7Ym9vbGVhbn0gZGFyayAgICAgICAgICAgICAtIEFkZCB0aGUgZGFyayB2YXJpYXRpb24gY2xhc3MsIG9wdGlvbmFsXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICBsaW5rICAgICAgICAgICAgIC0gVGhlIGxpbmsgdGFyZ2V0LCBvcHRpb25hbFxuICogQHBhcmFtICB7c3RyaW5nfSAgdGV4dCAgICAgICAgICAgICAtIFRoZSB0ZXh0IG9mIHRoZSBDVEEgbGlua1xuICogQHBhcmFtICB7c3RyaW5nfSAgZGlyZWN0aW9uICAgICAgICAtIFRoZSBkaXJlY3Rpb24gZm9yIHRoZSBhcnJvdzsgY2FuIGJlIGVpdGhlcjogdXAgcmlnaHQgZG93biBsZWZ0LCBkZWZhdWx0OiAncmlnaHQnXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICBjbGFzc05hbWUgICAgICAgIC0gQW4gYWRkaXRpb25hbCBjbGFzcywgb3B0aW9uYWxcbiAqIEBwYXJhbSAge29iamVjdH0gIGF0dHJpYnV0ZU9wdGlvbnMgLSBBbnkgb3RoZXIgYXR0cmlidXRlIG9wdGlvbnNcbiAqL1xuY29uc3QgQVVkaXJlY3Rpb25MaW5rID0gKHsgbGlua0NvbXBvbmVudCwgZGFyaywgbGluaywgdGV4dCwgZGlyZWN0aW9uLCBjbGFzc05hbWUgPSAnJywgLi4uYXR0cmlidXRlT3B0aW9ucyB9KSA9PiB7XG5cdGNvbnN0IExpbmtDb21wb25lbnQgPSBsaW5rQ29tcG9uZW50O1xuXG5cdGlmKCBsaW5rICkge1xuXHRcdC8vIElmIHdlIGFyZSB1c2luZyBhIG5vcm1hbCBsaW5rXG5cdFx0aWYoIExpbmtDb21wb25lbnQgPT09ICdhJyApIHtcblx0XHRcdGF0dHJpYnV0ZU9wdGlvbnMuaHJlZiA9IGxpbms7XG5cdFx0fVxuXHRcdC8vIElmIHdlIGFyZSB1c2luZyBhIGxpbmsgY29tcG9uZW50XG5cdFx0ZWxzZSBpZiggdHlwZW9mIExpbmtDb21wb25lbnQgPT09ICdmdW5jdGlvbicgKSB7XG5cdFx0XHRhdHRyaWJ1dGVPcHRpb25zLnRvID0gbGluaztcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxMaW5rQ29tcG9uZW50XG5cdFx0XHRcdGNsYXNzTmFtZT17IGBhdS1kaXJlY3Rpb24tbGluayAkeyBjbGFzc05hbWUgfSAkeyBkYXJrID8gJyBhdS1kaXJlY3Rpb24tbGluay0tZGFyaycgOiAnJyB9YH1cblx0XHRcdFx0eyAuLi5hdHRyaWJ1dGVPcHRpb25zIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxBVWRpcmVjdGlvbkxpbmtJbm5lciBkaXJlY3Rpb249eyBkaXJlY3Rpb24gfSB0ZXh0PXt0ZXh0fSAvPlxuXHRcdFx0PC9MaW5rQ29tcG9uZW50PlxuXHRcdCk7XG5cdFx0fVxuXHRlbHNlIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9eyBgYXUtZGlyZWN0aW9uLWxpbmsgJHsgY2xhc3NOYW1lIH0gJHsgZGFyayA/ICcgYXUtZGlyZWN0aW9uLWxpbmstLWRhcmsnIDogJycgfWB9XG5cdFx0XHRcdFx0XHRcdHsgLi4uYXR0cmlidXRlT3B0aW9ucyB9PlxuXHRcdFx0XHRcdFx0XHQ8QVVkaXJlY3Rpb25MaW5rSW5uZXIgZGlyZWN0aW9uPXsgZGlyZWN0aW9uIH0gdGV4dD17dGV4dH0gLz5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdCk7XG5cdH1cblxuXG59O1xuXG5BVWRpcmVjdGlvbkxpbmsucHJvcFR5cGVzID0ge1xuXHRkYXJrOiBQcm9wVHlwZXMuYm9vbCxcblx0bGluazogUHJvcFR5cGVzLnN0cmluZyxcblx0dGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRkaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbICd1cCcsICdyaWdodCcsICdkb3duJywgJ2xlZnQnIF0pLmlzUmVxdWlyZWQsXG5cdGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblx0bGlua0NvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jIF0pXG59O1xuXG5BVWRpcmVjdGlvbkxpbmsuZGVmYXVsdFByb3BzID0ge1xuXHRkaXJlY3Rpb246ICdyaWdodCcsXG5cdGxpbmtDb21wb25lbnQ6ICdhJyxcbn07XG5cbi8qKlxuICogVGhlIGlubmVyIGNvbnRlbnRzIG9mIHRoZSBkaXJlY3Rpb24gbGluay4gSW5jbHVkZXMgdGhlIHRleHQgYW5kIGFuZCB0aGUgYXJyb3cuXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICB0ZXh0ICAgICAgICAgICAgIC0gVGhlIHRleHQgb2YgdGhlIGRpcmVjdGlvbiBsaW5rXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICBkaXJlY3Rpb24gICAgICAgIC0gVGhlIGRpcmVjdGlvbiBmb3IgdGhlIGFycm93OyBjYW4gYmUgZWl0aGVyOiB1cCByaWdodCBkb3duIGxlZnQsIGRlZmF1bHQ6ICdyaWdodCdcbiAqL1xuY29uc3QgQVVkaXJlY3Rpb25MaW5rSW5uZXIgPSAoeyBkaXJlY3Rpb24sIHRleHQgfSkgPT4ge1xuXHRpZiAoIGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIgKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdCA8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdCA8c3BhbiBjbGFzc05hbWU9eyBgYXUtZGlyZWN0aW9uLWxpbmtfX2Fycm93ICR7IGRpcmVjdGlvbnNbIGRpcmVjdGlvbiBdIH0gYH0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPnt0ZXh0fVxuXHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdClcblx0fVxuXHRlbHNlIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHR7dGV4dH0gPHNwYW4gY2xhc3NOYW1lPXsgYGF1LWRpcmVjdGlvbi1saW5rX19hcnJvdyAkeyBkaXJlY3Rpb25zWyBkaXJlY3Rpb24gXSB9IGB9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0KVxuXHR9XG59O1xuXG5BVWRpcmVjdGlvbkxpbmtJbm5lci5wcm9wVHlwZXMgPSB7XG5cdGRpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsgJ3VwJywgJ2Rvd24nLCAnbGVmdCcsICdyaWdodCcgXSkuaXNSZXF1aXJlZCxcblx0dGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59XG5cbkFVZGlyZWN0aW9uTGlua0lubmVyLmRlZmF1bHRQcm9wcyA9IHtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBBVWRpcmVjdGlvbkxpbms7XG4iXX0=