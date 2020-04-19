import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetAccountComponent } from './asset-account.component';

describe('AssetAccountComponent', () => {
  let component: AssetAccountComponent;
  let fixture: ComponentFixture<AssetAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
