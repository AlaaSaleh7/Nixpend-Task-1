import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../pages/modal/modal.page';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  skip: number;
  tasks: any;
  allTasks: any;
  selectedTask: any;
  private _storage: Storage | null = null;
  selectedStatus: any;

  constructor(
    private modalCtrl: ModalController,
    private dataService: DataService
  ) {}
  ngOnInit() {
    // this.dataService.postAllTasks();
    this.getData();
  }

  getData() {
    this.dataService.getAllData().then((allTasks) => {
      this.allTasks = allTasks;
      this.tasks = this.allTasks;
    });
  }

  async showTasks(task) {
    this.details(task);
    const modal = await this.modalCtrl.create({
      component: ModalPage,
    });
    await modal.present();
  }

  details(task) {
    this.dataService.setParams(task);
  }

  async filterTasks(event) {
    this.selectedStatus = event.detail.value;
    this.tasks = [];
    for (let task of this.allTasks) {
      if (this.selectedStatus === task.status) {
        this.tasks.push(task);
      }
    }
    if (this.selectedStatus === 'all') {
      this.tasks = this.allTasks;
    }
  }
}
