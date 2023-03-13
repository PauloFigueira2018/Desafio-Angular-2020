import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PoNotificationService} from "@portinari/portinari-ui";
import { ServicesComponent } from 'src/app/services/services/services.component';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-activitiesform',
  templateUrl: './activitiesform.component.html',
  styleUrls: ['./activitiesform.component.css']
})

export class ActivitiesformComponent implements OnInit {
  dataImputForm = [];
  formulario: FormGroup;
  idActivity: string;
  activitiesService: any;
  ativi: any;
  constructor(private router: Router,
    private servico:ServicesComponent,
    private formBuilder:FormBuilder,
    private activatedrouter: ActivatedRoute,
    private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.idActivity = this.activatedrouter.snapshot.params.id;
    if (this.idActivity){ 
      this.servico.getActivitiesID(this.idActivity).subscribe(ativ => {
      this.ativi = ativ, this.populaForm()})
      this.formulario = this.formBuilder.group({
        dataLim: [null, [Validators.required, this.ValidData]],
        titulo:  [null],
        tipo: [null],
        descricao: [null],
        done: false,
        });
    }else{
      this.formulario = this.formBuilder.group({
      dataLim: [null, [Validators.required, this.ValidData]],
      titulo:  [null],
      tipo: [null],
      descricao: [null],
      done: false,
      });
    }
  }

  ValidData(control: FormControl) {
    const data = new Date();
    const dataAtu = `${data.getFullYear()}-${(
      "0" +
      (data.getMonth() + 1)
    ).slice(-2)}-${("0" + data.getDate()).slice(-2)}`;

    if (control.value < dataAtu) {
      return { invalidDataLim: true };
    } else {
      return true;
    }
  }

  saveTask(){
    if (this.idActivity){
      this.servico.putActivities(this.formulario.value,this.idActivity).subscribe(
        a =>{ this.poNotification.success("Atividade alterada com sucesso!");
        this.closeTask();
      },
        a =>{ this.poNotification.error("Erro na atividade!")
      })
    }else{
       this.servico.postActivities(this.formulario.value).subscribe(
        a =>{ this.poNotification.success("Atividade inserida com sucesso!");
        this.formulario.reset();
        },
        a =>{ this.poNotification.error("Erro na atividade!")
      })
    }
  }

  closeTask(){
    this.router.navigate(["activities"]);
  }

  populaForm(){
    this.formulario.patchValue({
      dataLim: this.ativi.dataLim,
      titulo: this.ativi.titulo,
      tipo: this.ativi.tipo,
      descricao: this.ativi.descricao,
      done: this.ativi.done,
    });
  }

}
