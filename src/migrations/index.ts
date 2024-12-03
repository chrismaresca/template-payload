import * as migration_20241203_205806_initial from './20241203_205806_initial';
import * as migration_20241203_210946_new_posts from './20241203_210946_new_posts';
import * as migration_20241203_211221_author from './20241203_211221_author';

export const migrations = [
  {
    up: migration_20241203_205806_initial.up,
    down: migration_20241203_205806_initial.down,
    name: '20241203_205806_initial',
  },
  {
    up: migration_20241203_210946_new_posts.up,
    down: migration_20241203_210946_new_posts.down,
    name: '20241203_210946_new_posts',
  },
  {
    up: migration_20241203_211221_author.up,
    down: migration_20241203_211221_author.down,
    name: '20241203_211221_author'
  },
];
