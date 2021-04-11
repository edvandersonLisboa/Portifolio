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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

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
    FontAwesomeModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'home', pathMatch: 'full', data:{title:'edvanderson',depth: 1}
      },
      {
        path: 'home', component: HomeComponent, data:{title:'edvanderson',depth: 1}
      },
      {
        path: 'skill', component: SkillComponent, data:{title:'edvanderson',depth: 2}
      },
      {
        path: 'project', component: ProjetoComponent, data:{title:'edvanderson',depth: 3}
      },
      {
        path: 'contact', component: ContactComponent, data:{title:'edvanderson',depth: 4}
      },
      {
        path:'history', component: HistoryComponent, data:{title:'edvanderson',depth: 5}
      }
    ]),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
