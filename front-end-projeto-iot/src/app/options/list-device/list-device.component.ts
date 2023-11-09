import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceDeviceService } from 'src/app/service/service-device.service';
@Component({
  selector: 'app-list-device',
  templateUrl: './list-device.component.html',
  styleUrls: ['./list-device.component.css']
})
export class ListDeviceComponent implements OnInit {
  filterControl: FormControl = new FormControl('');
  filteredColumn: string = '';
  filterData = true;
  displayedColumns: string[] = ['deviceId', 'location', 'fillLevel', 'lastUpdate'];
  pageSizeOptions = [5, 10, 25]; // Defina suas opções de tamanho de página
  pageSize = this.pageSizeOptions[0];
  pageIndex = 0;
  totalElements: number = 0;
  dataSource = new MatTableDataSource<any>();

  constructor(private deviceService: ServiceDeviceService, private http: HttpClient, private dialog: MatDialog) {}


  ngOnInit() {
    this.getUsersWithAuthorities();
  }


  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getUsersWithAuthorities();
  }

  getUsersWithAuthorities() {
    const offset = this.pageIndex * this.pageSize;
    const limit = this.pageSize;
    const url = `http://localhost:8080/recycle-bin-devices/deviceslist/${offset}/${limit}`;

    this.http.get<any>(url).subscribe(
      (data: any) => {
        this.dataSource.data = data.items; // Atualize o dataSource
        this.totalElements = data.totalElements;
      },
      (error) => {
        console.error('Erro ao obter a lista de usuários:', error);
      }
    );
  }

}
