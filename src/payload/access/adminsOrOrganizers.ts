import { Access } from 'payload/config';

const adminsOrOrganizers: Access = ({ req: { user } }) => {
  if (user) {
    const roles = user.roles || [];
    return roles.includes('admin') || roles.includes('organizer');
  }
  return false;
};

export default adminsOrOrganizers;