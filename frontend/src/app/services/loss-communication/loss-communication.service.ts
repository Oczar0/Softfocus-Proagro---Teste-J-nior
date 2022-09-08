import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LossCommunication } from 'src/app/app.component';


@Injectable({
  providedIn: 'root'
})
export class LossCommunicationService {

  constructor(private httpClient: HttpClient) { }

  getAllLossCommunication(): Observable<LossCommunication[]> {
    return this.httpClient.get<LossCommunication[]>('http://localhost:8000/comunicacoes');
  }

  createLossCommunication(data: Partial<LossCommunication>): Observable<string> {
    return this.httpClient.post<string>('http://localhost:8000/comunicacoes', data);
  }

  deleteLossCommunication(id: string): Observable<string> {
    return this.httpClient.delete<string>(`http://localhost:8000/comunicacoes/${id}`);
  }

  editLossCommunication(id: string, data: Partial<LossCommunication>): Observable<string> {
    return this.httpClient.put<string>(`http://localhost:8000/comunicacoes/${id}`, data);
  }
}
