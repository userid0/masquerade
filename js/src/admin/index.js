import app from 'flarum/admin/app';
import Field from './../lib/models/Field';
import GamePage from './components/GamePage';

app.initializers.add('fof-game', () => {
  app.store.models['game-field'] = Field;

  app.extensionData
    .for('fof-game')
    .registerPage(GamePage)
    .registerPermission(
      {
        icon: 'far fa-id-card',
        label: app.translator.trans('fof-game.admin.permissions.view-profile'),
        permission: 'fof.game.view-profile',
        allowGuest: true,
      },
      'view'
    )
    .registerPermission(
      {
        icon: 'far fa-id-card',
        label: app.translator.trans('fof-game.admin.permissions.have-profile'),
        permission: 'fof.game.have-profile',
      },
      'start'
    )
    .registerPermission(
      {
        icon: 'far fa-id-card',
        label: app.translator.trans('fof-game.admin.permissions.edit-others-profile'),
        permission: 'fof.game.edit-others-profile',
      },
      'moderate'
    );
});
