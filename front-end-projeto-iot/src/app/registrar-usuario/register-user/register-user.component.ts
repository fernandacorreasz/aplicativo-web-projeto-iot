import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Content, TDocumentDefinitions } from 'pdfmake/interfaces';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { PdfMakeWrapper, Txt } from 'pdfmake-wrapper';
import { TermoDialogComponent } from '../termo-dialog/termo-dialog.component';
import * as pdfMakeProxy from 'pdfmake/build/pdfmake';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


// Carregue as fontes do pdfMake
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

interface User {
  matricula: string;
  username: string;
  nome: string;
  sobrenome: string;
  emailAddress: string;
  password: string;
  activityStatus: string;
  group: string;
  curso: string;
}

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  userData = {
    username: '',
    matricula: '',
    nome: '',
    sobrenome: '',
    emailAddress: '',
    password: '',
    activityStatus: '',
    group: '',
    curso: '',
  }

  fotoPerfil!: File;
  termoFile!: File;
  showModal = false;
  isLoading = false;
  termoDeConsentimento: string = '';
  userDataForm!: FormGroup;
  constructor(private http: HttpClient, private dialog: MatDialog, private formBuilder: FormBuilder, private snackBar: MatSnackBar, private router: Router) { }


  ngOnInit(): void {
    // Lógica de inicialização do componente
  }



  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<User>([]);

  onFotoPerfilChange(event: any) {
    this.fotoPerfil = event.target.files[0];
  }

  onTermoFileChange(event: any) {
    this.termoFile = event.target.files[0];
  }


  submit() {

    if (
      !this.userData.username ||
      !this.userData.matricula ||
      !this.userData.nome ||
      !this.userData.sobrenome ||
      !this.userData.emailAddress ||
      !this.userData.password ||
      !this.userData.curso
    ) {
      // Exibir uma mensagem de erro, você pode usar um alerta, um tooltip ou outro componente de notificação, como o MatSnackBar do Angular Material
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    if (!this.fotoPerfil) {
      console.error('Arquivos não selecionados');
      return;
    }

    const formData = new FormData();
    formData.append('termoFile', this.termoFile);
    formData.append('fotoPerfil', this.fotoPerfil);
    formData.append('userData', JSON.stringify(this.userData));

    // Obtenha o conteúdo do TermoDialogComponent
    const termoDialogRef = this.dialog.open(TermoDialogComponent, {
      data: this.userData,
    });

    termoDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Atualize o valor do termoDeConsentimento com o conteúdo do TermoDialogComponent
        this.termoDeConsentimento = result.termoDeConsentimento;

        // Agora você pode gerar o PDF
        this.generatePDF(formData);
      }
    });
  }

  generatePDF(formData: FormData) {
    const nomeCompleto = this.userData.nome + ' ' + this.userData.sobrenome;
    const matricula = this.userData.matricula;

    const documentDefinition = {
      content: [
        this.termoDeConsentimento, // Usando o valor do termo de consentimento digitado pelo usuário
        'Parágrafo Primeiro - Do Consentimento',
        `Eu, ${nomeCompleto}, portador da matrícula ${matricula}, declaro que li, compreendi e concordo com os termos e condições estabelecidos neste documento, referentes ao tratamento dos meus dados pessoais pela biblioteca de componentes eletrônicos do laboratório de robótica da universidade.`
      ]
    };
/*
    pdfMake.createPdf(documentDefinition).download('termo.pdf') */
    pdfMake.createPdf(documentDefinition).getBlob((blob: Blob) => {
      const file = new File([blob], 'termo.pdf', { type: 'application/pdf' });
      formData.set('termoFile', file);

      // Agora você pode enviar os dados para o servidor
      this.http.post('http://localhost:8080/users', formData).subscribe(
        (response) => {
          // tratamento de sucesso
          // Exiba o modal de sucesso
          this.showModal = true;
          this.isLoading = true;

          // Redirecione para a tela de usuário após 3 segundos
          setTimeout(() => {
            this.router.navigate(['/']); // Substitua '/user' pela rota da sua tela de usuário
          }, 4000);
        },
        (error) => {
          console.error(error); // Exibe o erro no console
          // tratamento de erro
        }
      );
    });

  }

}
