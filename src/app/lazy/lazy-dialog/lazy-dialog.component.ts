import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-dialog',
  templateUrl: './lazy-dialog.component.html',
  styleUrls: ['./lazy-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyDialogComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {
  }
}
