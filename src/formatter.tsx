import * as React from 'react';
import JsonObject from './object';
import JsonArray from './array';

export default class Formatter {
    static URL_PATTERN = /^(http|https):\/\/[^\s]+$/;

    static valueToHtml(value: any, spaces: number, level: number = -1) {
        let valueType = typeof value;
        let output: JSX.Element | undefined = undefined;
        level++;

        if (value == null) {
            output = <span className="null">null</span>;
        } else if (value && value.constructor === Array) {
            output = <span className="array"><JsonArray json={value} spaces={spaces} level={level} /></span>;
        } else if (valueType === 'object') {
            output = <span className="object"><JsonObject json={value} spaces={spaces} level={level} /></span>;
        } else if (valueType === 'number') {
            output = <span className="number">{value}</span>;
        } else if (valueType === 'string') {
            if (Formatter.URL_PATTERN.test(value)) {
                output = <span className="url">
                    {'"'}
                    <a href={value} target="_blank">{value}</a>
                    {'"'}
                </span>;
            } else {
                output = <span className='string'>{`"${value}"`}</span>
            }
        } else if (valueType === 'boolean') {
            output = <span className="boolean">{value.toString()}</span>;
        }
        return output as JSX.Element;
    }
}