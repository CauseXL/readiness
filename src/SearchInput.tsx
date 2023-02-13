import { Input } from 'antd';
import React, { FC, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { searchState } from './store';
import { useQuery } from './hooks/useQuery';

const { Search } = Input;

export const SearchInput: FC = () => {
  const [search, setSearch] = useRecoilState(searchState);
  const query = useQuery();
  const defaultSearch = query.get('searchText');

  useEffect(() => {
    defaultSearch && setSearch(defaultSearch);
    console.log('defaultSearch', defaultSearch);
  }, [query]);

  const onSearch = (v: string) => {
    console.log(v, 123)
    setSearch(v)
  }

  return (
    <Search 
      placeholder="请搜索Category名称"
      allowClear
      defaultValue={defaultSearch || search}
      onSearch={onSearch}
      style={ {width: 250} }
      type="secondary"
    />
  );
};
