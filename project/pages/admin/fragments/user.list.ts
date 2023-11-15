import { BaseFragment } from '../../../../lib';
import { Button, Text } from '../../../../lib';

class UserListFragment extends BaseFragment {
  usernameItem;
  detailsButton;

  constructor(root, id) {
    super(root, id);
    this.usernameItem = this.init('.user_item_username', 'user name item', Text);
    this.detailsButton = this.init('.button_details', 'detsils button', Button);
  }
}



export { UserListFragment };
