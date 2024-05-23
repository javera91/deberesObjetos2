// father.component.ts
import { Component, AfterContentInit, ContentChild, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { HarryPotterComponent } from '../harry-potter/harry-potter.component';

@Component({
  selector: 'app-albus-dumbledore',
  standalone: true,
  imports: [CommonModule, FormsModule, NzButtonModule, NzCardModule, HarryPotterComponent],
  templateUrl: './albus-dumbledore.component.html',
  styleUrls: ['./albus-dumbledore.component.scss']
})
export class AlbusDumbledoreComponent implements AfterViewInit, AfterContentInit {
  parentMessageInput = 'Harry, necesito que salgas y busques los demás Horrocruxes para acabar con Voldemort.';
  childMessageEventOutput = '';

  @ViewChild(HarryPotterComponent) childComponent!: HarryPotterComponent;
  @ContentChild('projectedContent', { static: true }) projectedContent!: ElementRef;

  receiveMessage($event: string) {
    this.childMessageEventOutput = $event;
  }

  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.childComponent.parentMessageViewChild = 'Y recuerda Harry, si es que necesitas ayuda, pídela y se te dará.';
    });
  }

  ngAfterContentInit() {
    if (this.projectedContent) {
      console.log('El contenido proyectado es:', this.projectedContent.nativeElement.textContent);
    }
  }
}
