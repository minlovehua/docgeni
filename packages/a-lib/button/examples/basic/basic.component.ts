import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ALIB_BUTTON_CONFIG_TOKEN, AlibButtonModule } from '@docgeni/alib/button';
import { AliButtonService } from '@docgeni/alib/button';

@Component({
    selector: 'alib-button-basic-example',
    templateUrl: './basic.component.html',
    styleUrls: ['./basic.component.scss'],
    standalone: true,
    imports: [AlibButtonModule, CommonModule],
})
export class AlibButtonBasicExampleComponent implements OnInit {
    private aliButtonService = inject(AliButtonService);

    constructor() {
        // 有问题，示例 module 中 providers 也有问题
        // const config = inject(ALIB_BUTTON_CONFIG_TOKEN);
        // console.log('inject token 示例验证：', config?.getConfig());
    }

    ngOnInit(): void {
        // 有问题，示例 module 中 providers 也有问题
        // console.log('basic 示例验证：', this.aliButtonService.getConfig());
    }
}
