import app from 'flarum/forum/app';

import { extend } from 'flarum/common/extend';
import LinkButton from 'flarum/common/components/LinkButton';
import UserPage from 'flarum/forum/components/UserPage';
import RootGamePane from './panes/RootGamePane';

export default function addProfilePane() {
  app.routes['fof-game'] = {
    path: '/u/:username/game',
    resolver: {
      onmatch() {
        if (!app.forum.attribute('canViewGame')) throw new Error();

        return RootGamePane;
      },
    },
  };

  extend(UserPage.prototype, 'navItems', function (items) {
    if (app.forum.attribute('canViewGame') || this.user.canEditGameProfile()) {
      const edit = this.user.canEditGameProfile();

      items.add(
        'game',
        LinkButton.component(
          {
            href: app.route('fof-game', { username: this.user.slug() }),
            icon: 'fas fa-gamepad ',
            'data-editProfile': edit,
          },
          app.translator.trans(`fof-game.forum.buttons.${edit ? 'edit' : 'view'}-profile`)
        ),
        200
      );
    }
  });
}
