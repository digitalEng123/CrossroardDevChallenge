import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import { ITitle } from '../../models/title';

@Component({
  selector: 'app-title-detail',
  templateUrl: './title-detail.component.html',
  styleUrls: ['./title-detail.component.css']
})
export class TitleDetailComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() objTitle: any;
  TitleId: number = 0;
  TitleName: string = "";  
  TitleTypeId: number = 0;
  ReleaseYear: number = 0;
  //ProcessedDateTimeUTC: Time;

  AwardsList: any = [];
  TitleGenreList: any = [];
  TitleOtherNamesList: any = [];
  TitleParticipatesList: any = [];
  TitleStoryLineList: any = [];

  AwardsCount: number = 0;
  ParticipateCount: number = 0;

  ngOnInit(): void {

    this.loadTitleDetailsList();
    //this.FilterTitle.bind(this);
  }

  loadTitleDetailsList() {

    this.service.getAllTitle_Awards(this.objTitle.titleId).subscribe((data: any) => {

      this.AwardsList = data;
      this.AwardsCount = data.length;
    });

    this.service.getAllTitle_Genre(this.objTitle.titleId).subscribe((data: any) => {

      this.TitleGenreList = data;
    });

    this.service.getAllTitle_OtherNames(this.objTitle.titleId).subscribe((data: any) => {

      this.TitleOtherNamesList = data;
    });

    this.service.getAllTitle_StoryLines(this.objTitle.titleId).subscribe((data: any) => {

      this.TitleStoryLineList = data;
    });

    this.service.getAllTitle_Participant(this.objTitle.titleId).subscribe((data: any) => {

      this.TitleParticipatesList = data;
      this.ParticipateCount = data.length;
    });

    this.TitleId = this.objTitle.titleId;
    this.TitleName = this.objTitle.titleName;
    this.ReleaseYear = this.objTitle.releaseYear;
  }

  //FilterTitle(title: any) {
  //  return title.titleName != this.TitleName;
  //}

  FilterTitle(title: any, filter: any) {
    return title.titleName != filter;
  }

}
