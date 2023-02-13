import { SearchInput } from './SearchInput';
import { StatusInfo } from './StatusInfo';
import { AddBtn } from './AddBtn';
import 'antd/dist/antd.css';
import './style.scss';
import { TableList } from './TableList';
import { Empty, Spin } from 'antd';
import { useState } from 'react';
import { useRequest } from 'ahooks';
import { getList } from './api';
import { useRecoilState } from 'recoil';
import { searchState } from './store';

function App() {
  const [search, setSearch] = useRecoilState(searchState);

  const [isDetailPage, setIsDetailPage] = useState(false);
  const { data, run, loading } = useRequest(getList, {
    refreshDeps: [search],
  }); 

  return (
    <div>
      { isDetailPage ? null : (
        <div className="action-header mb-14">
          <SearchInput />
          <div className="status_info">
            <StatusInfo />
          </div>
          <AddBtn />
        </div>
      )}
      { loading
        ?
        <Spin />
        :
        data
        ?
        <TableList data={data} isDetailPage={isDetailPage} setIsDetailPage={setIsDetailPage} />        
        :
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      }
    </div>
  );
}

export default App;
