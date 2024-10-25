import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ListaAlunoComponent } from './components/lista-aluno/lista-aluno.component';
import { CadastroAlunoComponent } from './components/cadastro-aluno/cadastro-aluno.component';
import { EditarAlunoComponent } from './components/editar-aluno/editar-aluno.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListaAlunoComponent,
    CadastroAlunoComponent,
    EditarAlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
