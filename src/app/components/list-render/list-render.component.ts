import { Component } from '@angular/core';
import { Animal } from 'src/app/models/Animal';
import { ListService } from 'src/app/service/list.service';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = [
    { id: 1, name: 'Dog', sound: 'Woof', age: 0 },
  ];
  constructor(private listService: ListService) { 
    this.getAnimalsApi();
  }

  showAge(animal: Animal) {
    this.animals.forEach((a) => {
      if (a.name === animal.name) {
        a.age += 1;
      }
    }
    );
  }

  removeAnimal(animal: Animal) {
    this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimalsApi() {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }


}
