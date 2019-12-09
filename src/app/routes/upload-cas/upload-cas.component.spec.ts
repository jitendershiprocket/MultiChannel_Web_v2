import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCASComponent } from './upload-cas.component';

describe('UploadCASComponent', () => {
  let component: UploadCASComponent;
  let fixture: ComponentFixture<UploadCASComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadCASComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
