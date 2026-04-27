import { DiskConfigurationService } from "./disk.config";
import { Injectable } from "@nestjs/common";
import { Disk } from "flydrive";

@Injectable()
export class StorageService {
  private readonly disk: Disk;

  constructor(private readonly diskService: DiskConfigurationService) {
    this.disk = this.diskService.getDisk();
  }
}
