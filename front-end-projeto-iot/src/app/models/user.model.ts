
export class User{

  matricula?: string;
  termoFile?: string; // Use 'string' para representar o arquivo em base64 no frontend
  fotoPerfil?: string; // Use 'string' para representar o arquivo em base64 no frontend
  username: string;
  nome: string;
  sobrenome: string;
  emailAddress: string;
  password: string;
  activityStatus: string;
  group: string;
  curso: string;

  constructor(
    username: string,
    nome: string,
    sobrenome: string,
    emailAddress: string,
    password: string,
    activityStatus: string,
    group: string,
    curso: string,
    matricula?: string,
    termoFile?: string,
    fotoPerfil?: string,
  ) {
    this.username = username;
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.emailAddress = emailAddress;
    this.password = password;
    this.activityStatus = activityStatus;
    this.group = group;
    this.curso = curso;
    this.matricula = matricula;
    this.termoFile = termoFile;
    this.fotoPerfil = fotoPerfil;
  }

}
