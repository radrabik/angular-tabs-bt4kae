import { Component } from "@angular/core";

interface Tab { tabName: string; activeTab: string; show: boolean; };

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {


  myTabs: Record<number, Tab> = {
    1: {tabName : 'Summary', activeTab : 'active', show: true},
    2: {tabName : 'Ladder Diagram', activeTab : '', show: true}
  };

  constructor() {}

  onTabs(tabIndex): void {

    for (const key in this.myTabs) {
      if (key === tabIndex) {
        this.myTabs[key].activeTab = 'active';
      } else {
        this.myTabs[key].activeTab = '';
      }
    }
  }
}
