import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from '../repositories/SettingsRepository';


class SettingsController {
  async create(request:Request, response:Response) {
    const { chat, username } = request.body;
    const settingsRepository = getCustomRepository(SettingsRepository);

    // 2 passos para criar na tabela
    // Criar uma representação e salvar de fato
    const settings = settingsRepository.create({
      chat,
      username
    })

    await settingsRepository.save(settings);

    return response.json(settings);
  }
}

export { SettingsController };