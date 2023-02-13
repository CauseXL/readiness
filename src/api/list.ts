// import getUrl from '@tezign/intelligence-common-dam/lib/utils/getUrl';
// import http from 'src/configs/http';
import { ReadinessBoardDetailsResp, ReadinessLightEnum } from './type';

const http = {};
const getUrl = (url: string) => url;

const mockApi = (time: number, data: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, time);
  })
}

const mockListData = [
  {
    name: '11--Haircare-EO Family',
    editor: '佳辰1',
    data: [
      {
        key: '1',
        code: 'G4199123/G4199111/6923700977283',
        name: '欧莱雅精油润养去屑洗发露200ml',
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
        name: 'dsadasd',
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
    ]
  },
  {
    name: '22--Haircare-EO Family',
    editor: '佳辰2',
    data: [
      {
        key: '1',
        code: 'G4199123/G4199111/6923700977283',
        name: '欧莱雅精油润养去屑洗发露200ml',
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
        name: 'dsadasd',
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
    ]
  },
  {
    name: '33--Haircare-EO Family',
    editor: '佳辰',
    data: [
      {
        key: '1',
        code: 'G4199123/G4199111/6923700977283',
        name: '欧莱雅精油润养去屑洗发露200ml',
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
        name: 'dsadasd',
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
    ]
  }
]

const singleData = [
  {
    key: '1',
    code: 'single====G4199123/G4199111/6923700977283',
    name: 'single====欧莱雅精油润养去屑洗发露200ml',
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
    code: 'single====123',
    name: 'single====dsadasd',
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
]

export const getList = () => {
  return mockApi(1000, mockListData);
};

export const getListById = () => {
  return mockApi(1000, singleData);
};


/**
 * Readiness看板列表
 * - https://vms-service.test.tezign.com/customization-center/doc.html#/%E5%B7%B4%E6%AC%A7%E9%9C%80%E6%B1%82/Readiness%20API/getReadinessByPageUsingPOST
 */
interface ReadinessBoardDetailsReq {
  categoryName: string;
  item: number;
  pageNum: number;
  pageSize: number;
  ownerId:  number;
  publishTimeDesc: boolean;
}
export const apiGetReadinessList = (params: ReadinessBoardDetailsReq) => {
  return http.post<ReadinessBoardDetailsResp>('/portal/detail', params).then((item: ReadinessBoardDetailsResp)=> {
    return item;
  });
};

/** owner-list查询  */
interface ReadinessOwnerListResp {
  
}
export const apiGetReadinessOwnerList = (id: number) => http.get<ReadinessOwnerListResp>(`/customization-center/readiness/query/owner-list/${id}`);

/** Readiness详情查询  */
interface ReadinessDetailsReq {
  categoryName: string;
  item: number;
  pageNum: number;
  pageSize: number;
}
export const apiGetReadinessContent = (params: ReadinessDetailsReq) => http.post<ReadinessBoardDetailsResp>(`/customization-center/readiness/query/readiness-detail`, params).then((item: ReadinessBoardDetailsResp)=> {
  return item;
});

/** 编辑产品系列分类Type */
interface ReadinessDetailsReq {
  id: number;
  manualLightStatus: ReadinessLightEnum;
}
export const apiEditReadinessContent = (params: ReadinessDetailsReq) => http.post<boolean>('/customization-center/readiness/modify-product-series-tag', params);

