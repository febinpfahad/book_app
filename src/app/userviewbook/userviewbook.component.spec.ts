import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewbookComponent } from './userviewbook.component';

describe('UserviewbookComponent', () => {
  let component: UserviewbookComponent;
  let fixture: ComponentFixture<UserviewbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserviewbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserviewbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
