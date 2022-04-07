import {Injectable} from '@angular/core';
import {Asset} from "../interfaces/asset";
import {AssetTypeEnum} from "../interfaces/asset-type-enum";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  assets: Asset[] = [
    {
      id: 1,
      name: "First Asset",
      type: AssetTypeEnum.truck,
      longitude: "20",
      latitude: "6",
    },
    {
      id: 2,
      name: "Second Asset",
      type: AssetTypeEnum.truck,
      longitude: "1",
      latitude: "4",
    },
    {
      id: 3,
      name: "Great Britain",
      type: AssetTypeEnum.transport,
      longitude: "42",
      latitude: "8",
    },
  ]

  assetsSubject$ = new BehaviorSubject<Asset[]>(this.assets);

  addAsset(asset: Asset): void {
    this.assets.push(asset);
    this.assetsSubject$.next(this.assets);
  }

  editAsset(asset: Asset): void {
    this.assets.forEach(item => {
      if(item.id === asset.id) {
        item.name = asset.name;
        item.type = asset.type;
        item.latitude = asset.latitude;
        item.longitude = asset.longitude;
      }
    })
    this.assetsSubject$.next(this.assets);
  }

  deleteAsset(asset: Asset): void {
    this.assets.splice(this.getAssetIndex(asset), 1);
    this.assetsSubject$.next(this.assets);
  }

  private getAssetIndex(asset: Asset): number {

    return this.assets.findIndex(item => item.id === asset.id);
  }

}
