import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent {
  @Output() public onClick = new EventEmitter<number | string>();

  public handleClick(value: number | string) {
    this.onClick.emit(value);
  }
}
