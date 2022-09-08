import { Component, Inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LossCommunication } from 'src/app/app.component';
import { LossCommunicationService } from 'src/app/services/loss-communication/loss-communication.service';

@Component({
  selector: 'app-new-loss-communication-modal',
  templateUrl: './new-loss-communication-modal.component.html',
  styleUrls: ['./new-loss-communication-modal.component.css']
})
export class NewLossCommunicationModalComponent {
  lossCommunicationForm = new FormGroup({
    nome: new FormControl(this.data?.nome, Validators.required),
    email: new FormControl(this.data?.email, [Validators.required, Validators.email]),
    cpf: new FormControl(this.data?.cpf, [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)]),
    latitude: new FormControl(this.data?.latitude, [Validators.required, Validators.pattern(/^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/)]),
    longitude: new FormControl(this.data?.longitude, [Validators.required, Validators.pattern(/^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/)]),
    tipo_lavoura: new FormControl(this.data?.tipo_lavoura, Validators.required),
    data_colheita: new FormControl(this.data?.data_colheita, Validators.required),
    evento_ocorrido: new FormControl(this.data?.evento_ocorrido, Validators.required),
  })

  get nome(): AbstractControl | null {
    return this.lossCommunicationForm.get('nome');
  }

  get email(): AbstractControl | null {
    return this.lossCommunicationForm.get('email');
  }
  get cpf(): AbstractControl | null {
    return this.lossCommunicationForm.get('cpf');
  }
  get latitude(): AbstractControl | null {
    return this.lossCommunicationForm.get('latitude');
  }
  get longitude(): AbstractControl | null {
    return this.lossCommunicationForm.get('longitude');
  }
  get tipo_lavoura(): AbstractControl | null {
    return this.lossCommunicationForm.get('tipo_lavoura');
  }
  get data_colheita(): AbstractControl | null {
    return this.lossCommunicationForm.get('data_colheita');
  }
  get evento_ocorrido(): AbstractControl | null {
    return this.lossCommunicationForm.get('evento_ocorrido');
  }
  dataSource: LossCommunication[] = [];
  
 constructor(public dialogRef: MatDialogRef<NewLossCommunicationModalComponent>, @Inject(MAT_DIALOG_DATA) public data: LossCommunication, private lossCommunicationService: LossCommunicationService) {
  console.log({ data });
}

addCommunication() {
  const formData = this.lossCommunicationForm.value as LossCommunication;
  this.lossCommunicationService.createLossCommunication(formData)
    .subscribe((data) => {
       this.dialogRef.close();
    });
}


editCommunication() {
  const formData = this.lossCommunicationForm.value as LossCommunication;
  this.lossCommunicationService.editLossCommunication(this.data.id, formData)
    .subscribe((data) => {
      this.dialogRef.close();
    })
}

}
