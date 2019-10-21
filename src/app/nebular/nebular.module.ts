import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbCardModule,
  NbAlertModule,
  NbTabsetModule,
  NbCheckboxModule,
  NbTooltipModule,
  NbInputModule,
  NbRadioModule,
  NbThemeModule,
  NbListModule,
  NbSpinnerModule,
  NbWindowModule,
  NbToastrModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbDateFnsDateModule } from '@nebular/date-fns';

import { DEFAULT_THEME } from '../../themes/default-theme';
import { DARK_THEME } from '../../themes/dark-theme';

const NB_MODULES = [
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbCardModule,
  NbAlertModule,
  NbTabsetModule,
  NbCheckboxModule,
  NbTooltipModule,
  NbInputModule,
  NbWindowModule,
  NbToastrModule,
  NbRadioModule,
  NbThemeModule,
  NbListModule,
  NbEvaIconsModule,
  NbSpinnerModule
];

@NgModule({
  imports: [
    NbDateFnsDateModule.forRoot({
      format: 'dd.MM.yyyy'
    }),
    ...NB_MODULES
  ],
  exports: [
    ...NB_MODULES
  ]
})
export class NebularModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: NebularModule,
      providers: [
        ...NbThemeModule.forRoot(
          {
            name: 'default',
          },
          [ DEFAULT_THEME, DARK_THEME ],
        ).providers,
      ],
    };
  }
}
