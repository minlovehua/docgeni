import { InjectionToken } from '@angular/core';

export interface ButtonConfigService {
    getConfig(): string;
}

export const ALIB_BUTTON_CONFIG_TOKEN = new InjectionToken<ButtonConfigService>('ALIB_BUTTON_CONFIG_TOKEN');
