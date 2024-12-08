import React, { useState } from "react";
import { Button, Space, Tooltip } from "antd";
const TooltipUi = () => {
  const [disabled, setDisabled] = useState(true);
  return (
    <Space>
      <Button onClick={() => setDisabled(!disabled)}>
        {disabled ? "Enable" : "Disable"}
      </Button>
      <Tooltip title={disabled ? "" : "prompt text"}>
        <span>Tooltip will show on mouse enter.</span>
      </Tooltip>
    </Space>
  );
};
export default TooltipUi;
