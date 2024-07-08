import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListexamComponent } from './listexam.component';

describe('ListexamComponent', () => {
  let component: ListexamComponent;
  let fixture: ComponentFixture<ListexamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListexamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
