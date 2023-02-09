import React, { FC } from 'react';
import { Popover } from 'antd';

type StatusType = 'green' | 'yellow' | 'red' | 'gray' | 'empty';

interface StatusItem {
  name: string;
  type: StatusType;
  desc: string;
}

const StatusItem: FC<{ item: StatusItem }> = ({ item }) => {
  const content = (
    <div className="display-center">
      <span className={`mr-8 status_circle status_circle--large status_circle--${item.type}`}></span>
      <span className="status_popover_desc">{item.desc}</span>
    </div>
  )
  return (
    <Popover placement="topLeft" content={content}>
      <span className="status_info_item">
        <span className={`mr-4 status_circle status_circle--${item.type}`}></span>
        {item.name}
      </span>
    </Popover>
  );
};

const STATUS_LIST: StatusItem[] = [
  {
    name: '素材已上传',
    type: 'green',
    desc: '一个type页下方上传”待发布/已发布“状态1个素材，即为',
  },
  {
    name: '素材缺失(未超期)',
    type: 'yellow',
    desc: '离上架时间大于2.5个月，未上传”待发布/已发布“状态的素材，即为'
  },
  {
    name: '素材缺失(即将超期)',
    type: 'red',
    desc: '离上架时间少于2.5个月，未上传”待发布/已发布“状态的素材，即为'
  },
  {
    name: '无需素材',
    type: 'gray',
    desc: '当前Type页无需素材'
  },
  {
    name: '字段被删除',
    type: 'empty',
    desc: '当前Type页字段被删除'
  },
];

export const StatusInfo: FC = () => {
  return (
    <div className="status_info_container">
      <strong className="mr-8">状态定义</strong>
      { STATUS_LIST.map(item => (<StatusItem key={item.type} item={item} />)) }
    </div>
  );
};
