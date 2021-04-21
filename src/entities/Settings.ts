import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, UpdateQueryBuilder } from 'typeorm';

import { v4 as uuid } from 'uuid';

@Entity("settings")
class Setting {

  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  chat: boolean;

  @UpdateDateColumn()
  updated_at: Date;

  @UpdateDateColumn()
  created_at: Date;

  constructor() {
    // Se o id não existir (estiver preenchido) ele cria um id pelo uuid
    // Evita que na atualização de dados, atualize também o id
    if(!this.id) {
      this.id = uuid();
    }
  }
}

export { Setting }