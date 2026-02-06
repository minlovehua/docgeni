import { inject, Injectable } from '@angular/core';
import { ALIB_BUTTON_CONFIG_TOKEN } from './util';

@Injectable({ providedIn: 'root' })
export class AliButtonService {
    config: string;

    constructor() {
        const config = inject(ALIB_BUTTON_CONFIG_TOKEN);
        this.config = config?.getConfig();
    }

    getConfig(): string {
        return this.config;
    }
}
