import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ServicesComponent } from './../services/services/services.component';
import { PoTableColumn, PoNotificationService } from '@portinari/portinari-ui';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})

export class ActivitiesComponent implements OnInit {
  extraInformation: any;
  data = [];
  activity={};
  poModal: any;
  uniqueKey: any;
  id: any;
  dataLim: any;
  titulo: any;
  dataFim: any;
  descricao: any;
  done: any;
  tipo: any;
  constructor(private router: Router,
              private servico:ServicesComponent,
              private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.atualizaTarefa()
  }
  
  public readonly columns: Array<PoTableColumn> = [
    {property: 'dataLim' , label: 'Data da tarefa' , width: '15%', color: 'color-14'},
    {property: 'titulo' , label: 'Titulo da tarefa' , width: '25%', color: 'color-03'},
    {property: 'tipo' , label: 'Tipo da tarefa' , width: '15%', color: 'color-08'},
    {property: 'descricao' , label: 'Descrição da tarefa' , color: 'color-12', width: '30%' },
    { property: 'atividadeDia', label: 'Tarefa do Dia' ,type: 'subtitle', width: '15%', subtitles: [
      { value: 'verdadeiro', color: 'color-02', content: 'S', label: 'Sim' },
      { value: 'falso', color: 'color-08', content: 'N', label: 'Não' }
    ]}
  ];

  newForm(){
    this.router.navigate(["activitiesform",""])
  }

  finishTask(){
    this.activity= {
    dataLim: this.dataLim,
    dataFim: this.getDataAtual(),
    titulo: this.titulo,
    descricao: this.descricao,
    tipo: this.tipo,
    done: "true",
    id: this.uniqueKey
  };
    this.servico.putActivities(this.activity,this.uniqueKey).subscribe(
    a =>{ this.poNotification.success("Atividade finalizada com sucesso!");
    ;this.atualizaTarefa()},
    a =>{ this.poNotification.error("Erro ao finalizar atividade!")
    })
  }

  alterTask(){
  this.router.navigate(["activitiesform", this.uniqueKey]);
  }

  deleteTask(){
    this.servico.deleteActivities(this.uniqueKey).subscribe(
    a =>{ this.poNotification.success("Atividade excluida com sucesso!");
    ;this.atualizaTarefa()},
    a =>{ this.poNotification.error("Erro na atividade!")
    })
  }

  markOne(row: any){
    this.dataLim= row["dataLim"],
    this.titulo= row["titulo"],
    this.tipo= row["tipo"],
    this.descricao= row["descricao"],
    this.uniqueKey= row["id"];
  return true
  }

  getDataAtual() {
    const data = new Date();
    console.log(`${data.getFullYear()}-${('0' + (data.getMonth() + 1)).slice(-2)}-${(
      '0' + data.getDate()
    ).slice(-2)}`);
    return `${data.getFullYear()}-${('0' + (data.getMonth() + 1)).slice(-2)}-${(
      '0' + data.getDate()
    ).slice(-2)}`;
  }

  dataDia(dataJson){
    if (dataJson == this.getDataAtual()){
      return 'verdadeiro';
    } else {
      return 'falso';
    }
  }

  atualizaTarefa(){
    this.servico.getActivities("false",10).subscribe(atividades => {
      this.data = atividades.map(atividad =>({...atividad,atividadeDia:this.dataDia(atividad.dataLim)}));console.log(this.data);
    })
  }
}