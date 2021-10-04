import PropTypes from 'prop-types';

//Styles
import { ListItem } from './User.style';

const User = ({ name, action, userID }) => {
  return (
    <ListItem onClick={action} data-id={userID}>
      {name}
    </ListItem>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  userID: PropTypes.number,
  action: PropTypes.func,
};

export default User;
