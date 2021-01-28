import { Component,AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatModule } from 'src/app/mat/mat.module';





// project_schema
export interface project_schema {
 
  author: string;
  //configuration : Array<any>
  date: string;
  //id: string;
  projectname: string;
  //reusable: Boolean;
  type: string;
  
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements AfterViewInit{
  title = 'quizApp';
  displayedColumns: string[] = [ 'author', 'date','projectname', 'type','actions']; // table Column
  public dataSource : project_schema[] = []; 


  ngAfterViewInit() {
  }
}
