import { Component } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  usuarios : Usuario[] = [];

  constructor(
    private usuarioService: UsuarioService
  ){

  }

  ngOnInit():void{
    //console.log(this.usuarios.values)
  }

}
