import { Injectable } from '@angular/core';
import { Despesa } from '../../models/despesa';
import { LocalStorageService } from 'angular-2-local-storage';
/*
  Generated class for the DespesaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DespesaProvider {
  private despesas: Despesa[] = new Array();
  constructor(private localStorageService: LocalStorageService) {
    console.log('Hello DespesaProvider Provider');
  }

  private getDb(): void {
    this.despesas = [];
    if (this.localStorageService.get("despesas") != null)
    {
        this.despesas = <Despesa[]> JSON.parse(<string>this.localStorageService.get("despesas"));
    }
  }

  getAll(): Despesa[] {
      this.getDb();
      return this.despesas;
  }

  save(despesa: Despesa): void {
      this.getDb();
      this.despesas.push(despesa);
      this.localStorageService.set("despesas", JSON.stringify(this.despesas));
  }

  delete(id)
  {
    for (var i=0; i < this.despesas.length; i++)
    {
      if (this.despesas[i].id == id)
      {
        this.despesas.splice(i, 1);
      }
    }
    this.localStorageService.set("despesas", JSON.stringify(this.despesas));
  }

}
