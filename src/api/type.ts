enum ReadinessLightEnum  {
  Default = 0,
  Gray = 1,
  Yellow = 2,
  Green = 3,
  Red = 4,
  Empty = 4,
}

interface productSeriesTagResp{
  lightStatus: ReadinessLightEnum;	
  manualLightStatus: number;
  name:	string;
  portalBlockTagId:	number;	
  productSeriesId: number;	
}

interface ReadinessProductSeriesResp {
  categoryId: number;	
  description: string	
  estimatePublishTime: string	
  id: number;	
  name: string	
  ownerId: number;	
  ownerName: string	
  portalBlockId: number;	
  productSeriesTagResp: productSeriesTagResp[]
  sort: number;	
}

export interface ReadinessBoardDetailsResp {
  id: number;
  leaderId: number;	
  leaderName: string;
  name: string;
  productSeriesList: ReadinessProductSeriesResp[];
}