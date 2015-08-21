import * as React from 'react';
import Formatter from './Formatter';
import { Core } from './helpers';
import Formatter from './formatter';
Core.Ensure(React);

interface IState {
    collapsed: boolean;
}

class ObjectComponent extends React.Component<any, any> {

    private state:IState = <IState>{
        collapsed: false
    };

    getObjectLength(object) {
        let length = 0;
        for(let key in object) {
            if(object.hasOwnProperty(key)) {
                length++;
            }
        }
        return length;
    }

    toggleCollapse(event) {
        this.state.collapsed = !this.state.collapsed;
        this.setState({collapsed: this.state.collapsed});
    }

    render() {
        let json = this.props.json;
        let hasContents = false;
        let items = [];
        let count = this.getObjectLength(json);
        let countLoop = count;

        let collapsibleClassName = 'collapsible';
        let countClassName = 'count hide';
        let collapserClassName = 'collapser';

        if(this.state.collapsed) {
            collapsibleClassName += ' collapsed';
            countClassName = 'count';
            collapserClassName += ' collapsed';
        }

        for(let item in json) {
            countLoop--;
            hasContents = true;
            let name = Formatter.htmlEncode(item);
            let content = Formatter.valueToHtml(json[item]);
            items.push(jsx(`
            <li key={countLoop}>
                <span className="property">"{name}"</span>: {content}
                {countLoop != 0 ? ',' : ''}
            </li>`));
        }

        let output = jsx(`
            <div className="object">
                <span className={collapserClassName} onClick={this.toggleCollapse.bind(this)}>&nbsp;</span>
                <span className="brackets">{'{'}</span>
                <span className={countClassName}>{count}</span>
                    <ul className={collapsibleClassName}>
                        {items}
                    </ul>
                <span className="brackets">{'}'}</span>
            </div>
        `);

        if(!hasContents) {
            output = jsx(`<span>{ }</span>`);
        }

        return output;
    }
}

export default ObjectComponent;