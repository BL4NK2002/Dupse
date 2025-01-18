import { Component, OnInit } from '@angular/core';
import { Voluntario } from '../../voluntario';
import { VoluntarioService } from '../../service/voluntario.service';

@Component({
  selector: 'app-voluntario-add',
  templateUrl: './voluntario-add.component.html',
  styleUrl: './voluntario-add.component.css'
})
export class VoluntarioAddComponent implements OnInit{
id : number = 0 ;
telefono : string = '';
nombre : string = '';
apellido : string = '';
edad : string = '';
distrito : string = '';
fechaNacimiento : string = '';
dni : string = '';
email : string = '';
horas : string = '';
discordId : string = '';
cargo : string = '';
falta : string = '';
codigosCertificados : string='';

constructor(private voluntarioService : VoluntarioService){

}

  ngOnInit(): void {
    
  }

  addVoluntario(){
    let voluntario = new Voluntario(this.id , this.telefono , this.nombre , this.apellido ,  this.edad , this.distrito , this.fechaNacimiento , this.dni , this.email , this.horas , this.discordId , this.cargo, this.falta, this.codigosCertificados);
    console.log(voluntario);
    this.voluntarioService.createVoluntario(voluntario).subscribe(
      res => console.log(res)
    );
  }
}
