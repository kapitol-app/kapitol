
export const TEST= 'TEST';
export const test = message => ({
  type: TEST,
  message
});

export const MEMBER_RECEIVED = 'MEMBER_RECEIVED';
export const memberReceived = member => ({
  type: MEMBER_RECEIVED,
  member
});
