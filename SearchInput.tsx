import { Input } from 'antd';

import React, { FC } from 'react';

const { Search } = Input;

export const SearchInput: FC = () => {
  return <Search placeholder="input search text" allowClear />;
};
