var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var React = require('react');
var Formatter_1 = require('./Formatter');
var helpers_1 = require('./helpers');
helpers_1.Core.Ensure(React);
var JsonView = (function (_super) {
    __extends(JsonView, _super);
    function JsonView() {
        _super.apply(this, arguments);
    }
    JsonView.prototype.render = function () {
        var contents = Formatter_1.default.valueToHtml(this.props.json);
        return (React.createElement("div", { className: "json-view" }, contents));
    };
    return JsonView;
})(React.Component);
exports.default = JsonView;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkpzb25WaWV3LnRzIl0sIm5hbWVzIjpbIkpzb25WaWV3IiwiSnNvblZpZXcuY29uc3RydWN0b3IiLCJKc29uVmlldy5yZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQVksS0FBSyxXQUFNLE9BQU8sQ0FBQyxDQUFBO0FBQy9CLDBCQUFzQixhQUFhLENBQUMsQ0FBQTtBQUVwQyx3QkFBcUIsV0FBVyxDQUFDLENBQUE7QUFDakMsY0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUVuQjtJQUFzQ0EsNEJBQXlCQTtJQUEvREE7UUFBc0NDLDhCQUF5QkE7SUFVL0RBLENBQUNBO0lBVEdELHlCQUFNQSxHQUFOQTtRQUNJRSxJQUFJQSxRQUFRQSxHQUFHQSxtQkFBU0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFFdERBLE1BQU1BLENBQUNBLENBQ0hBLEtBQUtBLENBQUNBLGFBQWFBLENBQUNBLEtBQUtBLEVBQUVBLEVBQUNBLFNBQVNBLEVBQUVBLFdBQVdBLEVBQUNBLEVBQy9DQSxRQUFRQSxDQUNYQSxDQUNKQSxDQUFDQTtJQUNOQSxDQUFDQTtJQUNMRixlQUFDQTtBQUFEQSxDQVZBLEFBVUNBLEVBVnFDLEtBQUssQ0FBQyxTQUFTLEVBVXBEO0FBVkQsMEJBVUMsQ0FBQSIsImZpbGUiOiJKc29uVmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZvcm1hdHRlciBmcm9tICcuL0Zvcm1hdHRlcic7XHJcbmltcG9ydCBKc29uT2JqZWN0IGZyb20gJy4vT2JqZWN0JztcclxuaW1wb3J0IHsgQ29yZSB9IGZyb20gJy4vaGVscGVycyc7XHJcbkNvcmUuRW5zdXJlKFJlYWN0KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzb25WaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IGNvbnRlbnRzID0gRm9ybWF0dGVyLnZhbHVlVG9IdG1sKHRoaXMucHJvcHMuanNvbik7XHJcblxyXG4gICAgICAgIHJldHVybiBqc3goYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpzb24tdmlld1wiPlxyXG4gICAgICAgICAgICAgICAge2NvbnRlbnRzfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==