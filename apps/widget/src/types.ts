export type Schema<Dataset = unknown> = {
  key: string;
  title: string;
  image: string;
  dataset?: Dataset;
  disabled?: boolean;
  icon?: string;
}