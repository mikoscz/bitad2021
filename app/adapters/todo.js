import Adapter from '@ember-data/adapter';
import { createClient } from '@supabase/supabase-js';

const DB_URL = 'https://pfbptuwmdvgmxogcxuzr.supabase.co';
const ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzMyOTg0NywiZXhwIjoxOTUyOTA1ODQ3fQ.xAMbW1fh8v4u6BKyecy6x8HjELYocicWWyXRDInzUIM';

export default class TodoAdapter extends Adapter {
  supabase = createClient(DB_URL, ANON_KEY);

  async findRecord(_store, _type, id) {
    const { data, error } = await this.supabase.from('todos').match({ id });

    if (error) {
      throw new Error(`Supabase::findRecord - ${error}`);
    }

    return data[0];
  }

  async createRecord(_store, _type, snapshot) {
    const record = this.serialize(snapshot, { includeId: true });

    const { data, error } = await this.supabase.from('todos').insert([record]);

    if (error) {
      throw new Error(`Supabase::createRecord - ${error}`);
    }

    return data[0];
  }

  async updateRecord(_store, _type, snapshot) {
    const record = this.serialize(snapshot, { includeId: true });
    const id = snapshot.id;

    const { data, error } = await this.supabase
      .from('todos')
      .update(record)
      .match({ id });

    if (error) {
      throw new Error(`Supabase::updateRecord - ${error}`);
    }

    return data[0];
  }

  async deleteRecord(_store, _type, snapshot) {
    const id = snapshot.id;

    const { data, error } = await this.supabase
      .from('todos')
      .delete()
      .match({ id });

    if (error) {
      throw new Error(`Supabase::deleteRecord - ${error}`);
    }

    return data[0];
  }

  async findAll() {
    const { data, error } = await this.supabase.from('todos').select();

    if (error) {
      throw new Error(`Supabase::findAll - ${error}`);
    }

    return data;
  }

  query() {
    // TODO: implement if we would have time
  }
}
