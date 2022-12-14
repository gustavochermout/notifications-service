import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { SendNotification } from "../use-cases/send-notification"

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotificatoin = new SendNotification(notificationsRepository);

    const { notification } = await sendNotificatoin.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  })
})