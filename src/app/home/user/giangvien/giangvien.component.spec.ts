import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiangvienComponent } from './giangvien.component';

describe('GiangvienComponent', () => {
  let component: GiangvienComponent;
  let fixture: ComponentFixture<GiangvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiangvienComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiangvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
