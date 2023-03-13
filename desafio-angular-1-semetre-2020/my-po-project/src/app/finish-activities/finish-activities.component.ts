import { Component, OnInit } from '@angular/core';

import { ServicesComponent } from './../services/services/services.component';
import { PoNotificationService, PoTableColumn } from '@portinari/portinari-ui';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finish-activities',
  templateUrl: './finish-activities.component.html',
  styleUrls: ['./finish-activities.component.css']
})

export class FinishActivitiesComponent implements OnInit {
  data = [];

  constructor(private router: Router,
    private servico:ServicesComponent,
    private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.servico.getActivities("true",10).subscribe(atividades => {
    this.data = atividades;
  })
}

public readonly columns: Array<PoTableColumn> = [
  {property: 'dataLim' , label: 'Data da tarefa' , width: '10%', color: 'color-14'},
  {property: 'titulo' , label: 'Titulo da tarefa' , width: '25%', color: 'color-03'},
  {property: 'tipo' , label: 'Tipo da tarefa' , width: '15%', color: 'color-08'},
  {property: 'descricao' , label: 'Descrição da tarefa' , color: 'color-12', width: '30%' },
  {property: 'dataFim' , label: 'Tarefa finalizada' , width: '15%', color: 'color-09'},
]}