import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent {
  @Output() numberChanged = new EventEmitter<number>();

  
  handleClick() {
    this.numberChanged.emit(1);
  }

}
