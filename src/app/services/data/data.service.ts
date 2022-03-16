import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

const TASK = 'tasks';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private tasks: any;
  navParams: any = {};

  constructor(private storage: Storage) {
    this.init();
  }
  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this.storage = storage;
  }
  // Create and expose methods that users of this service can call
  public set(key: string, value: any) {
    this.storage?.set(key, value);
  }

  // reload all data from loaclstorage
  async reloadAllTasks() {
    let tasks = await this.storage.get(TASK);

    this.tasks = tasks === null ? [] : tasks;
  }
  getAllData() {
    return this.storage.get(TASK);
  }

  setParams(body) {
    this.navParams = body;
  }
  getParams() {
    return this.navParams;
  }
}
