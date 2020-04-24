import { Component, OnInit } from '@angular/core';
import { Storage, } from '@ionic/storage';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.page.html',
  styleUrls: ['./to-do-list.page.scss'],
})
export class ToDoListPage {
  [x: string]: any;
  taskList = [];
  constructor(public navCtrl: NavController) { }
  //checking and pushing to the array
  addTask() {
    if (this.taskName.length > 0) {
      let task = this.taskName;
      this.taskList.push(task);
      this.taskName = "";
  }
}
  ngOnInit() {
  }

}
