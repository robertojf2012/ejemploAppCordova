import { Component } from '@angular/core';

import { GpsPage } from '../gps/gps';
import { ApiPage } from '../api/api';
import { HomePage } from '../home/home';
import { FormularioPage } from '../formulario/formulario';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GpsPage;
  tab3Root = ApiPage;
  tab4Root = FormularioPage;

  constructor() {

  }
}
