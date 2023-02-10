import React from "react";
import Canvas from '../../components/admin/Canvas';

const PrintCanvas = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
        <Canvas selectedItemForPrint={props.selectedItemForPrint} position={props.position} />
    </div>
  );
});

PrintCanvas.displayName = 'OSCA';

export default PrintCanvas;
