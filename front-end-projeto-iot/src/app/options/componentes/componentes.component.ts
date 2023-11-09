import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.component.html',
  styleUrls: ['./componentes.component.css']
})
export class ComponentesComponent implements OnInit {
  componentes: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('/assets/componentes.json').subscribe(data => {
      this.componentes = data;
    });
  }

}
