const getParticipant = (participants, email) => {
  return participants.find((participant) => participant.email !== email);
};

export default getParticipant;
