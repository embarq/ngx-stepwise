import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public currentPage: number;

  public ngOnInit() {
    this.currentPage = 0;
  }

  public handlePageChange(page) {
    this.currentPage = page;
  }
}
