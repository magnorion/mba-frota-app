import { Component, OnInit, Inject } from '@angular/core';
import { GeometryModel } from './models/GeometryModel';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ListaCarro } from './models/ListaCarro';
import { FrotaService } from './services/frotas/frota.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public lat: number;
  public lng: number;

  public carros: Array<ListaCarro>;

  constructor(
    public dialog: MatDialog,
    private frotaService: FrotaService
  ) { }

  ngOnInit() {
    this.carros = [new ListaCarro('', '', '', '', '', '')];
    this.getCars();
  }

  searchResult(location: GeometryModel): void {
    this.lat = location.lat;
    this.lng = location.lng;

    this.openDialog();
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(AppDialogComponent, {
      width: '300px',
      data: {carros: this.carros}
    });

    dialogRef.afterClosed().subscribe(res => console.log('dialog closed'));
  }

  public getCars(): void {
    this.frotaService.listaCarros().subscribe(res => this.carros = res);
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
})
export class AppDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AppComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
