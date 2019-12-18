import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DialogManagerService } from '../dialog-manager.service';
import { LocalDialogManagerService } from '../local-dialog-manager.service';

@Component({
  selector: 'app-lazy-layout',
  templateUrl: './lazy-layout.component.html',
  styleUrls: ['./lazy-layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyLayoutComponent implements OnInit {

  constructor(
    private dialogManagerService: DialogManagerService,
    private localDialogManagerService: LocalDialogManagerService,
  ) { }

  ngOnInit() {
  }

  onRootButton() {
    this.dialogManagerService.openDialog().subscribe();
  }

  onLocalButton() {
    this.localDialogManagerService.openDialog().subscribe();
  }

}
