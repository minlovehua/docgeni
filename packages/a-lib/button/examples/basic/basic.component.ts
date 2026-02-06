import { Component, OnInit } from '@angular/core';
import { AlibButtonComponent } from '@docgeni/alib/button';

@Component({
    selector: 'alib-button-basic-example',
    templateUrl: './basic.component.html',
    styleUrls: ['./basic.component.scss'],
    standalone: true,
    imports: [AlibButtonComponent],
})
export class AlibButtonBasicExampleComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
