import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewLossCommunicationModalComponent } from './components/new-loss-communication-modal/new-loss-communication-modal.component';
import { LossCommunicationService } from './services/loss-communication/loss-communication.service';

export interface LossCommunication {
  id: string;
  nome: string;
  email: string;
  cpf: string;
  latitude: number;
  longitude: number;
  tipo_lavoura: string;
  data_colheita: string;
  evento_ocorrido: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = [
    'nome',
    'email',
    'cpf',
    'latitude',
    'longitude',
    'tipo_lavoura',
    'data_colheita',
    'evento_ocorrido',
    'acoes',
  ];
  dataSource: LossCommunication[] = [];
  constructor(private lossCommunicationService: LossCommunicationService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.lossCommunicationService.getAllLossCommunication()
      .subscribe((data: LossCommunication[]) => {
        this.dataSource = data;
      })
  }

  addCommunication() {
    this.dialog.open(NewLossCommunicationModalComponent);
    console.log('Cadastrar comunicação de perda');
    
    this.dialog.closeAll();
  }

  deleteCommunication(lossCommunication: LossCommunication) {
    this.lossCommunicationService.deleteLossCommunication(lossCommunication.id).subscribe((data) => {
      console.log(data);
    });
  }

  editCommunication(lossCommunication: LossCommunication) {
    this.dialog.open(NewLossCommunicationModalComponent, {
      data: lossCommunication
    });
  }

  }