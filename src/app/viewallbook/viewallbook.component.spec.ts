import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallbookComponent } from './viewallbook.component';

describe('ViewallbookComponent', () => {
  let component: ViewallbookComponent;
  let fixture: ComponentFixture<ViewallbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
