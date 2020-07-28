import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardTileComponent } from './card-tile.component';

describe('CardTileComponent', () => {
  let component: CardTileComponent;
  let fixture: ComponentFixture<CardTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTileComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
