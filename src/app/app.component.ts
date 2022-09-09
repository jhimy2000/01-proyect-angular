import { Component } from '@angular/core';
import { Estudents } from './models/estudents';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estudentsArray: Estudents[] = [
    {id: 1, name: "Alvaro", country: "USA"},
    {id: 2, name: "Henry", country: "Alemania"},
    {id: 3, name: "Raul", country: "Rusia"}
  ];

  selectedEstudent: Estudents = new Estudents();

  openForEdit(estudent: Estudents){
    this.selectedEstudent = estudent;
  }

  addOrEdit()
  {
    if(this.selectedEstudent.id===0)
    {
      this.selectedEstudent.id=this.estudentsArray.length +1;
      this.estudentsArray.push(this.selectedEstudent);
    }
    this.selectedEstudent=new Estudents();
  }
  delete()
  {
    if (confirm('¿Estas seguro que deseas eliminarlo')) {
      this.estudentsArray=this.estudentsArray.filter(x=>x != this.selectedEstudent);
      this.selectedEstudent=new Estudents();
    }
  }

  img='https://plazavea.vteximg.com.br/arquivos/ids/327052-450-450/image-9dd144c61bd44d3aadaf772958c38d08.jpg?v=637256711906270000'
}