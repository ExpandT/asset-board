import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {AssetsService} from "./assets.service";
import {Asset} from "../interfaces/asset";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AssetControlModalComponent} from "./asset-control-modal/asset-control-modal.component";
import {tap} from "rxjs";
import {Marker} from "../interfaces/marker";

@Component({
  selector: 'ab-asset-board',
  templateUrl: './asset-board.component.html',
  styleUrls: ['./asset-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssetBoardComponent implements OnInit {

  assets: Asset[] = [];
  markers: Marker[] = [];
  selectedAsset: Asset | undefined;

  constructor(private readonly assetsService: AssetsService, private readonly modalService: NgbModal, private readonly changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.assetsService.assetsSubject$.pipe(tap(res => {
      this.assets = res;
      this.changeDetectorRef.markForCheck();
    })).subscribe()
  }

  addAsset(): void {
    this.modalService.open(AssetControlModalComponent)
  }

  editAsset(asset: Asset): void {
    this.modalService.open(AssetControlModalComponent).componentInstance.asset = asset;
  }

  selectAsset(asset: Asset): void {
    this.selectedAsset = asset;
    this.markers = [];
    this.markers.push({
      position: {
        lat: parseInt(asset.latitude),
        lng: parseInt(asset.longitude),
      },
      label: {
        color: 'white',
        text: asset.name,
      },
    })
  }

  deleteAsset(asset: Asset): void {
    this.assetsService.deleteAsset(asset)
  }

}
