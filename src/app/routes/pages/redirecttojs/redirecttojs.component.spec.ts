import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirecttojsComponent } from './redirecttojs.component';

describe('RedirecttojsComponent', () => {
  let component: RedirecttojsComponent;
  let fixture: ComponentFixture<RedirecttojsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirecttojsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirecttojsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
