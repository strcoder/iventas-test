export const groupMessagesByDate = (messages: any) => {
  const agroupedMessages = messages.reduce((acc: any, message: any) => {
    const date = message.date;
    const dateMessages = acc[date] || [];

    return {
      ...acc,
      [date]: [...dateMessages, message],
    };
  }, {});

  return agroupedMessages;
}