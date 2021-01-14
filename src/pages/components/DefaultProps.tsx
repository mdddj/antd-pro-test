

import { Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import * as React from 'react';


type Props = {
    lable: string,
    initDefaultCount: number
}

type State = {
    count: number
}

export class DefaultProps extends React.Component<Props, State>{


    static defaultProps = {
        initDefaultCount: 0
    };

    readonly state: State = {
        count: this.props.initDefaultCount
    }

    handleAdd = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        const { lable } = this.props;

        const { count } = this.state;
        const { handleAdd } = this;
        return (
            <div>
                <Title>{lable} :  {count}</Title>
                <Button type='primary' onClick={handleAdd}>添加1</Button>
            </div>
        );
    }
}