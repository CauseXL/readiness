import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import React, { FC } from 'react';

export const AddBtn: FC = () => {
  return <Button type="primary" icon={<PlusOutlined />}>新建Readiness</Button>;
};
