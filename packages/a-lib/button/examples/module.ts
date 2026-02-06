import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ALIB_BUTTON_CONFIG_TOKEN, ButtonConfigService } from '@docgeni/alib/button';

class MockButtonConfigService implements ButtonConfigService {
    getConfig(): string {
        return 'mock button config';
    }
}

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: ALIB_BUTTON_CONFIG_TOKEN,
            useClass: MockButtonConfigService,
        },
    ],
})
export class AlibButtonExampleModule {}

// export default {
//     providers: [
//         {
//             provide: ALIB_BUTTON_CONFIG_TOKEN,
//             useClass: MockButtonConfigService,
//         },
//     ],
// };
