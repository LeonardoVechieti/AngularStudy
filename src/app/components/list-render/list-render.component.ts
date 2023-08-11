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
    { name: 'Dog', sound: 'Woof!', age: 5 },
    { name: 'Cat', sound: 'Meow!', age: 3 },
    { name: 'Cow', sound: 'Moo!', age: 10 },
    { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!', age: 1 },
  ];
  constructor(private listService: ListService) { }

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


}
