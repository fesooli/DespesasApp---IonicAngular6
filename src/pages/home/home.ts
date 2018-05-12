import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DespesaProvider } from '../../providers/despesa/despesa';
import { Despesa } from '../../models/despesa';
import { AddPage } from '../add/add';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  despesas: Despesa[] = new Array();

  constructor(public navCtrl: NavController,
              private desProv: DespesaProvider,
              private localStorageService: LocalStorageService) {
    this.despesas = desProv.getAll();
  }

  add() {
      this.navCtrl.push(AddPage);
  }

  del(id)
  {
    this.desProv.delete(id);
  }

}
