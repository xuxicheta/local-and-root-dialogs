import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { LazyDialogComponent } from './lazy-dialog/lazy-dialog.component';
import { LazyLayoutComponent } from './lazy-layout/lazy-layout.component';
import { LocalDialogManagerService } from './local-dialog-manager.service';

const lazyRoutes: Routes = [
  { path: '', component: LazyLayoutComponent }
];

@NgModule({
  declarations: [LazyLayoutComponent, LazyDialogComponent],
  entryComponents: [LazyDialogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(lazyRoutes),
    MatDialogModule
  ],
  providers: [
    LocalDialogManagerService,
  ]
})
export class LazyModule { }
