export const messages = [
  {
    id: 1,
    text: 'Hola',
    date: '2021-08-01',
    time: '9:58',
    isMe: true,
    isRead: false,
    isResponse: false,
    messageResponseId: null,
    user: {
      id: 1,
      name: 'Luis Angel',
      avatar: 'https://avatars.githubusercontent.com/u/57289153?v=4',
    },
  },
  {
    id: 2,
    text: 'Agendar Demo y si',
    date: '2021-08-01',
    time: '10:00',
    isMe: false,
    isRead: true,
    isResponse: true,
    messageResponseId: 1,
    user: {
      id: 1,
      name: 'Luis Angel',
      avatar: 'https://avatars.githubusercontent.com/u/57289153?v=4',
    },
  },
  {
    id: 3,
    text: '!Hola!, ¿Te gustaría agendar una demostración de 15 minutos para hoy mismo?',
    date: '2021-08-01',
    time: '10:00',
    isMe: true,
    isRead: false,
    isResponse: false,
    messageResponseId: null,
    user: {
      id: 1,
      name: 'Luis Angel',
      avatar: 'https://avatars.githubusercontent.com/u/57289153?v=4',
    },
  },
  {
    id: 3,
    text: 'Por cierto, le hemos avisado a un agente de !Ventas.com sobre tu consulta. En un momento te contestará. ¡Ten un agradable día!',
    date: '2021-08-01',
    time: '10:00',
    isMe: true,
    isRead: false,
    isResponse: false,
    messageResponseId: null,
    user: {
      id: 1,
      name: 'Luis Angel',
      avatar: 'https://avatars.githubusercontent.com/u/57289153?v=4',
    },
  },
  {
    id: 3,
    text: `!Hola, Tienda Movil!.
    \n\\\nEspero que estés teniendo un excelente día.
    \n\\\nMi nombre es Diego León y quiero agradecerte por visitar nuestro sitio web. y mostrar interés en IVentas, de WhastApp y mucho más.
    \n\nEstamos aquí para ofrecerte asesoria personalizada y especifica para tus necesidades.
    \n\nEstaré encantado de llamarte personalmente para ayudarte a resolver cualquier duda que pueda surgir y asesorarte en el proceso de registro.
    \n\\\n¿Por favor, podrías indicarme la hora más conveniente para ti?`,
    date: 'Ayer',
    time: '10:00',
    isMe: true,
    isRead: false,
    isResponse: false,
    messageResponseId: null,
    user: {
      id: 1,
      name: 'Luis Angel',
      avatar: 'https://avatars.githubusercontent.com/u/57289153?v=4',
    },
  },
];