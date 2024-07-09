import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewExamComponent } from './preview-exam.component';

describe('PreviewExamComponent', () => {
  let component: PreviewExamComponent;
  let fixture: ComponentFixture<PreviewExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewExamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
