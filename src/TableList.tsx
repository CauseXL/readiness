import { Button, Table } from 'antd';
import React, { FC } from 'react';
import { UserOutlined, EditOutlined } from '@ant-design/icons';
import { StatusActionItem, StatusType } from './StatusActionItem';

const dataSource = [
  {
    key: '1',
    code: 'G4199123/G4199111/6923700977283',
    name: '胡彦斌',
    material: {
      name1: 'red',
      name2: 'gray',
      name3: 'green',
      name4: 'empty',
      name5: 'yellow',
      name6: 'red',
    },
    publish_time: '2---03-12322',
    owner: '西湖区',
  },
  {
    key: '2',
    code: '123',
    name: '欧莱雅精油润养去屑洗发露200ml',
    material: {
      name1: 'green',
      name2: 'yellow',
      name3: 'red',
      name4: 'gray',
      name5: 'gray',
      name6: 'empty',
    },
    publish_time: '2---03-123',
    owner: '西湖区',
  },
];

const columns = [
  {
    title: 'G-code/Bar Code',
    dataIndex: 'code',
    key: 'code',
    width: 226,
    render: (text: string) => <span className="word-breaker-all">{text}</span>
  },
  {
    title: '产品系列',
    dataIndex: 'name',
    key: 'name',
    width: 178,
  },
  {
    title: '产品类基础素材',
    dataIndex: 'material',
    key: 'material',
    children: [
      {
        title: 'HP-备案凭证',
        dataIndex: ['material', 'name1'],
        key: 'name1',
        align: 'center',
        render: (value: StatusType) => {
          return <StatusActionItem type={value} />
        }
      },
      {
        title: 'FAW',
        dataIndex: ['material', 'name2'],
        key: 'name2',
        align: 'center',
        render: (value: StatusType) => {
          return <StatusActionItem type={value} />
        }
      },
      {
        title: 'DPS / KV',
        dataIndex: ['material', 'name3'],
        key: 'name3',
        align: 'center',
        render: (value: StatusType) => {
          return <StatusActionItem type={value} />
        }
      },
      {
        title: 'Main Video',
        dataIndex: ['material', 'name4'],
        key: 'name4',
        align: 'center',
        render: (value: StatusType) => {
          return <StatusActionItem type={value} />
        }
      },
      {
        title: 'Packshot / 白底图',
        dataIndex: ['material', 'name5'],
        key: 'name5',
        align: 'center',
        render: (value: StatusType) => {
          return <StatusActionItem type={value} />
        }
      },
      {
        title: '宝贝页',
        dataIndex: ['material', 'name6'],
        key: 'name6',
        align: 'center',
        render: (value: StatusType) => {
          return <StatusActionItem type={value} />
        }
      },
    ]
  },
  {
    title: '预计内容上架时间',
    dataIndex: 'publish_time',
    key: 'publish_time',
    sorter: (a, b) => {
      return a.publish_time.length - b.publish_time.length
    },
  },
  {
    title: 'Owner (维护人)',
    dataIndex: 'owner',
    key: 'owner',
    align: 'center',
    filters: [
      {
        text: '西湖区',
        value: '西湖区',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
    ],
    filterSearch: true,
    onFilter: (value: string, record: any) => record.owner.indexOf(value) === 0,
  },
];

const TableItem: FC = () => {
  return (
    <div>
      <div className="mb-4">
        <strong className="mr-14">Haircare-EO Family</strong>
        <span className="mr-26"><UserOutlined />佳辰</span>
        <span className="cursor-pointer"><EditOutlined />编辑</span>
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  ) 
}

export const TableList: FC = () => {
  return (
    <div>
      {
        new Array(3).fill(1).map((item, index) => (<TableItem key={index} />))
      }
      <div style={{ display: 'flex', justifyContent: 'space-around', height: 100, marginTop: 40 }}>
        <StatusActionItem type="green" />
        <StatusActionItem type="red" />
        <StatusActionItem type="gray" />
        <StatusActionItem type="yellow" />
        <StatusActionItem type="empty" />
      </div>
    </div>
  )
};
