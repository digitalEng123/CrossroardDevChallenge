import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-show-title',
  templateUrl: './show-title.component.html',
  styleUrls: ['./show-title.component.css']
})
export class ShowTitleComponent implements OnInit {

  constructor(private service:SharedService) { }

  SearchTerm:string = "";
  TitleList: any = [];
  TitleListWithoutFilter: any = [];
  Term: string = "";

  ModalTitle: string = "";
  ActivateShowTitleDetailsComp: boolean = false;
  SelectedTitle: any;

  ngOnInit(): void {
    this.refreshTitleList();
  }

  showClick(item:any) {
    this.SelectedTitle = item;
    this.ModalTitle = "Title - " + this.SelectedTitle.titleName;
    this.ActivateShowTitleDetailsComp = true;
  }

  closeClick() {
    this.ActivateShowTitleDetailsComp = false;
    this.refreshTitleList();
  }

  refreshTitleList() {

    this.service.getTitleList().subscribe(data => {
      this.TitleList = data;
      this.TitleListWithoutFilter = data;
    });
  }

  sortResult(prop: any, asc: any) {

    this.TitleList = this.TitleListWithoutFilter.sort(function (a: any, b: any) {

      if (asc) {

        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {

        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    })
  }

}
