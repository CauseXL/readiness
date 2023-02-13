import { Breadcrumb, Space, Table } from 'antd';
import React, { FC, useEffect, useMemo } from 'react';
import { UserOutlined, EditOutlined } from '@ant-design/icons';
import { StatusActionItem, StatusType } from './StatusActionItem';
import { ColumnsType, ColumnProps } from 'antd/lib/table';
import { useRequest } from 'ahooks';
import { getListById } from './api';
import { useRecoilState } from 'recoil';
import { detailRefreshFuncState, searchState } from './store';

const TableItem: FC<{ data: any; isDetailPage: boolean, setIsDetailPage?: (param: boolean) => void }> = ({ data, isDetailPage, setIsDetailPage }) => {
  const { data: itemData, run, loading, refresh } = useRequest(getListById, {
    // refreshDeps: [search],
    manual: true,
  });

  const [detailRefresh, setDetailRefresh] = useRecoilState(detailRefreshFuncState);

  useEffect(() => {
    refresh && setDetailRefresh(() => refresh);
  }, [refresh])

  const columns: ColumnsType[]= useMemo(() => {
    return [
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
            width: 120,
            render: (value: StatusType) => {
              return <StatusActionItem type={value} />
            }
          },
          {
            title: 'FAW',
            dataIndex: ['material', 'name2'],
            key: 'name2',
            align: 'center',
            width: 120,
            render: (value: StatusType) => {
              return <StatusActionItem type={value} />
            }
          },
          {
            title: 'DPS / KV',
            dataIndex: ['material', 'name3'],
            key: 'name3',
            align: 'center',
            width: 120,
            render: (value: StatusType) => {
              return <StatusActionItem type={value} />
            }
          },
          {
            title: 'Main Video',
            dataIndex: ['material', 'name4'],
            key: 'name4',
            align: 'center',
            width: 120,
            render: (value: StatusType) => {
              return <StatusActionItem type={value} />
            }
          },
          {
            title: 'Packshot / 白底图',
            dataIndex: ['material', 'name5'],
            key: 'name5',
            align: 'center',
            width: 160,
            render: (value: StatusType) => {
              return <StatusActionItem type={value} />
            }
          },
          {
            title: '宝贝页',
            dataIndex: ['material', 'name6'],
            key: 'name6',
            align: 'center',
            width: 120,
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
          // return a.publish_time.length - b.publish_time.length
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
  }, []);

  useEffect(() => {
    isDetailPage && run()
  }, []);

  const footer = () => (
    <div onClick={() => setIsDetailPage?.(true)} className="display-center table-footer cursor-pointer">➝ 查看全部数据</div>
  )
  const pagination =  {
    current: 1,
    pageSize: 10,
    total: 100,
  };
  return (
    <div className="readiness-table mb-14">
      <div className="mb-4">
        <strong className="mr-14 font-14">{data?.name}</strong>
        <span className="mr-26"><Space><UserOutlined />{data?.editor}</Space></span>
        <span className="cursor-pointer"><Space><EditOutlined />编辑</Space></span>
      </div>
      <Table
        loading={loading}
        dataSource={itemData || data?.data}
        footer={isDetailPage ? undefined : footer}
        columns={columns}
        pagination={isDetailPage ? pagination : false}
        onChange={(pagination, filters, sorter) => {
          console.log('pagination', pagination)
          console.log('filters', filters)
          console.log('sorter', sorter)
          run();
        }}
      />
    </div>
  )
}

export const TableList: FC<{ data: any, isDetailPage: boolean, setIsDetailPage: (param: boolean) => void }> = ({ data, isDetailPage, setIsDetailPage }) => {
  const [search, setSearch] = useRecoilState(searchState);
  return (
    <div>
      {
        isDetailPage ?
        <>
          <Breadcrumb className='mb-14'>
            <Breadcrumb.Item onClick={() => setIsDetailPage(false)}>
              <a href="">全部</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <strong>Hairecare-AHF Family</strong>
            </Breadcrumb.Item>
          </Breadcrumb>
          <TableItem data={[]} isDetailPage={isDetailPage} />
        </>
        :
        <>
          {search && <Breadcrumb className='mb-14'>
            <Breadcrumb.Item>全部</Breadcrumb.Item>
            <Breadcrumb.Item>
              <strong>以下是“{search}”的搜索结果（{data?.length}条）</strong>
            </Breadcrumb.Item>
          </Breadcrumb>}
          {data?.map((item: any, index: number) => (<TableItem data={item} key={index} isDetailPage={isDetailPage} setIsDetailPage={setIsDetailPage} />))}
        </>
      }
    </div>
  )
};
