import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardTileHorizentalComponent } from './card-tile-horizental.component';

describe('CardTileHorizentalComponent', () => {
  let component: CardTileHorizentalComponent;
  let fixture: ComponentFixture<CardTileHorizentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTileHorizentalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardTileHorizentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
