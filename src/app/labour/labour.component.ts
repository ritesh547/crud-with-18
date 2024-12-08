import { Component, OnInit } from '@angular/core';
import { LobourService } from '../services/lobour.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-labour',
  standalone: true,
  imports: [],
  templateUrl: './labour.component.html',
  styleUrl: './labour.component.scss'
})
export class LabourComponent implements OnInit {
  labourList: any = [];
  constructor(private lobourService: LobourService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.getLabour();
  }
  getLabour() {
    this.lobourService.getLabour().subscribe((res: any) => {
      console.log('loabourlist', res);
      this.labourList = res;
    })
  }

  public remove(id: number) {
    this.lobourService.removeLabour(id).subscribe((res: any) => {
      this.getLabour();
    });
  }
  public edit(item: any) {
    this.router.navigate(['/add-labour', item.id])
  }
}
