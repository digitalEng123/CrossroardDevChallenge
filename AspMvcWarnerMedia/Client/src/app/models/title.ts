import { Time } from "@angular/common";

export interface ITitle {
  TitleId: number,
  TitleName: string,
  TitleNameSortable: string,
  TitleTypeId: number,
  ReleaseYear: number,
  ProcessedDateTimeUTC: Time
}
