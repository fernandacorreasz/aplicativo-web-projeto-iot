import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceDeviceService } from 'src/app/service/service-device.service';
import { startWith, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ModalLixeiraComponent } from 'src/app/modal/modal-lixeira/modal-lixeira.component';

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
  pageSizeOptions = [10, 15, 25];
  barChartData: number[] = [100, 150, 200, 250, 300, 350, 400];
  pageSize = this.pageSizeOptions[0];
  pageIndex = 0;
  totalElements: number = 0;
  dataSource = new MatTableDataSource<any>();

  constructor(private deviceService: ServiceDeviceService, private http: HttpClient, private dialog: MatDialog) {

   }
   @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngOnInit() {
    this.getUsersWithAuthorities();
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: any) {
    const filterValue = (event?.target?.value || '').trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getUsersWithAuthorities();
  }

  getProgressBarStyle(fillLevel: number): any {
    let color: string;
    if (fillLevel <= 50) {
      color = '#64d5e5';
    } else if (fillLevel <= 70) {
      color = '#d8d918';
    } else {
      color = 'red';
    }
    return { 'background-color': color };
  }


  getUsersWithAuthorities() {
    const offset = this.pageIndex * this.pageSize;
    const limit = this.pageSize;
    let url = `http://localhost:8080/recycle-bin-devices/deviceslist/${offset}/${limit}`;

    if (this.filteredColumn) {
      url += `?${this.filteredColumn}`;
    }

    this.http.get<any>(url).subscribe(
      (data: any) => {
        this.dataSource.data = data.items;
        this.totalElements = data.totalElements;
      },
      (error) => {
        console.error('Erro ao obter a lista de usuários:', error);
      }
    );


  }

  abrirModalLixeira() {
    const dialogRef = this.dialog.open(ModalLixeiraComponent, {
      width: '400px', // Ajuste conforme necessário
      data: {} // Pode passar dados para o modal se necessário
    });

    dialogRef.afterClosed().subscribe(result => {
      // Aqui você obtém os dados do formulário se o usuário salvou
      if (result) {
        console.log('Dados salvos:', result);
        // Chame seu serviço para enviar os dados para o servidor
      }
    });
  }


}
