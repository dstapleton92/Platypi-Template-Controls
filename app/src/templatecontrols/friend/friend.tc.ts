import {register, ui} from 'platypus';

export default class FriendTemplateControl extends ui.TemplateControl {
    templateString: string = require('./friend.tc.html');

}

register.control('friend', FriendTemplateControl);
