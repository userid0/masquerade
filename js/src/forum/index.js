import app from 'flarum/forum/app';
import User from 'flarum/common/models/User';
import Field from './../lib/models/Field';
import Answer from './../lib/models/Answer';
import Model from 'flarum/common/Model';

import addProfilePane from './addProfilePane';
import mutateUserHero from './mutateUserHero';

// Exports
import ProfileConfigurePane from './panes/ProfileConfigurePane';
import ProfilePane from './panes/ProfilePane';
import RootGamePane from './panes/RootGamePane';
import BaseField from './types/BaseField';
import BooleanField from './types/BooleanField';
import EmailField from './types/EmailField';
import SelectField from './types/SelectField';
import TypeFactory from './types/TypeFactory';
import UrlField from './types/UrlField';
import PasswordField from './types/PasswordField';

app.initializers.add('fof-game', (app) => {
  app.store.models['game-field'] = Field;
  app.store.models['game-answer'] = Answer;

  User.prototype.bioFields = Model.hasMany('bioFields');
  User.prototype.gameAnswers = Model.hasMany('gameAnswers');
  User.prototype.canEditGameProfile = Model.attribute('canEditGameProfile');

  addProfilePane();

  mutateUserHero();
});

const components = {
  ProfileConfigurePane,
  ProfilePane,
  RootGamePane,
};

const types = {
  BaseField,
  BooleanField,
  EmailField,
  SelectField,
  TypeFactory,
  UrlField,
  PasswordField,
};

export { components, types };
