import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlunoComponent } from './components/lista-aluno/lista-aluno.component';
import { CadastroAlunoComponent } from './components/cadastro-aluno/cadastro-aluno.component';
const routes: Routes = [
{ path: '', component: ListaAlunoComponent },
{ path: 'cadastro', component: CadastroAlunoComponent }
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}
