import { Component, OnInit } from 'angular2/core';
import {RouteParams} from 'angular2/router';

import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero/hero';

@Component({
  selector: 'my-hero-detail',
  moduleId: 'components/hero-detail/hero-detail',
  template: require('./hero-detail.html'),
  styles: [require('./hero-detail.css')]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private _heroService: HeroService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._heroService.getHero(id)
      .then(hero => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }
}
