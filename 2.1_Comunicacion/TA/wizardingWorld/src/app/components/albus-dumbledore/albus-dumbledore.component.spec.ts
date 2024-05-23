import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbusDumbledoreComponent } from './albus-dumbledore.component';

describe('AlbusDumbledoreComponent', () => {
  let component: AlbusDumbledoreComponent;
  let fixture: ComponentFixture<AlbusDumbledoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbusDumbledoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbusDumbledoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
