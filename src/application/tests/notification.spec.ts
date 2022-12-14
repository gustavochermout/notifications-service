import { Content } from "../entities/content";
import { Notification } from "../entities/notification";

describe('Notification', () => {
  it('should be able to create a content', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
})