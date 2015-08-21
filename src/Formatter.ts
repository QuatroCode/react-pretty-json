import * as React from 'react';
import JsonObject from './Object';
import JsonArray from './Array';
import { Core } from './helpers';
Core.Ensure(React);

class Formatter {
    htmlEncode(t) {
        return t != null ? t .toString().replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : '';
    }

    decorateWithSpan(value: string, className: string) {
        return jsx(`<span className={className}>{value}</span>`);
    }

    valueToHtml(value) {
        let valueType = typeof value;
        let output;
        if (value == null) {
            output = this.decorateWithSpan('null', 'null');
        }
        else if (value && value.constructor == Array) {
            //output = this.arrayToHTML(value);
            output = jsx(`<JsonArray json={value} />`);
        }
        else if (valueType == 'object') {
            //output = this.objectToHTML(value);
            output = jsx(`<JsonObject json={value} />`);
        }
        else if (valueType == 'number') {
            output = this.decorateWithSpan(value, 'number');
        }
        else if (valueType == 'string') {
            if (/^(http|https):\/\/[^\s]+$/.test(value)) {
                output = jsx(`
                    <span className="url">"<a href={value} target="_blank">{value}</a>"</span>
                `);
            }else {
                output = this.decorateWithSpan('"' + value + '"', 'string');
            }
        }
        else if (valueType == 'boolean') {
            output = this.decorateWithSpan(value.toString(), 'bool');
        }
        return output;
    }
}

let formatter = new Formatter();
export default formatter;