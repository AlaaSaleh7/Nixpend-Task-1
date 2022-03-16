import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.page.html',
  styleUrls: ['./add-page.page.scss'],
})
export class AddPagePage implements OnInit {
  newTitle: string;
  newDate: string;
  newStatus: string;
  newTask: {};
  allTasks: any = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {}

  addNewTask() {
    let body = {
      title: this.newTitle,
      status: this.newStatus,
      date: this.newDate,
    };
    if (
      body.title === undefined &&
      body.status === undefined &&
      body.date === undefined
    ) {
      return;
    } else {
      this.dataService.getAllData().then((allTasks) => {
        this.allTasks = allTasks;
        this.allTasks.push(body);
        this.dataService.set('tasks', allTasks);
      });
    }
  }
}
