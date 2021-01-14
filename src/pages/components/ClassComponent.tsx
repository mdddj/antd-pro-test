import { Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import * as React from 'react';


type Props = {
    lable: string
}

type State = {
    count: number
}

export class ClassCounter extends React.Component<Props, State>{
    readonly state: State = {
        count: 0
    }

    handleAdd = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {

        const { handleAdd } = this;
        const { lable } = this.props;
        const { count } = this.state;

        return (
            <div>
                <Title level={1}>{lable} : {count}</Title>
                <Button type='primary' onClick={handleAdd}>添加1</Button>
            </div>
        );
    }
}