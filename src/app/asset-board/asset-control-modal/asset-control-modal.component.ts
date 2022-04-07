import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, Validators} from "@angular/forms";
import {AssetTypeEnum} from "../../interfaces/asset-type-enum";
import {AssetsService} from "../assets.service";
import {Asset} from "../../interfaces/asset";

@Component({
  selector: 'ab-asset-control-modal',
  templateUrl: './asset-control-modal.component.html',
  styleUrls: ['./asset-control-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssetControlModalComponent implements OnInit{

  form = this.formBuilder.group({
    id: Date.now(),
    name: [null, Validators.required],
    type: ["", Validators.required],
    latitude: [null, Validators.required],
    longitude: [null, Validators.required],
  })

  assetTypeEnum = AssetTypeEnum;

  @Input() asset: Asset | undefined;

  constructor(private readonly formBuilder: FormBuilder, private readonly assetsService: AssetsService, private readonly activeModal: NgbActiveModal) { }

  ngOnInit() {
    if(this.asset !== undefined) {
      this.form.setValue(this.asset)
    }
  }

  close(): void {
    this.activeModal.close();
  }

  save(): void {
    if(this.asset !== undefined) {
      this.assetsService.editAsset(this.form.getRawValue());
      this.activeModal.close();

      return;
    }

    this.assetsService.addAsset(this.form.getRawValue());
    this.activeModal.close();
  }

}
