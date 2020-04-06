import {
  Password,
  MongoPasswordInterface,
  KnexPasswordInterface,
  MemoryPasswordInterface,
  JSONPasswordInterface,
} from './Implementation';
import { importView } from '@keystonejs/build-field-types';

export default {
  type: 'Password',
  implementation: Password,
  views: {
    Controller: importView('./views/Controller'),
    Field: importView('./views/Field'),
    Filter: importView('./views/Filter'),
  },
  adapters: {
    mongoose: MongoPasswordInterface,
    knex: KnexPasswordInterface,
    memory: MemoryPasswordInterface,
    json: JSONPasswordInterface,
  },
};
