import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context = {
        friends: [
            {
                name: 'Tyler',
                age: 26,
                title: 'Software Developer',
                show: true
            },
            {
                name: 'Hillary',
                age: 26,
                title: 'Software Developer',
                show: true
            },
            {
                name: 'Haley',
                age: 26,
                title: 'Depot/U Principal',
                show: true
            },
            {
                name: 'Matt',
                age: 38,
                title: 'Depot/U CEO',
                show: true
            }
        ]
    };
    
    hideFriend(friendIndex: number): void {
        let friendToHide = this.context.friends[friendIndex];
        friendToHide.show = false;
    }
    
    restoreFriends(): void {
        for (let i = 0; i < this.context.friends.length; i++) {
            let friend = this.context.friends[i];
            friend.show = true;
        }
    }
}

register.viewControl('home-vc', HomeViewControl);
