import {AssetTypeEnum} from "./asset-type-enum";

export interface Asset {
  id: number;
  name: string;
  type: AssetTypeEnum;
  latitude: string;
  longitude: string;
}
