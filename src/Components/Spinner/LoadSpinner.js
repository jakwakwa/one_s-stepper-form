import { Space, Spin } from "antd";
import React from "react";

const LoadSpinner: React.FC = () => (
  <>
    <h3
      style={{
        textAlign: "center",
        paddingTop: "20vh",
        textTransform: "uppercase",
        fontSize: "10px !important",
        width: "100%",
      }}
    >
      Loading Data from the API
    </h3>
    <Space size="large">
      <div>
        <Spin size="large" />
      </div>
    </Space>
  </>
);

export default LoadSpinner;
