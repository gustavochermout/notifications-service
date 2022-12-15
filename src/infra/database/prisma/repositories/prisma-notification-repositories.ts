import { Injectable } from "@nestjs/common";
import { Notification } from "src/application/entities/notification";
import { NotificationsRepository } from "src/application/repositories/notifications-repository";
import { PrismaNotificationsMapper } from "../mappers/prisma-notification.mapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaNotificationsRepositories implements NotificationsRepository {
  constructor(private prismaService: PrismaService) { }

  async findById(notificationId: string): Promise<Notification> {
    throw new Error("Method not implemented.");
  }

  async save(notification: Notification): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationsMapper.toPrisma(notification);

    await this.prismaService.notification.create({
      data: raw,
    });
  }
}