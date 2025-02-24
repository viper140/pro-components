import { RightOutlined } from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-card';
import { Button } from 'antd';
import { useState } from 'react';

export default () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <ProCard
        title="可折叠"
        headerBordered
        collapsible
        defaultCollapsed
        onCollapse={(collapse) => console.log(collapse)}
        extra={
          <Button
            size="small"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            提交
          </Button>
        }
      >
        内容
      </ProCard>
      <ProCard
        title="可折叠-受控自定义"
        extra={
          <RightOutlined
            rotate={!collapsed ? 90 : undefined}
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          />
        }
        style={{ marginTop: 16 }}
        headerBordered
        collapsed={collapsed}
      >
        内容
      </ProCard>
      <ProCard
        title="可折叠-图标自定义"
        collapsibleIconRender={({ collapsed: buildInCollapsed }: { collapsed: boolean }) =>
          buildInCollapsed ? <span>收起 - </span> : <span>展开 - </span>
        }
        style={{ marginTop: 16 }}
        headerBordered
        collapsible
        defaultCollapsed
      >
        内容
      </ProCard>
    </>
  );
};
