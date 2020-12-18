import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneorderComponent } from './ligneorder.component';

describe('LigneorderComponent', () => {
  let component: LigneorderComponent;
  let fixture: ComponentFixture<LigneorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LigneorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
