import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LobourService } from '../services/lobour.service';
import { log } from 'console';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-labour',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-labour.component.html',
  styleUrl: './add-labour.component.scss'
})
export class AddLabourComponent implements OnInit {
  loabourForm: any;
  isId: any;
  submitted: boolean = false;
  constructor(private fb: FormBuilder, private lobourService: LobourService,
    private router: Router, private ac: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.loabourForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
    })
    this.isId = this.ac.snapshot.paramMap.get('id');
    if (this.isId) {
      this.lobourService.getLabourById(this.isId).subscribe((res: any) => {
        console.log('loabourlist', res);
        console.log('ids', res);
        this.loabourForm.setValue({
          name: res.name,
          age: res.age
        })
      })

    }
  }

  get f() {
    return this.loabourForm.controls
  }

  submit() {
    this.submitted = true;
    if (this.loabourForm.invalid) {
      return
    } else {
      if (this.isId != null) {
        this.lobourService.editLabour(this.isId, this.loabourForm.value).subscribe((res: any) => {
          this.router.navigate(['']);
        })
      } else {
        this.lobourService.addLabour(this.loabourForm.value).subscribe((res: any) => {
          this.router.navigate(['']);
        })
      }

    }
  }
}
