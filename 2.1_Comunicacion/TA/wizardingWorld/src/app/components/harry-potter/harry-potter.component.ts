// child.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-harry-potter',
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzCardModule],
  templateUrl: './harry-potter.component.html',
  styleUrls: ['./harry-potter.component.css']
})
export class HarryPotterComponent {
  @Input() parentMessageInput: string = String();
  @Output() childMessageEventOutput = new EventEmitter<string>();
  parentMessageViewChild = String();

  sendMessage() {
    this.childMessageEventOutput.emit('Está bien, así lo haré. ¡Vamos por los horrocruxes!.');
  }
}
