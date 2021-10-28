import { Config } from '../../interfaces';

export const configTemplate: Config = {
  WEATHER_API_KEY: '',
  lat: 0,
  long: 0,
  isCelsius: true,
  customTitle: 'Flame',
  pinAppsByDefault: true,
  pinCategoriesByDefault: true,
  hideHeader: false,
  useOrdering: 'createdAt',
  appsSameTab: false,
  bookmarksSameTab: false,
  searchSameTab: false,
  hideApps: false,
  hideCategories: false,
  hideSearch: false,
  defaultSearchProvider: 'l',
  dockerApps: false,
  dockerHost: 'localhost',
  kubernetesApps: false,
  unpinStoppedApps: false,
  useAmericanDate: false,
  disableAutofocus: false,
};