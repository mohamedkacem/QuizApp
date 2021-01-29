import { Component,AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatModule } from 'src/app/mat/mat.module';




// project_schema
export interface project_schema {
 
  id: number;
  //configuration : Array<any>
  name: string;
  //id: string;
  timestamp: number;
  //reusable: Boolean;
  score: number;
  NombreQ : number
  
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements AfterViewInit{
 
  title = 'quizApp';
  displayedColumns: string[] = [ 'id', 'name','timestamp', 'score','NombreQ']; // table Column
  public dataSource : project_schema[] = [
    {
      "id": 1,
      "name": "kacem",
      "timestamp": 1611942480,
      "score": 24,
      "NombreQ": 31
    },
    {
      "id": 2,
      "name": "mohamed",
      "timestamp": 1611942420,
      "score": 3,
      "NombreQ": 16
    },
    {
      "id": 3,
      "name": "Atef",
      "timestamp": 1611942360,
      "score": 45,
      "NombreQ": 15
    },
    {
      "id": 4,
      "name": "mounir",
      "timestamp": 1611942300,
      "score": 59,
      "NombreQ": 74
    },
    {
      "id": 5,
      "name": "bechir",
      "timestamp": 1611942240,
      "score": 17,
      "NombreQ": 91
    },
    {
      "id": 6,
      "name": "nada",
      "timestamp": 1611942180,
      "score": 85,
      "NombreQ": 96
    },
    {
      "id": 7,
      "name": "nouha",
      "timestamp": 1611942120,
      "score": 87,
      "NombreQ": 16
    },
    {
      "id": 8,
      "name": "name 8",
      "timestamp": 1611942060,
      "score": 8,
      "NombreQ": 41
    },
    {
      "id": 9,
      "name": "name 9",
      "timestamp": 1611942000,
      "score": 98,
      "NombreQ": 64
    },
    {
      "id": 10,
      "name": "name 10",
      "timestamp": 1611941940,
      "score": 87,
      "NombreQ": 78
    },
    {
      "id": 11,
      "name": "name 11",
      "timestamp": 1611941880,
      "score": 65,
      "NombreQ": 81
    },
    {
      "id": 12,
      "name": "name 12",
      "timestamp": 1611941820,
      "score": 8,
      "NombreQ": 55
    },
    {
      "id": 13,
      "name": "name 13",
      "timestamp": 1611941760,
      "score": 82,
      "NombreQ": 54
    },
    {
      "id": 14,
      "name": "name 14",
      "timestamp": 1611941700,
      "score": 80,
      "NombreQ": 54
    }
  ]; 


  ngAfterViewInit() {
   
  }
}
