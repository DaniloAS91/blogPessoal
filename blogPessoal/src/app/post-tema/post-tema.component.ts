import { environment } from './../../environments/environment.prod';

import { AlertasService } from './../service/alertas.service';
import { Router } from '@angular/router';
import { TemaService } from './../service/tema.service';
import { Component, OnInit } from '@angular/core';
import { Tema } from '../model/Tema';

@Component({
  selector: 'app-post-tema',
  templateUrl: './post-tema.component.html',
  styleUrls: ['./post-tema.component.css']
})
export class PostTemaComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]

  constructor(
    private temaService: TemaService,
    private router: Router,
    private alert: AlertasService

  ) { }

  ngOnInit() {

    let token = environment.token

    if (token == '') {
      this.router.navigate(['/login'])
      this.alert.showAlertInfo('Faça o login antesng de entrar no feed...')
    }
    if(token !== ''){
      this.findAllTemas()
    }

  }

  findAllTemas(){
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.tema.id).subscribe((resp: Tema) => {
      this.tema = resp;
    })
  }

  cadastrar(){
    if (this.tema.descricao == null) {
      this.alert.showAlertDanger ('Preencha o campo de nome do tema corretamente')
    }
    else{
      this.temaService.postTema(this.tema).subscribe((resp: Tema) => {
        this.tema = resp
        this.router.navigate(['/feed'])
        this.alert.showAlertSuccess ('Tema cadastrado com sucesso!')
      })
    }

  }

}
