import { Button } from "antd";
import React from "react";
import { RightOutlined } from "@ant-design/icons";

interface Props {
  children: React.ReactNode;
  isArrowShown: boolean;
}

const N11Button = ({ children, isArrowShown, ...props }: Props) => {
  return (
    <Button
      {...props}
      style={{
        float: "right",
        fontFamily: "Arial,Helvetica,sans-serif",
        background: "black",
        color: "white",
        fontSize: "100%",
        margin: "10px",
        height: "50px",
        // padding: "15px",
        borderRadius: 10,
        fontWeight: 900,
        textAlign: "center",
      }}
    >
      {children}
      {isArrowShown && (
        <RightOutlined
          style={{
            color: "white",
            marginLeft: 10,
          }}
        />
      )}
    </Button>
  );
};

export default N11Button;
