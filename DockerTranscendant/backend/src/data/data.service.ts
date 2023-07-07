// src/data/data.service.ts

import { Injectable } from '@nestjs/common';
import { Data } from './interfaces/data.interface';

@Injectable()
export class DataService {
  getData(): Data {
    // Logique pour récupérer les données depuis la source de données
    // par exemple, depuis une base de données
    return { title: 'Données de l\'API' };
  }
}
