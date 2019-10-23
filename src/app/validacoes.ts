import { AbstractControl } from '@angular/forms';

export class Validacoes {
    static MaiorQue18Anos(controle: AbstractControl) {
        const nascimento = controle.value;
        const [ano, mes, dia] = nascimento.split('-');
        const dataNascimento = new Date(ano, mes, dia, 0, 0, 0);
        const hoje = new Date();
        // Calculo para saber se é maior de 18 anos
        // Milesegundos * Segundo * minuto * hora * dia * ano
        const tempoMaiorQue18 = 1000 * 60 * 60 * 24 * 365 * 18;
        if (hoje.getTime() - dataNascimento.getTime() >= tempoMaiorQue18) {
            return null;
        } else {
            return { menorDeIdade: true };
        }
    }

    static SenhasIguais( controle: AbstractControl ) {
        const senha = controle.get('senha').value;
        const confirmaSenha = controle.get('confirmarSenha').value;
        console.log(senha + ' ' + confirmaSenha);
        if (senha === confirmaSenha) {
            return null;
        } else {
            controle.get('confirmarSenha').setErrors({ senhasIdenticas: true });
        }
    }
}
