import * as React from 'react';
import JsonObject from './object';
import JsonArray from './array';

export interface InnerContent {
    content: JSX.Element;
    collapsible: boolean;
    onClickHandler?: Function;
}

export class Formatter {
    static URL_PATTERN = /^(http|https):\/\/[^\s]+$/;
    private uniqueId: number = 0;
    private callbacks: Array<Function> = [];

    valueToHtml(value: any, spaces: number, level: number = -1): InnerContent {
        let valueType = typeof value;
        let output: JSX.Element | undefined;
        let id = this.uniqueId;
        level++;

        if (value == null) {
            output = <span className="null">null</span>;
        } else if (value && value.constructor === Array) {
            this.uniqueId++;

            return {
                content: <span className="array"><JsonArray json={value} spaces={spaces} level={level} clickId={id} /></span>,
                collapsible: true,
                onClickHandler: () => { this.callbacks[id](); }
            }
        } else if (valueType === 'object') {
            this.uniqueId++;

            return {
                content: <span className="object"><JsonObject json={value} spaces={spaces} level={level} clickId={id} /></span>,
                collapsible: true,
                onClickHandler: () => { this.callbacks[id](); }
            }
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

        return {
            content: output as JSX.Element,
            collapsible: false
        };
    }

    RegisterClickCallback(id: number, cb: Function) {
        this.callbacks[id] = cb;
    }
}

let formatter = new Formatter();
export default formatter;