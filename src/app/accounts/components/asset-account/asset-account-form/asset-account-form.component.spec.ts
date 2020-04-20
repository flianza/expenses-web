import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetAccountFormComponent } from './asset-account-form.component';

describe('AssetAccountFormComponent', () => {
  let component: AssetAccountFormComponent;
  let fixture: ComponentFixture<AssetAccountFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetAccountFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetAccountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
