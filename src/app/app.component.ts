import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  formularioDeUsuario: FormGroup;
  constructor(private fb:FormBuilder) {
    this.formularioDeUsuario = this.fb.group(
      {
        nome: ['', Validators.compose(
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(70)
          ]
        )],
        email: ['', Validators.email ],
        cpf: [''],
        nascimento: [''],
        senha: [''],
        confirmarSenha: ['']
      }
    );
  }
  enviarDados() {
    const dadosFormulario = this.formularioDeUsuario.value;
    alert(JSON.stringify(dadosFormulario));
  }
  // Propriedades do formulário que vamos utilizar para obter erros
  public get nome() {
    return this.formularioDeUsuario.get('nome');
  }
  public get email() {
    return this.formularioDeUsuario.get('email');
  }
}
