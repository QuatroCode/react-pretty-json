import * as React from 'react';
import { Core } from './helpers';
import Formatter from './formatter';
Core.Ensure(React);

interface IState {
    collapsed: boolean;
}

class ArrayComponent extends React.Component<any, any> {

    private state:IState = <IState>{
        collapsed: false
    };

    toggleCollapse(event) {
        this.state.collapsed = !this.state.collapsed;
        this.setState({collapsed: this.state.collapsed});
    }

    render() {
        let json = this.props.json;
        let hasContents = false;
        let count = json.length;
        let countLoop = count;
        let items = json.map((item) => {
            hasContents = true;
            let content = Formatter.valueToHtml(item);
            countLoop--;
            return jsx(`
                <li key={countLoop}>
                    {content}
                    {countLoop != 0? ',' : ''}
                </li>
            `);
        });

        let collapsibleClassName = 'collapsible';
        let countClassName = 'count hide';
        let collapserClassName = 'collapser';

        if(this.state.collapsed) {
            collapsibleClassName += ' collapsed';
            countClassName = 'count';
            collapserClassName += ' collapsed';
        }

        //<span className="collapser">&nbsp;</span>
        let output = jsx(`
        <div className="array">
            <span className={collapserClassName} onClick={this.toggleCollapse.bind(this)}>&nbsp;</span>
            <span className="brackets">[</span>
            <span className={countClassName}>{count}</span>
            <ul className={collapsibleClassName}>
                {items}
            </ul>
            <span className="brackets">]</span>
        </div>
        `);

        if(!hasContents) {
            let output = jsx(`<span>[ ]</span>`);
        }

        return output;
    }
}

export default ArrayComponent;