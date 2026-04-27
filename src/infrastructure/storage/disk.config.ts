import { Disk } from "flydrive";
import { FSDriver } from "flydrive/drivers/fs";
import { localFsDriverOptions } from "./disk-config-types/local";
import { ConfigService } from "@nestjs/config";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DiskConfigurationService {
  private readonly diskType: string;
  constructor(private readonly configService: ConfigService) {
    this.diskType = this.configService.get<string>("DISK_TYPE") ?? "local";
  }

  public getDisk() {
    let diskDriver;

    switch (this.diskType) {
      case "local":
        diskDriver = new FSDriver(localFsDriverOptions());
        break;

      default:
        throw new Error("Storage type not defined: " + this.diskType);
    }
    const disk = new Disk(diskDriver);
    return disk;
  }
}
