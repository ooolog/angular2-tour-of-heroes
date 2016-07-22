import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Hero} from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls:['app/hero-detail.component.css']
})

export /**
 * HeroDetailComponent
 */
    class HeroDetailComponent implements OnInit, OnDestroy {
    constructor(private heroService: HeroService,
        private router: ActivatedRoute) { }
    @Input()
    hero: Hero;
    sub: any;

    ngOnInit() {
        this.sub = this.router.params.subscribe(params => {
            let id = +params['id'];
            this.heroService.getHero(id).then(hero => this.hero = hero);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    goBack() {
        window.history.back();
    }
}