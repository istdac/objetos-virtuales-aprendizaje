import { Encuesta } from './../models/encuesta';
import { EncuestaService } from './../services/encuesta.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ElementRef, Component, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-encuesta-empleador',
  templateUrl: './encuesta-empleador.page.html',
  styleUrls: ['./encuesta-empleador.page.scss'],
})
export class EncuestaEmpleadorPage implements OnInit {
  public formEmpleadores : FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.formEmpleadores = this.fb.group({
      email:['',Validators.compose([
        Validators.required,
        Validators.pattern(new RegExp(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/))

      ])],
      sexo:['',Validators.compose([
        Validators.required,
      ])], //1
      zona:['',Validators.compose([
        Validators.required,
      ])], //2
      areaLaboral:['',Validators.compose([
        Validators.required,
      ])], //3
      areaOtra:['',Validators.compose([
      ])],
      satisfaccionCompetencias:[], //4, elaborar más para cada radioopcion
      competencia1:['',Validators.compose([
        Validators.required,
      ])],
      competencia2:['',Validators.compose([
        Validators.required,
      ])],
      competencia3:['',Validators.compose([
        Validators.required,
      ])],
      competencia4:['',Validators.compose([
        Validators.required,
      ])],
      competencia5:['',Validators.compose([
        Validators.required,
      ])],
      competencia6:['',Validators.compose([
        Validators.required,
      ])],
      competencia7:['',Validators.compose([
        Validators.required,
      ])],
      competencia8:['',Validators.compose([
        Validators.required,
      ])],
      competencia9:['',Validators.compose([
        Validators.required,
      ])],
      competencia10:['',Validators.compose([
        Validators.required,
      ])],
      debilidadesComentarios:['',Validators.compose([
        Validators.required,
      ])], //pregunta 5
      gradoPertinenciaModelo:['',Validators.compose([
        Validators.required,
      ])],
      gradoSatisfaccion:['',Validators.compose([
        Validators.required,
      ])],
      comentarioFortalezas:['',Validators.compose([
        Validators.required,
      ])],
    });

  }

  checkEncuesta(){
    console.log(this.formEmpleadores.get('email').value);
    console.log(this.formEmpleadores.get('sexo').value);
    console.log(this.formEmpleadores.get('zona').value);
    console.log(this.formEmpleadores.get('areaLaboral').value);
    console.log(this.formEmpleadores.get('competencia1').value);
    console.log(this.formEmpleadores.get('competencia2').value);
    console.log(this.formEmpleadores.get('competencia3').value);
    console.log(this.formEmpleadores.get('competencia4').value);
    console.log(this.formEmpleadores.get('competencia5').value);
    console.log(this.formEmpleadores.get('competencia6').value);
    console.log(this.formEmpleadores.get('competencia7').value);
    console.log(this.formEmpleadores.get('competencia8').value);
    console.log(this.formEmpleadores.get('competencia9').value);
    console.log(this.formEmpleadores.get('competencia10').value);
    console.log(this.formEmpleadores.get('debilidadesComentarios').value);
    console.log(this.formEmpleadores.get('gradoPertinenciaModelo').value);
    console.log(this.formEmpleadores.get('gradoSatisfaccion').value);
    console.log(this.formEmpleadores.get('comentarioFortalezas').value);

    if (this.formEmpleadores.get('areaLaboral').value==='otro') {
      console.log(this.formEmpleadores.get('areaOtra').value)
    }
    console.log(this.formEmpleadores.valid)
  }

}
