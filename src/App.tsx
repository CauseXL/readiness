import { SearchInput } from './SearchInput';
import { StatusInfo } from './StatusInfo';
import { AddBtn } from './AddBtn';
import 'antd/dist/antd.css';
import './style.scss';
import { TableList } from './TableList';
import { Empty } from 'antd';

function App() {
  return (
    <div>
      <div className="action-header mb-14">
        <SearchInput />
        <div className="status_info">
          <StatusInfo />
        </div>
        <AddBtn />
      </div>
      { true ? <TableList /> : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /> }
    </div>
  );
}

export default App;
