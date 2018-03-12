import { Component,  OnInit, Inject, ElementRef, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})

export class AccountSettingsComponent implements OnInit {

  constructor( @Inject( DOCUMENT ) private _document, private renderer: Renderer2 ) { }

  ngOnInit() {

  }

  cambiarColor( tema: string, link: ElementRef ) {

    const url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url);

    this.aplicarCheck( link );
  }


  private aplicarCheck( link: ElementRef ) {

    const selectores = this._document.getElementsByClassName('selector');

    for ( const ref of selectores ) {
      ref.classList.remove('working');
    }

    this.renderer.addClass ( link, 'working');
  }

}

