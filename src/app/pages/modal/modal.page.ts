import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  task: any;
  constructor(
    private modalCtrl: ModalController,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.getById();
  }

  dismiss() {
    this.modalCtrl.dismiss().then((x) => {
      console.log('xxxxxxx');
    });
    console.log('ssssssss');
  }

  getById() {
    this.task = this.dataService.getParams();
    console.log(this.task);
  }
}
