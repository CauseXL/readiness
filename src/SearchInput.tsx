import { Input } from 'antd';

import React, { FC } from 'react';

const { Search } = Input;

export const SearchInput: FC = () => {
  const onSearch = (v: string) => {
    console.log(v)
  }
  return <Search placeholder="请搜索Category名称" allowClear onSearch={onSearch} style={ {width: 250} } />;
};
