import { getCustomRepository, Repository } from 'typeorm';
import { SettingsRepository } from '../repositories/SettingsRepository';
import { Setting } from '../entities/Settings';


interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  private settingsRepository: Repository<Setting>;

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository);
  }
  async create({chat, username} : ISettingsCreate) {

    const userAlreadyExists = await this.settingsRepository.findOne({
      username
    });

    if(userAlreadyExists) {
      throw new Error("User already exists!");
    }

    // 2 passos para criar na tabela
    // Criar uma representação e salvar de fato
    const settings = this.settingsRepository.create({
      chat,
      username
    });

    await this.settingsRepository.save(settings);

    return settings;
  }
}

export { SettingsService }