import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

const ImageCard = ({ width, caption, description, imgUrl }) => {

    console.log(width);
    return (
        <Card
            hoverable
            cover={<img alt={`${description}`} src={`${imgUrl}`} />}
            bodyStyle={{
                width: width,
                textAlign: 'center',
            }}
          >
            <Meta style={{ fontSize: '100pt' }} className="text-3xl" title={`${caption}`} description={`${description}`} />
        </Card>
    );
}

export default ImageCard;
