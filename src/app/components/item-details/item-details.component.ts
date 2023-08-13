import { Component } from '@angular/core';
import { Animal } from '../../models/Animal';
import { ListService } from '../../service/list.service';
import { ActivatedRoute, Route } from '@angular/router';


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {
  animal?: Animal;

  constructor(private route: ActivatedRoute, private listService: ListService) {
    this.getAnimal();
  }


  getAnimal() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.listService.getItem(id).subscribe((animal) => this.animal = animal);
    console.log(this.animal);
  }

}
