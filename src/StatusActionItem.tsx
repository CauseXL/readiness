import React, { FC, memo, ReactElement, useCallback, useState } from 'react';
import { CloseOutlined, DownOutlined } from '@ant-design/icons';
import { MenuProps, message, Popconfirm } from 'antd';
import { Button, Dropdown } from 'antd';
import { useRecoilState } from 'recoil';
import { detailRefreshFuncState } from './store';

export type StatusType = 'green' | 'yellow' | 'red' | 'gray' | 'empty';

// * ------------------------------------------------

const RedStatus: FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick: MenuProps['onClick'] = e => {
    console.log('click', e);
  };

  const handleOpenChange = (flag: boolean) => {
    setIsOpen(flag);
  }

  const onConfirm = () => {
    setIsOpen(false);
  }

  const items: MenuProps['items'] = [
    {
      label: (
        <Popconfirm placement="bottomLeft" title="确认修改状态吗？"  okText="Yes" cancelText="No" onConfirm={onConfirm} >
          <div style={{ display: 'flex', justifyContent: 'center', minWidth: 42 }} >
            <StatusItem type="gray" />
          </div>
        </Popconfirm>
      ),
      key: '1',
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div className="status-action">
      <div className="status-action-item">
        <StatusItem type="red" />
      </div>
      <div className="status-action-item-dropdown">
        <Dropdown menu={menuProps} trigger={['click']} open={isOpen} onOpenChange={handleOpenChange}>
          <Button className="status-action-item-button">
            <div className="status-action-item-button-container">
              <StatusItem type="red" />
              <DownOutlined className="status-action-item-icon" />
            </div>
          </Button>
        </Dropdown>
      </div>
    </div>
  )
})

// * ------------------------------------------------

const GrayStatus: FC = memo(() => {
  const [detailRefresh, setDetailRefresh] = useRecoilState(detailRefreshFuncState);

  const onConfirm = () => {
    console.log('onConfirm')
    console.log('===== debug bf5b0f ======', detailRefresh)
    detailRefresh?.();
  }
  
  return (
    <div className="status-action">
      <div className="status-action-item">
        <StatusItem type="gray" />
      </div>
      <div className="status-action-item-dropdown">
        <Popconfirm placement="bottomLeft" title="确认修改状态吗？" okText="Yes" cancelText="No" onConfirm={onConfirm} >
          <Button className="status-action-item-button">
            <div className="status-action-item-button-container">
              <StatusItem type="gray" />
              <CloseOutlined className="status-action-item-icon" />
            </div>
          </Button>
        </Popconfirm>
      </div>
    </div>
  )
})

// * ------------------------------------------------

const GreenStatus: FC<{id: number; blockName: string}> = memo(({ id, blockName }) => {
  const handleClick = useCallback(
    () => {
      if (true) {
        return message.warning('暂无权限查看Portal！');
      }
      location.href = `/${Math.random()}/${id}#${blockName}`;
    },
    [],
  )

  return (
    <div className="status-action-item status-action-item--green" onClick={handleClick} >
      <StatusItem type="green" />
    </div>
  )
})

// * ------------------------------------------------

const YellowStatus: FC = () => {
  return (
    <StatusItem type="yellow" />
  )
}

const EmptyStatus: FC = () => {
  return (
    <StatusItem type="empty" />
  )
}


const StatusItem: FC<{ type: StatusType }> = ({ type }) => {
  return (
    <span className={`vertical-middle status_circle status_circle--large status_circle--${type}`}></span>
  );
};


export const StatusActionItem: FC<{ type: StatusType }> = memo(({ type }) => {
  const map: Record<StatusType, ReactElement> = {
    'green': <GreenStatus id={1} blockName="123" />,
    'red': <RedStatus />,
    'gray': <GrayStatus />,
    'yellow': <YellowStatus />,
    'empty': <EmptyStatus />,
  }
  return (map[type]);
});
