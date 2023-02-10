import React from 'react';
import { Card } from 'antd';

const Box = (props) =>
{
    return (
        <Card.Grid
          hoverable={false}
          style={{
            width: `${props.width}`,
            textAlign: props.textAlign,
          }}>
          { props.children }
        </Card.Grid>
    );
}

export default Box;
