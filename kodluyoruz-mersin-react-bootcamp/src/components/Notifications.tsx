import { BellFilled } from "@ant-design/icons";
import { List, Typography, Dropdown } from "antd";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];
const menu = (
  <List
    header={
      <span
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>Bildirimler</span>
        <button>Tümünü okundu olarak işaretle</button>
      </span>
    }
    footer={<div>Footer</div>}
    bordered={true}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <Typography.Text mark>[ITEM]</Typography.Text> {item}
      </List.Item>
    )}
  />
);

interface Props {}

const Notifications = (props: Props) => {
  return (
    <Dropdown overlay={menu}>
      <button className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        <BellFilled
          style={{
            color: "black",
            fontSize: "20px",
          }}
        />
      </button>
    </Dropdown>
  );
};

export default Notifications;
