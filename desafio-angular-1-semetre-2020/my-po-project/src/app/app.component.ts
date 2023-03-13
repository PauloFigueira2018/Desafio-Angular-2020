import { Component} from '@angular/core';
import { PoMenuItem } from '@portinari/portinari-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  private menus: Array<PoMenuItem> = [
    {
      label: "Atividades",
      icon: "po-icon-target",
      shortLabel: "Atividades",
      link: "/activities"
    },
    {
      label: "Histórico",
      icon: "po-icon po-icon-ok",
      shortLabel: "Análise",
      link: "/historico"
    },
    {
      label: "Logout",
      icon: "po-icon po-icon-exit",
      action: () => (this.logOut()),
      shortLabel: "Logout",
      link: "/login"
    }
  ];
  logOut(){
    localStorage.clear()
  }
}
