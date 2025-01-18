import { Component, OnInit } from '@angular/core';
import { VoluntarioService } from './../../service/voluntario.service';
import { Voluntario } from '../../voluntario';

@Component({
  selector: 'app-voluntario-list',
  templateUrl: './voluntario-list.component.html',
  styleUrls: ['./voluntario-list.component.css']
})
export class VoluntarioListComponent implements OnInit {

  voluntarios: Voluntario[] = [];
  voluntariosFiltrados: Voluntario[] = [];
  searchText: string = '';

  constructor(private voluntarioService: VoluntarioService) {}

  ngOnInit(): void {
    this.listVoluntarios();
  }

  listVoluntarios() {
    this.voluntarioService.getVoluntarioList().subscribe(data => {
      this.voluntarios = data;
    });
  }

  filtrarVoluntarios() {
    const searchTextLower = this.searchText.trim();
    // Validar que sea un número de 8 dígitos
    if (searchTextLower.length === 8 && !isNaN(+searchTextLower)) {
      this.voluntariosFiltrados = this.voluntarios.filter(v =>
        v.dni === searchTextLower
      );
    } else {
      this.voluntariosFiltrados = [];
    }
  }
}
