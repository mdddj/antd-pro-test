import * as React from 'react';
import { FCCounter } from '@/pages/Socket/index';

class FCTest extends React.Component<{}, { count: number }> {
  state = { count: 0 };

  add = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <FCCounter label='数据' count={this.state.count} onIncrement={this.add}>

        </FCCounter>
      </div>
    );
  }
}
export default  FCTest;