import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { LazyDialogComponent } from './lazy-dialog/lazy-dialog.component';

@Injectable()
export class LocalDialogManagerService {

  constructor(
    private matDialog: MatDialog
  ) { }

  public openDialog(): Observable<boolean> {

    const dialogRef = this.matDialog.open<LazyDialogComponent, void, boolean>(
      LazyDialogComponent,
      {
        width: '500px',

      },
    );

    return dialogRef.afterClosed();
  }
}
