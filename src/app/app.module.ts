import { HistoryComponent } from './History/history.component';
import { ContactComponent } from './Contacts/contact.component';
import { ProjetoComponent } from './Projetos/projeto.component';
import { SkillComponent } from './Skills/skill.component';
import { HomeComponent } from './Home/home.component';
import { MenuComponent } from './Menu/menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    SkillComponent,
    ProjetoComponent,
    ContactComponent,
    HistoryComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'skill', component: SkillComponent
      },
      {
        path: 'project', component: ProjetoComponent
      },
      {
        path: 'contact', component: ContactComponent
      },
      {
        path:'history', component: HistoryComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
